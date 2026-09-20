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
    </section>
  );
}
