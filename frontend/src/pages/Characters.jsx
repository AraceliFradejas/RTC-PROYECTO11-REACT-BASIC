import Artwork from '../components/Artwork';
import { usePreferences } from '../context/Preferences';

export default function Characters() {
  const { t } = usePreferences();
  return (
    <section className="page">
      <p className="eyebrow">
        {t.name} / {t.characters}
      </p>
      <h1>{t.agentsTitle}</h1>
      <p className="intro">{t.agentsIntro}</p>
      <div className="characters-grid">
        {[
          ['mulder', 'Fox Mulder', t.mulderText],
          ['scully', 'Dana Scully', t.scullyText],
        ].map(([id, name, description]) => (
          <article className="character-file" key={id}>
            <Artwork asset={`xfiles-assets/${id}`} alt={name} />
            <div>
              <p className="eyebrow">FBI / {name}</p>
              <h2>{name}</h2>
              <p>{description}</p>
              <small>{t.aiArt}</small>
            </div>
          </article>
        ))}
      </div>
      <section className="series-mottos">
        <h2>{t.mottosTitle}</h2>
        <p>{t.mottosNote}</p>
        <blockquote>{t.truth}</blockquote>
        <blockquote>{t.trust}</blockquote>
      </section>
    </section>
  );
}
