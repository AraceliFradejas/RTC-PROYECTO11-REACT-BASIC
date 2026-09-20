import { useState } from 'react';
import { Link } from 'react-router';
import { usePreferences } from '../context/Preferences';
import { useApi } from '../hooks/useApi';
import EpisodeCard from '../components/EpisodeCard';
import RequestState from '../components/RequestState';

const normalize = (text) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
export default function Archive({ onlyFavorites = false }) {
  const { t, language, favorites } = usePreferences();
  const [query, setQuery] = useState('');
  const [season, setSeason] = useState('');
  const request = useApi(`/api/episodes?lang=${language}`);
  const episodes = request.data?.episodes || [];
  const seasons = [...new Set(episodes.map((episode) => episode.season))].sort(
    (a, b) => a - b,
  );
  const filtered = episodes.filter(
    (episode) =>
      (!onlyFavorites || favorites.includes(episode.id)) &&
      (!season || episode.season === Number(season)) &&
      normalize(episode.title).includes(normalize(query.trim())),
  );
  return (
    <section className="page">
      <p className="eyebrow">
        {t.name} / {onlyFavorites ? t.favorites : t.archive}
      </p>
      <h1>{onlyFavorites ? t.favoriteTitle : t.catalogTitle}</h1>
      <div className="filters">
        <label>
          {t.search}
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
          />
        </label>
        <label>
          {t.season}
          <select value={season} onChange={(e) => setSeason(e.target.value)}>
            <option value="">{t.all}</option>
            {seasons.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </label>
      </div>
      {onlyFavorites && favorites.length === 0 ? (
        <div className="state-panel">
          <p>{t.noFavorites}</p>
          <Link className="button" to="/expedientes">
            {t.enter}
          </Link>
        </div>
      ) : (
        <>
          <RequestState {...request} />
          {request.status === 'success' && (
            <>
              <p className="result-count" role="status">
                {filtered.length} {t.results}
              </p>
              {filtered.length ? (
                <div className="episode-grid">
                  {filtered.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} />
                  ))}
                </div>
              ) : (
                <p className="state-panel">{t.empty}</p>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}
