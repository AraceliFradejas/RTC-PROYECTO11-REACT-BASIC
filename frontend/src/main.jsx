import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { PreferencesProvider } from './context/Preferences';
import Layout from './components/Layout';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Detail from './pages/Detail';
import Movies, { MovieDetail } from './pages/Movies';
import Watch from './pages/Watch';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PreferencesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="expedientes" element={<Archive key="all" />} />
            <Route path="expedientes/:id" element={<Detail />} />
            <Route
              path="favoritos"
              element={<Archive key="favorites" onlyFavorites />}
            />
            <Route path="peliculas" element={<Movies />} />
            <Route path="peliculas/:id" element={<MovieDetail />} />
            <Route path="donde-ver" element={<Watch />} />
            <Route path="mi-historia" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PreferencesProvider>
  </React.StrictMode>,
);
