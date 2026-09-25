import { watchMessages } from '../i18n/watch';
import { usePreferences } from '../context/Preferences';
import { useApi } from '../hooks/useApi';

export default function Watch() {
  const { t, country, setCountry, language } = usePreferences();
  const text = watchMessages[language];
  const { data, status, retry } = useApi(
    `/api/watch-providers?country=${country}`,
  );
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
      {status === 'loading' && (
        <p className="state-panel" role="status">
          {text.loading}
        </p>
      )}
      {(status === 'error' || status === 'notFound') && (
        <div className="state-panel" role="status">
          <p>{text.error}</p>
          <button type="button" className="button secondary" onClick={retry}>
            {t.retry}
          </button>
        </div>
      )}
      {status === 'success' && (
        <div className="availability">
          {data.offers.length ? (
            <ul className="provider-list">
              {data.offers.map((offer) => (
                <li key={`${offer.id}-${offer.mode}`}>
                  <strong>{offer.name}</strong>
                  <span>{text.modes[offer.mode]}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="state-panel">{text.empty}</p>
          )}
          <p>{text.scope}</p>
          <p className="provider-source">
            <a
              href="https://www.justwatch.com/"
              target="_blank"
              rel="noreferrer"
            >
              {text.source}
            </a>
            <br />
            {text.checked}:{' '}
            <time dateTime={data.checkedAt}>
              {new Intl.DateTimeFormat(language, {
                dateStyle: 'medium',
                timeStyle: 'short',
              }).format(new Date(data.checkedAt))}
            </time>
          </p>
          {data.link && (
            <a
              className="button"
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              {text.link} ↗
            </a>
          )}
        </div>
      )}
    </section>
  );
}
