import Artwork from '../Artwork';
import { usePreferences } from '../../context/Preferences';

export default function SeasonBrowser({ seasons, season, setSeason }) {
  const { t } = usePreferences();
  return (
    <section className="season-browser" aria-label={t.seasonsTitle}>
      <h2>{t.seasonsTitle}</h2>
      <p className="art-note">{t.aiArt}</p>
      <div className="season-strip">
        {seasons.map((number) => (
          <button
            type="button"
            key={number}
            className="season-tile"
            aria-pressed={season === String(number)}
            onClick={() =>
              setSeason(season === String(number) ? '' : String(number))
            }
          >
            <Artwork
              asset={`xfiles-temporadas/temporada-${String(number).padStart(2, '0')}`}
            />
            <span>
              {t.season} {number}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
