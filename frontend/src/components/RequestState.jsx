import { usePreferences } from '../context/Preferences';
export default function RequestState({ status, retry }) {
  const { t } = usePreferences();
  if (status === 'success') return null;
  return (
    <div className="state-panel" role="status">
      <span className="file-symbol" aria-hidden="true">
        [ X ]
      </span>
      <p>
        {status === 'loading'
          ? t.loading
          : status === 'notFound'
            ? t.notFound
            : t.unavailable}
      </p>
      {status === 'error' && (
        <button type="button" className="button secondary" onClick={retry}>
          {t.retry}
        </button>
      )}
    </div>
  );
}
