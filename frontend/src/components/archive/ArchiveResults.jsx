import { useNavigate } from 'react-router';
import { usePreferences } from '../../context/Preferences';
import EpisodeCard from '../EpisodeCard';

export default function ArchiveResults({ episodes }) {
  const { t } = usePreferences();
  const navigate = useNavigate();
  return (
    <>
      {episodes.length > 0 && (
        <button
          type="button"
          className="button secondary"
          onClick={() => {
            const episode =
              episodes[Math.floor(Math.random() * episodes.length)];
            navigate(`/expedientes/${episode.id}`);
          }}
        >
          {t.random}
        </button>
      )}
      <p className="result-count" role="status">
        {episodes.length} {episodes.length === 1 ? t.result : t.results}
      </p>
      {episodes.length ? (
        <div className="episode-grid">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      ) : (
        <p className="state-panel">{t.empty}</p>
      )}
    </>
  );
}
