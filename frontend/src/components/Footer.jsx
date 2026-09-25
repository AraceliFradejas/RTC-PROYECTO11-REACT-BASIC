import { Link } from 'react-router';
import { usePreferences } from '../context/Preferences';

export default function Footer() {
  const { t } = usePreferences();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              X
            </span>
            <span>
              {t.name}
              <small>{t.subtitle}</small>
            </span>
          </Link>
          <p>{t.footer}</p>
        </div>
        <nav aria-label={t.footerExplore}>
          <h2>{t.footerExplore}</h2>
          <Link to="/expedientes">{t.archive}</Link>
          <Link to="/personajes">{t.characters}</Link>
          <Link to="/peliculas">{t.movies}</Link>
          <Link to="/donde-ver">{t.watch}</Link>
        </nav>
        <nav aria-label={t.footerProject}>
          <h2>{t.footerProject}</h2>
          <Link to="/mi-historia">{t.about}</Link>
          <a href="https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC">
            {t.footerRepository}
          </a>
        </nav>
        <nav aria-label={t.footerConnect}>
          <h2>{t.footerConnect}</h2>
          <a href="https://github.com/AraceliFradejas">GitHub</a>
          <a href="https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/">
            LinkedIn
          </a>
          <a href="https://medium.com/@araceli.fradejas">Medium</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {t.author}
        </p>
        <p>
          {t.footerAcademic}{' '}
          <a href="https://thepower.education/thepowermba/tech">
            The Power Tech School
          </a>
          {t.footerAcademicEnd || '.'}
        </p>
        <p>{t.footerPurpose}</p>
      </div>
    </footer>
  );
}
