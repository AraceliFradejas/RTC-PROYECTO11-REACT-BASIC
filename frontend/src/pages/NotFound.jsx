import { Link } from 'react-router';
import { usePreferences } from '../context/Preferences';
export default function NotFound() {
  const { t } = usePreferences();
  return (
    <section className="page narrow">
      <p className="eyebrow">404 / X</p>
      <h1>{t.missingPage}</h1>
      <p>{t.missingText}</p>
      <Link className="button" to="/">
        {t.home}
      </Link>
    </section>
  );
}
