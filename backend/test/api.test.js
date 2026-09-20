import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp, presentEpisode } from '../src/app.js';

const episode = {
  tmdbId: 12,
  season: 8,
  number: 1,
  translations: {
    en: { title: 'Example', summary: 'English summary' },
    de: { title: 'Beispiel', summary: '' },
  },
  sourceUrl: 'https://www.themoviedb.org/tv/4087',
};

test('Indico la falta de conexión sin publicar datos ficticios', async () => {
  const app = createApp({ ready: () => false });
  const health = await request(app).get('/api/health').expect(200);
  assert.equal(health.body.database, 'unavailable');
  const response = await request(app).get('/api/episodes').expect(503);
  assert.deepEqual(response.body, { code: 'CATALOG_UNAVAILABLE' });
});

test('Distingo el idioma del título y el de una sinopsis sin traducir', () => {
  const result = presentEpisode(episode, 'de');
  assert.equal(result.title, 'Beispiel');
  assert.equal(result.titleLanguage, 'de');
  assert.equal(result.summaryLanguage, 'en');
  assert.equal(result.summary, 'English summary');
});

test('Utilizo el parámetro de ruta para consultar el episodio', async () => {
  let received;
  const app = createApp({
    ready: () => true,
    episodes: {
      findOne: (filter) => {
        received = filter;
        return { lean: async () => episode };
      },
    },
  });
  const response = await request(app)
    .get('/api/episodes/12?lang=de')
    .expect(200);
  assert.deepEqual(received, { tmdbId: 12 });
  assert.equal(response.body.title, 'Beispiel');
});

test('Rechazo identificadores e idiomas inválidos', async () => {
  const app = createApp({ ready: () => true });
  await request(app).get('/api/episodes/abc').expect(400);
  await request(app).get('/api/episodes/0').expect(400);
  await request(app).get('/api/episodes?lang=fr').expect(400);
  await request(app).get('/api/episodes?lang=es&lang=de').expect(400);
});

test('Devuelvo 404 si el expediente no existe', async () => {
  const app = createApp({
    ready: () => true,
    episodes: { findOne: () => ({ lean: async () => null }) },
  });
  const response = await request(app).get('/api/episodes/999').expect(404);
  assert.equal(response.body.code, 'EPISODE_NOT_FOUND');
});
