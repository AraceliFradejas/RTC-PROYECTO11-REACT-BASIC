import { Link } from 'react-router';
import { usePreferences } from '../context/Preferences';

export default function EpisodeCard({ episode }) {
  const { t, language, favorites, toggleFavorite } = usePreferences();
  const saved = favorites.includes(episode.id);
  return (
    <article className="episode-card">
      <p className="eyebrow">
        {t.season} {episode.season} / {t.episode} {episode.number}
      </p>
      <h2 lang={episode.titleLanguage}>{episode.title}</h2>
      {episode.titleLanguage !== language && (
        <small>
          {t.original} {episode.titleLanguage.toUpperCase()}
        </small>
      )}
      <div className="card-actions">
        <Link to={`/expedientes/${episode.id}`}>
          {t.open} <span aria-hidden="true">↗</span>
        </Link>
        <button
          className="bookmark"
          aria-label={saved ? t.remove : t.add}
          aria-pressed={saved}
          onClick={() => toggleFavorite(episode.id)}
        >
          {saved ? '★' : '☆'}
        </button>
      </div>
    </article>
  );
}
