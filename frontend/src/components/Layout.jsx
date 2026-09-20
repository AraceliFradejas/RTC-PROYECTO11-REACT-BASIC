import { useEffect, useRef } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { usePreferences } from '../context/Preferences';

export default function Layout() {
  const { t, language, setLanguage, storageError } = usePreferences();
  const { pathname } = useLocation();
  const main = useRef(null);
  const previous = useRef(pathname);
  useEffect(() => {
    if (previous.current !== pathname) {
      main.current?.focus();
      window.scrollTo(0, 0);
      previous.current = pathname;
    }
  }, [pathname]);
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <header className="header">
        <Link className="brand" to="/" aria-label={`${t.name} — ${t.home}`}>
          <span className="brand-mark" aria-hidden="true">
            X
          </span>
          <span>
            {t.name}
            <small>{t.subtitle}</small>
          </span>
        </Link>
        <nav aria-label={t.archive}>
          <NavLink to="/expedientes">{t.archive}</NavLink>
          <NavLink to="/favoritos">{t.favorites}</NavLink>
          <NavLink to="/donde-ver">{t.watch}</NavLink>
        </nav>
        <label className="language">
          <span className="sr-only">{t.language}</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>
        </label>
      </header>
      {storageError && (
        <p className="notice" role="status">
          {t.storage}
        </p>
      )}
      <main id="main" ref={main} tabIndex={-1}>
        <Outlet />
      </main>
      <footer>
        <span>
          {t.footer}
          <br />
          <small>© {t.author}</small>
        </span>
        <Link to="/mi-historia">{t.about}</Link>
        <span className="footer-x" aria-hidden="true">
          X
        </span>
      </footer>
    </>
  );
}
