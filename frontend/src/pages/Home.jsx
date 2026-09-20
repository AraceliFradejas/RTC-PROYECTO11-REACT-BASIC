import Artwork from '../components/Artwork';
import { Link } from 'react-router';
import { usePreferences } from '../context/Preferences';

export default function Home() {
  const { t } = usePreferences();
  return (
    <>
      <section className="hero cinematic-hero">
        <Artwork
          asset="xfiles-assets/hero-mulder-scully"
          className="hero-art"
          eager
        />
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.hero}</h1>
          <p className="intro">{t.intro}</p>
          <Link className="button" to="/expedientes">
            {t.enter} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <span className="art-caption">{t.aiArt}</span>
      </section>
      <section className="features" aria-label={t.archive}>
        {[
          [t.explore, t.exploreText, '/expedientes'],
          [t.save, t.saveText, '/favoritos'],
          [t.discover, t.discoverText, '/donde-ver'],
        ].map(([title, body, path], i) => (
          <Link key={path} to={path}>
            <span className="feature-number">0{i + 1}</span>
            <h2>
              {title} <span aria-hidden="true">↗</span>
            </h2>
            <p>{body}</p>
          </Link>
        ))}
      </section>
      <section className="agents-preview page">
        <div>
          <p className="eyebrow">{t.characters}</p>
          <h2>{t.agentsTitle}</h2>
          <p>{t.agentsIntro}</p>
          <Link className="button secondary" to="/personajes">
            {t.characters} ↗
          </Link>
        </div>
        <Artwork asset="xfiles-coleccion-extra/07-juntos-bajo-la-lluvia" />
      </section>
      <section className="author-note">
        <p className="eyebrow">{t.note}</p>
        <blockquote>{t.quote}</blockquote>
        <Link to="/mi-historia">
          {t.author} <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
