import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import handler from '../../api/index.js';

test('Mi función de Vercel responde sin configuración y conserva las rutas de la API', async () => {
  const uri = process.env.MONGODB_URI;
  delete process.env.MONGODB_URI;
  try {
    const health = await request(handler).get('/api/health');
    assert.equal(health.status, 200);
    assert.equal(health.body.database, 'unavailable');
    const catalog = await request(handler).get('/api/episodes?lang=es');
    assert.equal(catalog.status, 503);
    assert.equal(catalog.body.code, 'CATALOG_UNAVAILABLE');
    const missing = await request(handler).get('/api/no-existe');
    assert.equal(missing.status, 404);
    assert.equal(missing.body.code, 'NOT_FOUND');
  } finally {
    if (uri !== undefined) process.env.MONGODB_URI = uri;
  }
});
