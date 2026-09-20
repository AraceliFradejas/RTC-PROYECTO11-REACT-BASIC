import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { usePreferences } from '../context/Preferences';
import { useApi } from '../hooks/useApi';
import RequestState from '../components/RequestState';

function EpisodeContent({ episode }) {
  const { t, language, favorites, toggleFavorite } = usePreferences();
  const [revealed, setRevealed] = useState(false);
  const saved = favorites.includes(episode.id);
  return (
    <article className="detail-paper">
      <p className="eyebrow">
        {t.season} {episode.season} / {t.episode} {episode.number}
      </p>
      <h1 lang={episode.titleLanguage}>{episode.title}</h1>
      {episode.titleLanguage !== language && (
        <p>
          {t.original} {episode.titleLanguage.toUpperCase()}
        </p>
      )}
      <button
        className="button secondary"
        aria-pressed={saved}
        onClick={() => toggleFavorite(episode.id)}
      >
        {saved ? t.remove : t.add}
      </button>
      <div className="synopsis">
        <button
          className="text-button"
          aria-expanded={revealed}
          aria-controls="synopsis"
          onClick={() => setRevealed(!revealed)}
        >
          {revealed ? t.hide : t.reveal}
        </button>
        <div id="synopsis" hidden={!revealed}>
          {episode.summary && episode.summaryLanguage !== language && (
            <small>
              {t.original} {episode.summaryLanguage.toUpperCase()}
            </small>
          )}
          <p lang={episode.summary ? episode.summaryLanguage : language}>
            {episode.summary || t.noSummary}
          </p>
        </div>
      </div>
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
