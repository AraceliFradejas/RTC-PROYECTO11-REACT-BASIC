import { SERIES_ID, SourceError } from './tmdb.js';

export const countries = ['ES', 'DE', 'GB', 'US'];
const modes = ['flatrate', 'rent', 'buy', 'free', 'ads'];

export function normalizeProviders(payload, country, checkedAt) {
  if (
    !payload?.results ||
    typeof payload.results !== 'object' ||
    Array.isArray(payload.results)
  )
    throw new SourceError('TMDB_INVALID_RESPONSE');
  const region = payload.results[country];
  const offers = [];
  for (const mode of modes) {
    for (const provider of region?.[mode] || []) {
      if (
        !Number.isSafeInteger(provider.provider_id) ||
        typeof provider.provider_name !== 'string'
      )
        throw new SourceError('TMDB_INVALID_RESPONSE');
      offers.push({
        id: provider.provider_id,
        name: provider.provider_name,
        mode,
      });
    }
  }
  let link = null;
  try {
    const url = new URL(region?.link);
    if (url.protocol === 'https:' && url.hostname === 'www.themoviedb.org')
      link = url.toString();
  } catch {
    /* No genero enlaces si la fuente no proporciona uno válido. */
  }
  return { country, offers, link, checkedAt, source: 'JustWatch', via: 'TMDB' };
}

export function createProvidersService(
  getTmdb,
  { now = Date.now, ttl = 3600000 } = {},
) {
  let cache;
  let pending;
  return async (country) => {
    if (!countries.includes(country))
      throw new SourceError('INVALID_COUNTRY', 400);
    if (!cache || now() - cache.time >= ttl) {
      if (!pending) {
        pending = getTmdb(`/tv/${SERIES_ID}/watch/providers`)
          .then((payload) => {
            // Valido antes de conservar una respuesta en caché.
            for (const region of countries)
              normalizeProviders(payload, region, '');
            cache = { payload, time: now() };
          })
          .finally(() => {
            pending = null;
          });
      }
      await pending;
    }
    return normalizeProviders(
      cache.payload,
      country,
      new Date(cache.time).toISOString(),
    );
  };
}
