import Artwork from '../components/Artwork';
import Synopsis from '../components/Synopsis';
import { Link, useParams } from 'react-router';
import { usePreferences } from '../context/Preferences';
import { useApi } from '../hooks/useApi';
import RequestState from '../components/RequestState';

function EpisodeContent({ episode }) {
  const { t, language, favorites, toggleFavorite, watched, toggleWatched } =
    usePreferences();
  const seen = watched.includes(episode.id);
  const saved = favorites.includes(episode.id);
  return (
    <article className="detail-paper">
      <p className="eyebrow">
        {t.season} {episode.season} / {t.episode} {episode.number}
      </p>
      <figure className="detail-art">
        <Artwork
          asset={`xfiles-temporadas/temporada-${String(episode.season).padStart(2, '0')}`}
        />
        <figcaption>
          {t.aiArt} · {t.season} {episode.season}
        </figcaption>
      </figure>
      <h1 lang={episode.titleLanguage}>{episode.title}</h1>
      {episode.titleLanguage !== language && (
        <p>
          {t.original} {episode.titleLanguage.toUpperCase()}
        </p>
      )}
      <button
        type="button"
        className="button secondary"
        aria-pressed={saved}
        onClick={() => toggleFavorite(episode.id)}
      >
        {saved ? t.remove : t.add}
      </button>
      <button
        type="button"
        className="watched-toggle"
        aria-pressed={seen}
        onClick={() => toggleWatched(episode.id)}
      >
        {seen ? `✓ ${t.markUnwatched}` : t.markWatched}
      </button>
      <Synopsis
        summary={episode.summary}
        summaryLanguage={episode.summaryLanguage}
      />
      {episode.sourceUrl?.startsWith('https://www.themoviedb.org/') && (
        <a href={episode.sourceUrl} target="_blank" rel="noreferrer">
          {t.source} ↗
        </a>
      )}
    </article>
  );
}
export default function Detail() {
  const { id } = useParams();
  const { t, language } = usePreferences();
  const request = useApi(
    `/api/episodes/${encodeURIComponent(id)}?lang=${language}`,
  );
  return (
    <section className="page">
      <Link className="back-link" to="/expedientes">
        ← {t.back}
      </Link>
      <RequestState {...request} />
      {request.status === 'success' && (
        <EpisodeContent key={id} episode={request.data} />
      )}
    </section>
  );
}
