import Artwork from '../components/Artwork';
import { story } from '../content/story';
import { usePreferences } from '../context/Preferences';
export default function About() {
  const { t, language } = usePreferences();
  const personal = story[language];
  return (
    <section className="page narrow">
      <p className="eyebrow">{t.about}</p>
      <h1>{personal.title}</h1>
      <p className="intro">{personal.intro}</p>
      <blockquote className="personal-quote">{personal.quote}</blockquote>
      <figure className="memory-art">
        <Artwork asset="xfiles-coleccion-extra/17-juntos-en-el-tren" />
        <figcaption>{t.aiArt}</figcaption>
      </figure>
      <div className="personal-story">
        {personal.sections.map(([title, paragraphs], index) => (
          <section key={index} aria-labelledby={`memory-${index}`}>
            <span className="eyebrow" aria-hidden="true">
              0{index + 1}
            </span>
            <h2 id={`memory-${index}`}>{title}</h2>
            {paragraphs.map((paragraph, number) => (
              <p key={number}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
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
