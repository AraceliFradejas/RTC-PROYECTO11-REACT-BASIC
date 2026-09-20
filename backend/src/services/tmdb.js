export const SERIES_ID = 4087;

export class SourceError extends Error {
  constructor(code, status = 502) {
    super(code);
    this.name = 'SourceError';
    this.code = code;
    this.status = status;
  }
}

export function createTmdbClient({
  token = process.env.TMDB_READ_TOKEN,
  fetcher = fetch,
} = {}) {
  return async function getTmdb(path, parameters = {}) {
    if (!token?.trim()) throw new SourceError('TMDB_NOT_CONFIGURED', 503);
    const url = new URL(`https://api.themoviedb.org/3${path}`);
    for (const [key, value] of Object.entries(parameters))
      url.searchParams.set(key, value);
    let response;
    try {
      response = await fetcher(url, {
        headers: {
          Authorization: `Bearer ${token.trim()}`,
          Accept: 'application/json',
        },
        signal: AbortSignal.timeout(15000),
      });
    } catch {
      throw new SourceError('TMDB_UNAVAILABLE');
    }
    if (response.status === 401 || response.status === 403)
      throw new SourceError('TMDB_AUTH_ERROR', 503);
    if (response.status === 429) throw new SourceError('TMDB_RATE_LIMIT', 503);
    if (!response.ok) throw new SourceError('TMDB_UNAVAILABLE');
    try {
      return await response.json();
    } catch {
      throw new SourceError('TMDB_INVALID_RESPONSE');
    }
  };
}
