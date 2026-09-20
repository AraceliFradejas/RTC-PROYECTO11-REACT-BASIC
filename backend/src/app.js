import express from 'express';
import { databaseReady } from './db.js';
import { Episode } from './models/Episode.js';

const languages = ['es', 'en', 'de'];

export function presentEpisode(episode, language) {
  const titleLanguage = episode.translations[language]?.title ? language : 'en';
  const summaryLanguage = episode.translations[language]?.summary
    ? language
    : 'en';
  return {
    id: String(episode.tmdbId),
    season: episode.season,
    number: episode.number,
    title: episode.translations[titleLanguage]?.title || '',
    summary: episode.translations[summaryLanguage]?.summary || '',
    titleLanguage,
    summaryLanguage,
    sourceUrl: episode.sourceUrl,
    image: episode.image?.url || null,
  };
}

export function createApp({ ready = databaseReady, episodes = Episode } = {}) {
  const app = express();
  app.disable('x-powered-by');
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', database: ready() ? 'connected' : 'unavailable' });
  });

  app.use('/api/episodes', (req, res, next) => {
    if (req.query.lang && !languages.includes(req.query.lang)) {
      return res.status(400).json({ code: 'INVALID_LANGUAGE' });
    }
    if (!ready()) return res.status(503).json({ code: 'CATALOG_UNAVAILABLE' });
    next();
  });

  app.get('/api/episodes', async (req, res) => {
    const language = req.query.lang || 'es';
    const data = await episodes.find().sort({ season: 1, number: 1 }).lean();
    res.json({
      episodes: data.map((episode) => presentEpisode(episode, language)),
    });
  });

  app.get('/api/episodes/:id', async (req, res) => {
    if (!/^\d{1,10}$/.test(req.params.id) || Number(req.params.id) < 1) {
      return res.status(400).json({ code: 'INVALID_ID' });
    }
    const episode = await episodes
      .findOne({ tmdbId: Number(req.params.id) })
      .lean();
    if (!episode) return res.status(404).json({ code: 'EPISODE_NOT_FOUND' });
    res.json(presentEpisode(episode, req.query.lang || 'es'));
  });

  app.use('/api', (_req, res) => res.status(404).json({ code: 'NOT_FOUND' }));
  app.use((error, _req, res, _next) => {
    // No muestro cadenas de conexión ni detalles internos al cliente.
    console.error('Error de la API:', error.name);
    res.status(500).json({ code: 'SERVER_ERROR' });
  });
  return app;
}
