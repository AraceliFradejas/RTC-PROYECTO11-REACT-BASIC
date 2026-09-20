import { SourceError } from './tmdb.js';

export const movieIds = [846, 8836];
const locales = { es: 'es-ES', en: 'en-US', de: 'de-DE' };

export function createMoviesService(getTmdb) {
  const cache = new Map();
  const pending = new Map();
  return async function movies(language) {
    if (cache.get(language)?.expires > Date.now())
      return cache.get(language).data;
    if (pending.has(language)) return pending.get(language);
    const task = Promise.all(
      movieIds.map(async (id) => {
        const original = await getTmdb(`/movie/${id}`, { language: 'en-US' });
        const translated =
          language === 'en'
            ? original
            : await getTmdb(`/movie/${id}`, { language: locales[language] });
        if (original.id !== id || translated.id !== id || !original.title)
          throw new SourceError('MOVIE_INVALID');
        return {
          id: String(id),
          title: translated.title || original.title,
          titleLanguage: translated.title ? language : 'en',
          summary: translated.overview || original.overview || '',
          summaryLanguage: translated.overview ? language : 'en',
          releaseDate: original.release_date || '',
          runtime: original.runtime || null,
          sourceUrl: `https://www.themoviedb.org/movie/${id}`,
        };
      }),
    )
      .then((data) => {
        cache.set(language, { data, expires: Date.now() + 3600000 });
        return data;
      })
      .finally(() => pending.delete(language));
    pending.set(language, task);
    return task;
  };
}
