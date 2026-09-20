import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createMoviesService } from '../src/services/movies.js';
import { createApp } from '../src/app.js';

test('Conservo el idioma real de la sinopsis y reutilizo las consultas de películas', async () => {
  let calls = 0;
  const service = createMoviesService(async (path, { language }) => {
    calls++;
    return {
      id: Number(path.split('/').pop()),
      title: language === 'en-US' ? 'Original' : 'Traducción',
      overview: language === 'en-US' ? 'Summary' : '',
      release_date: '1998-06-19',
      runtime: 120,
    };
  });
  const [first, second] = await Promise.all([service('es'), service('es')]);
  assert.equal(calls, 4);
  assert.deepEqual(first, second);
  assert.equal(first[0].titleLanguage, 'es');
  assert.equal(first[0].summaryLanguage, 'en');
  assert.equal(first[0].summary, 'Summary');
  await service('es');
  assert.equal(calls, 4);
});

test('Limito las fichas de cine a las películas del proyecto y valido el idioma', async () => {
  let calls = 0;
  const app = createApp({
    movies: async () => {
      calls++;
      return [{ id: '846', title: 'Película' }];
    },
  });
  assert.equal((await request(app).get('/api/movies/999')).status, 404);
  assert.equal((await request(app).get('/api/movies?lang=fr')).status, 400);
  assert.equal(calls, 0);
  const detail = await request(app).get('/api/movies/846?lang=de');
  assert.equal(detail.status, 200);
  assert.equal(detail.body.id, '846');
});
