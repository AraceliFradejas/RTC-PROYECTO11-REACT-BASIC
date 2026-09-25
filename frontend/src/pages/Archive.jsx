import ArchiveFilters from '../components/archive/ArchiveFilters';
import SeasonBrowser from '../components/archive/SeasonBrowser';
import { useState } from 'react';
import { Link } from 'react-router';
import { usePreferences } from '../context/Preferences';
import { useApi } from '../hooks/useApi';
import ArchiveResults from '../components/archive/ArchiveResults';
import RequestState from '../components/RequestState';

const normalize = (text) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
export default function Archive({ onlyFavorites = false }) {
  const { t, language, favorites, watched } = usePreferences();
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
        <SeasonBrowser
          seasons={seasons}
          season={season}
          setSeason={setSeason}
        />
      )}
      <ArchiveFilters
        query={query}
        setQuery={setQuery}
        season={season}
        setSeason={setSeason}
        seasons={seasons}
        viewing={viewing}
        setViewing={setViewing}
      />
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
            <ArchiveResults episodes={filtered} />
          )}
        </>
      )}
    </section>
  );
}
