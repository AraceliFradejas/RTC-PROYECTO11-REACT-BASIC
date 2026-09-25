import { usePreferences } from '../../context/Preferences';

export default function ArchiveFilters({
  query,
  setQuery,
  season,
  setSeason,
  seasons,
  viewing,
  setViewing,
}) {
  const { t } = usePreferences();
  return (
    <div className="filters">
      <label>
        {t.search}
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
        />
      </label>
      <label>
        {t.season}
        <select value={season} onChange={(e) => setSeason(e.target.value)}>
          <option value="">{t.all}</option>
          {seasons.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t.viewing}
        <select value={viewing} onChange={(e) => setViewing(e.target.value)}>
          <option value="">{t.allViewing}</option>
          <option value="watched">{t.watched}</option>
          <option value="pending">{t.pending}</option>
        </select>
      </label>
    </div>
  );
}
