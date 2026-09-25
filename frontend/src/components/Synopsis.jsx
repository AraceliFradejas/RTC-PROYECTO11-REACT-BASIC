import { useId, useState } from 'react';
import { usePreferences } from '../context/Preferences';

export default function Synopsis({ summary, summaryLanguage }) {
  const { t, language } = usePreferences();
  const [revealed, setRevealed] = useState(false);
  const id = useId();
  return (
    <div className="synopsis">
      <button
        type="button"
        className="text-button"
        aria-expanded={revealed}
        aria-controls={id}
        onClick={() => setRevealed(!revealed)}
      >
        {revealed ? t.hide : t.reveal}
      </button>
      <div id={id} hidden={!revealed}>
        {summary && summaryLanguage !== language && (
          <small>
            {t.original} {summaryLanguage.toUpperCase()}
          </small>
        )}
        <p lang={summary ? summaryLanguage : language}>
          {summary || t.noSummary}
        </p>
      </div>
    </div>
  );
}
