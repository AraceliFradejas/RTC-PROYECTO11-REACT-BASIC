import { usePreferences } from '../context/Preferences';
import { useApi } from '../hooks/useApi';

const labels = {
  es: {
    loading: 'Estoy consultando la disponibilidad…',
    error: 'No puedo consultar las plataformas ahora. Lo intentaré de nuevo.',
    empty: 'La fuente no devuelve ofertas para este país.',
    checked: 'Última consulta',
    source: 'Datos de JustWatch mediante TMDB',
    link: 'Consultar disponibilidad',
    scope:
      'La disponibilidad corresponde a la serie. Compruebo las temporadas, el audio y los subtítulos en la plataforma antes de contratar.',
    modes: {
      flatrate: 'Suscripción',
      buy: 'Compra',
      rent: 'Alquiler',
      free: 'Gratis',
      ads: 'Con anuncios',
    },
  },
  en: {
    loading: 'Checking availability…',
    error: 'I cannot check providers right now. I can try again.',
    empty: 'The source returns no offers for this country.',
    checked: 'Last checked',
    source: 'JustWatch data via TMDB',
    link: 'Check availability',
    scope:
      'Availability is listed for the series. I check seasons, audio and subtitles on the provider before subscribing.',
    modes: {
      flatrate: 'Subscription',
      buy: 'Buy',
      rent: 'Rent',
      free: 'Free',
      ads: 'With ads',
    },
  },
  de: {
    loading: 'Ich prüfe die Verfügbarkeit…',
    error:
      'Ich kann die Anbieter gerade nicht abfragen. Ich kann es erneut versuchen.',
    empty: 'Die Quelle liefert keine Angebote für dieses Land.',
    checked: 'Zuletzt geprüft',
    source: 'Daten von JustWatch über TMDB',
    link: 'Verfügbarkeit prüfen',
    scope:
      'Die Verfügbarkeit bezieht sich auf die Serie. Vor einem Abonnement prüfe ich Staffeln, Tonspuren und Untertitel beim Anbieter.',
    modes: {
      flatrate: 'Abonnement',
      buy: 'Kaufen',
      rent: 'Leihen',
      free: 'Kostenlos',
      ads: 'Mit Werbung',
    },
  },
};
export default function Watch() {
  const { t, country, setCountry, language } = usePreferences();
  const text = labels[language];
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
          <button className="button secondary" onClick={retry}>
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
