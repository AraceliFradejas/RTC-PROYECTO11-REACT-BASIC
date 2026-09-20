import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from '../src/app.js';
import { createTmdbClient, SourceError } from '../src/services/tmdb.js';
import {
  collectCatalog,
  importOperations,
  mergeSeason,
} from '../src/services/catalog.js';
import { createProvidersService } from '../src/services/providers.js';

const english = {
  id: 12,
  name: 'Test episode',
  overview: 'Test summary',
  season_number: 1,
  episode_number: 1,
  air_date: '1993-09-10',
};

test('No hago una petición externa sin token', async () => {
  const client = createTmdbClient({
    token: '',
    fetcher: () => assert.fail('No debería consultar la red'),
  });
  await assert.rejects(client('/tv/4087'), {
    code: 'TMDB_NOT_CONFIGURED',
    status: 503,
  });
});

test('Envío el token en la cabecera y traduzco los errores sin exponerlo', async () => {
  const client = createTmdbClient({
    token: 'token-de-prueba',
    fetcher: async (url, options) => {
      assert.equal(url.searchParams.get('language'), 'de-DE');
      assert.equal(url.searchParams.has('api_key'), false);
      assert.equal(options.headers.Authorization, 'Bearer token-de-prueba');
      return { status: 401, ok: false };
    },
  });
  await assert.rejects(client('/tv/4087', { language: 'de-DE' }), {
    code: 'TMDB_AUTH_ERROR',
  });
});

test('Uno las traducciones por identificador, no por posición', () => {
  const german = { ...english, name: 'Testfolge', overview: '' };
  const result = mergeSeason(
    {
      en: { episodes: [english] },
      es: { episodes: [] },
      de: { episodes: [{ ...german, id: 99 }, german] },
    },
    1,
  );
  assert.equal(result[0].translations.de.title, 'Testfolge');
  assert.equal(result[0].translations.es, undefined);
  assert.equal(result[0].translations.de.summary, '');
});

test('Compruebo la serie y excluyo especiales de la importación ordinaria', async () => {
  const calls = [];
  const result = await collectCatalog(async (path, query) => {
    calls.push([path, query.language]);
    if (path === '/tv/4087')
      return {
        id: 4087,
        original_name: 'The X-Files',
        seasons: [{ season_number: 0 }, { season_number: 1 }],
      };
    return { episodes: [english] };
  });
  assert.equal(result.length, 1);
  assert.equal(calls.length, 4);
  assert.equal(
    calls.some(([path]) => path.endsWith('/0')),
    false,
  );
  await assert.rejects(
    collectCatalog(async () => ({
      id: 1,
      original_name: 'Other show',
      seasons: [],
    })),
    { code: 'CATALOG_WRONG_SERIES' },
  );
});

test('Genero actualizaciones repetibles sin sustituir recursos propios', () => {
  const item = mergeSeason(
    { en: { episodes: [english] }, es: { episodes: [] }, de: { episodes: [] } },
    1,
  )[0];
  const [operation] = importOperations([item]);
  assert.deepEqual(operation.updateOne.filter, { tmdbId: 12 });
  assert.equal(operation.updateOne.upsert, true);
  assert.equal('image' in operation.updateOne.update.$set, false);
});

test('Conservo país, modalidades y fecha de consulta en la caché', async () => {
  let calls = 0;
  let time = 1000;
  const service = createProvidersService(
    async () => {
      calls++;
      return {
        results: {
          ES: {
            link: 'https://www.themoviedb.org/tv/4087/watch?locale=ES',
            flatrate: [
              { provider_id: 1, provider_name: 'Proveedor de prueba' },
            ],
            buy: [{ provider_id: 1, provider_name: 'Proveedor de prueba' }],
          },
        },
      };
    },
    { now: () => time, ttl: 100 },
  );
  const first = await service('ES');
  assert.deepEqual(
    first.offers.map((item) => item.mode),
    ['flatrate', 'buy'],
  );
  const empty = await service('DE');
  assert.deepEqual(empty.offers, []);
  assert.equal(empty.country, 'DE');
  assert.equal(empty.checkedAt, first.checkedAt);
  assert.equal(calls, 1);
  time += 101;
  await service('ES');
  assert.equal(calls, 2);
});

test('La disponibilidad distingue parámetros inválidos de un fallo del proveedor', async () => {
  const app = createApp({
    providers: async () => {
      throw new SourceError('TMDB_UNAVAILABLE');
    },
  });
  await request(app).get('/api/watch-providers?country=XX').expect(400);
  const response = await request(app)
    .get('/api/watch-providers?country=ES')
    .expect(502);
  assert.equal(response.body.code, 'TMDB_UNAVAILABLE');
});
