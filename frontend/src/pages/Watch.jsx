import { usePreferences } from '../context/Preferences';
export default function Watch() {
  const { t, country, setCountry } = usePreferences();
  return (
    <section className="page narrow">
      <p className="eyebrow">{t.watch}</p>
      <h1>{t.watchTitle}</h1>
      <p className="intro">{t.watchIntro}</p>
      <label className="country-label">
        {t.country}
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {Object.entries(t.countries).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <p className="state-panel">{t.watchPending}</p>
    </section>
  );
}
