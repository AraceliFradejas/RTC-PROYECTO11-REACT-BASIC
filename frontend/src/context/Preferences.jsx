import { createContext, useContext, useEffect, useState } from 'react';
import { messages } from '../i18n';

const PreferencesContext = createContext(null);
const toggleSelection = (items, id) =>
  items.includes(id) ? items.filter((item) => item !== id) : [...items, id];

function readPreference(key, fallback, validate) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return validate(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

export function PreferencesProvider({ children }) {
  const [language, setLanguage] = useState(() =>
    readPreference('archivo.language', 'es', (v) =>
      ['es', 'en', 'de'].includes(v),
    ),
  );
  const [favorites, setFavorites] = useState(() =>
    readPreference(
      'archivo.favorites',
      [],
      (v) => Array.isArray(v) && v.every((id) => typeof id === 'string'),
    ),
  );
  const [watched, setWatched] = useState(() =>
    readPreference(
      'archivo.watched',
      [],
      (v) => Array.isArray(v) && v.every((id) => typeof id === 'string'),
    ),
  );
  const [country, setCountry] = useState(() =>
    readPreference('archivo.country', 'ES', (v) =>
      ['ES', 'DE', 'GB', 'US'].includes(v),
    ),
  );
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${messages[language].name} · ${messages[language].subtitle}`;
    document.querySelector('meta[name="description"]').content =
      messages[language].intro;
    document.querySelector('meta[property="og:title"]').content =
      document.title;
    document.querySelector('meta[property="og:description"]').content =
      messages[language].intro;
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('archivo.language', JSON.stringify(language));
      localStorage.setItem('archivo.favorites', JSON.stringify(favorites));
      localStorage.setItem('archivo.watched', JSON.stringify(watched));
      localStorage.setItem('archivo.country', JSON.stringify(country));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [language, favorites, country, watched]);

  function toggleFavorite(id) {
    setFavorites((current) => toggleSelection(current, id));
  }

  function toggleWatched(id) {
    setWatched((current) => toggleSelection(current, id));
  }

  return (
    <PreferencesContext.Provider
      value={{
        language,
        setLanguage,
        favorites,
        watched,
        toggleWatched,
        toggleFavorite,
        country,
        setCountry,
        storageError,
        t: messages[language],
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export const usePreferences = () => useContext(PreferencesContext);
