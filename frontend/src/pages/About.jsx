import { usePreferences } from '../context/Preferences';
export default function About() {
  const { t } = usePreferences();
  return (
    <section className="page narrow">
      <p className="eyebrow">{t.about}</p>
      <h1>{t.aboutTitle}</h1>
      <p className="intro">{t.aboutBody}</p>
      <blockquote className="personal-quote">{t.quote}</blockquote>
      <p>{t.unofficial}</p>
      <p className="signature">{t.author}</p>
      <aside className="source-credits" aria-label="TMDB">
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          <img
            src="/tmdb-logo.svg"
            alt="The Movie Database (TMDB)"
            width="245"
            height="18"
          />
        </a>
        <p lang="en">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
        <p>
          <a href="https://www.justwatch.com/" target="_blank" rel="noreferrer">
            JustWatch
          </a>{' '}
          · TMDB
        </p>
      </aside>
    </section>
  );
}
