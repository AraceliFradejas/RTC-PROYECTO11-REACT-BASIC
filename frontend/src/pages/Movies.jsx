import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { usePreferences } from '../context/Preferences';
import { useApi } from '../hooks/useApi';
import RequestState from '../components/RequestState';

export default function Movies() {
  const { t, language } = usePreferences();
  const request = useApi(`/api/movies?lang=${language}`);
  return (
    <section className="page">
      <p className="eyebrow">
        {t.name} / {t.movies}
      </p>
      <h1>{t.movieTitle}</h1>
      <p className="intro">{t.movieIntro}</p>
      <RequestState {...request} />
      {request.status === 'success' && (
        <div className="episode-grid">
          {request.data.movies.map((movie) => (
            <article className="episode-card" key={movie.id}>
              <p className="eyebrow">
                {movie.releaseDate.slice(0, 4)}
                {movie.runtime ? ` · ${movie.runtime} min` : ''}
              </p>
              <h2 lang={movie.titleLanguage}>{movie.title}</h2>
              <Link to={`/peliculas/${movie.id}`}>{t.movieOpen} ↗</Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function MovieContent({ movie }) {
  const { t, language } = usePreferences();
  const [revealed, setRevealed] = useState(false);
  return (
    <article className="detail-paper">
      <p className="eyebrow">
        {movie.releaseDate.slice(0, 4)}
        {movie.runtime ? ` · ${movie.runtime} min` : ''}
      </p>
      <h1 lang={movie.titleLanguage}>{movie.title}</h1>
      {movie.titleLanguage !== language && (
        <p>
          {t.original} {movie.titleLanguage.toUpperCase()}
        </p>
      )}
      <div className="synopsis">
        <button
          className="text-button"
          aria-expanded={revealed}
          aria-controls="movie-synopsis"
          onClick={() => setRevealed(!revealed)}
        >
          {revealed ? t.hide : t.reveal}
        </button>
        <div id="movie-synopsis" hidden={!revealed}>
          {movie.summary && movie.summaryLanguage !== language && (
            <small>
              {t.original} {movie.summaryLanguage.toUpperCase()}
            </small>
          )}
          <p lang={movie.summary ? movie.summaryLanguage : language}>
            {movie.summary || t.noSummary}
          </p>
        </div>
      </div>
      <a href={movie.sourceUrl} target="_blank" rel="noreferrer">
        {t.source} ↗
      </a>
    </article>
  );
}

export function MovieDetail() {
  const { id } = useParams();
  const { t, language } = usePreferences();
  const request = useApi(
    `/api/movies/${encodeURIComponent(id)}?lang=${language}`,
  );
  return (
    <section className="page">
      <Link className="back-link" to="/peliculas">
        ← {t.backMovies}
      </Link>
      <RequestState {...request} />
      {request.status === 'success' && (
        <MovieContent key={id} movie={request.data} />
      )}
    </section>
  );
}
