import { Link } from 'react-router';
import { usePreferences } from '../context/Preferences';

export default function Home() {
  const { t } = usePreferences();
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.hero}</h1>
          <p className="intro">{t.intro}</p>
          <Link className="button" to="/expedientes">
            {t.enter} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="dossier" aria-hidden="true">
          <span className="dossier-tab">XF / 001</span>
          <div className="dossier-page">
            <div className="stamp">{t.name}</div>
            <div className="evidence-art">
              <span className="beam" />
              <span className="silhouette" />
            </div>
            <div className="redaction long" />
            <div className="redaction" />
            <div className="dossier-bottom">
              <span>10.09.1993</span>
              <span>×</span>
            </div>
          </div>
        </div>
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
