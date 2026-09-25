import Artwork from '../components/Artwork';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
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
  const { t, language, favorites, watched } = usePreferences();
  const navigate = useNavigate();
  const [viewing, setViewing] = useState('');
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
      (!viewing ||
        (viewing === 'watched'
          ? watched.includes(episode.id)
          : !watched.includes(episode.id))) &&
      (!season || episode.season === Number(season)) &&
      normalize(episode.title).includes(normalize(query.trim())),
  );
  const watchedCount = episodes.filter((episode) =>
    watched.includes(episode.id),
  ).length;
  return (
    <section className="page">
      <p className="eyebrow">
        {t.name} / {onlyFavorites ? t.favorites : t.archive}
      </p>
      <h1>{onlyFavorites ? t.favoriteTitle : t.catalogTitle}</h1>
      {request.status === 'success' && episodes.length > 0 && (
        <div className="progress-panel">
          <label htmlFor="viewing-progress">
            {t.progress}: {watchedCount} / {episodes.length}
          </label>
          <progress
            id="viewing-progress"
            value={watchedCount}
            max={episodes.length}
          />
          <small>{t.localProgress}</small>
        </div>
      )}
      {!onlyFavorites && seasons.length > 0 && (
        <section className="season-browser" aria-label={t.seasonsTitle}>
          <h2>{t.seasonsTitle}</h2>
          <p className="art-note">{t.aiArt}</p>
          <div className="season-strip">
            {seasons.map((number) => (
              <button
                key={number}
                className="season-tile"
                aria-pressed={season === String(number)}
                onClick={() =>
                  setSeason(season === String(number) ? '' : String(number))
                }
              >
                <Artwork
                  asset={`xfiles-temporadas/temporada-${String(number).padStart(2, '0')}`}
                />
                <span>
                  {t.season} {number}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}
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
        <label>
          {t.viewing}
          <select value={viewing} onChange={(e) => setViewing(e.target.value)}>
            <option value="">{t.allViewing}</option>
            <option value="watched">{t.watched}</option>
            <option value="pending">{t.pending}</option>
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
              {filtered.length > 0 && (
                <button
                  className="button secondary"
                  onClick={() => {
                    const episode =
                      filtered[Math.floor(Math.random() * filtered.length)];
                    navigate(`/expedientes/${episode.id}`);
                  }}
                >
                  {t.random}
                </button>
              )}
              <p className="result-count" role="status">
                {filtered.length} {filtered.length === 1 ? t.result : t.results}
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
