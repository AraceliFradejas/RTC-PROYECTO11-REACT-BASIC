import { SERIES_ID, SourceError } from './tmdb.js';

const locales = { en: 'en-US', es: 'es-ES', de: 'de-DE' };

export function mergeSeason(versions, seasonNumber) {
  if (!versions.en?.episodes?.length)
    throw new SourceError('CATALOG_INVALID_SEASON');
  const translationsById = {};
  for (const language of Object.keys(locales)) {
    if (!Array.isArray(versions[language]?.episodes))
      throw new SourceError('CATALOG_INVALID_SEASON');
    translationsById[language] = new Map(
      versions[language].episodes.map((item) => [item.id, item]),
    );
  }
  return versions.en.episodes.map((episode) => {
    if (
      !Number.isSafeInteger(episode.id) ||
      episode.id < 1 ||
      !episode.name?.trim() ||
      episode.season_number !== seasonNumber ||
      !Number.isSafeInteger(episode.episode_number) ||
      episode.episode_number < 1
    ) {
      throw new SourceError('CATALOG_INVALID_EPISODE');
    }
    const translations = {};
    for (const language of Object.keys(locales)) {
      const translated = translationsById[language].get(episode.id);
      if (translated?.name?.trim())
        translations[language] = {
          title: translated.name.trim(),
          summary: translated.overview?.trim() || '',
        };
    }
    return {
      tmdbId: episode.id,
      season: seasonNumber,
      number: episode.episode_number,
      airDate: episode.air_date || '',
      translations,
      sourceUrl: `https://www.themoviedb.org/tv/${SERIES_ID}/season/${seasonNumber}/episode/${episode.episode_number}`,
    };
  });
}

export async function collectCatalog(getTmdb) {
  const show = await getTmdb(`/tv/${SERIES_ID}`, { language: 'en-US' });
  if (
    show.id !== SERIES_ID ||
    show.original_name !== 'The X-Files' ||
    !Array.isArray(show.seasons)
  )
    throw new SourceError('CATALOG_WRONG_SERIES');
  const seasons = show.seasons
    .map((item) => item.season_number)
    .filter((number) => Number.isSafeInteger(number) && number > 0)
    .sort((a, b) => a - b);
  if (!seasons.length || new Set(seasons).size !== seasons.length)
    throw new SourceError('CATALOG_INVALID_SEASONS');
  const catalog = [];
  for (const season of seasons) {
    const responses = await Promise.all(
      Object.entries(locales).map(async ([language, locale]) => [
        language,
        await getTmdb(`/tv/${SERIES_ID}/season/${season}`, {
          language: locale,
        }),
      ]),
    );
    catalog.push(...mergeSeason(Object.fromEntries(responses), season));
  }
  if (new Set(catalog.map((item) => item.tmdbId)).size !== catalog.length)
    throw new SourceError('CATALOG_DUPLICATE_IDS');
  return catalog;
}

export function importOperations(catalog) {
  // Actualizo solo campos del proveedor; conservo imágenes y contenido propio.
  return catalog.map((episode) => ({
    updateOne: {
      filter: { tmdbId: episode.tmdbId },
      update: { $set: episode },
      upsert: true,
    },
  }));
}
