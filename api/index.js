import { createApp } from '../backend/src/app.js';
import { connectDatabase } from '../backend/src/db.js';

const app = createApp();

export default async function handler(req, res) {
  // Reutilizo la conexión en las peticiones de una misma instancia.
  // La consulta de plataformas funciona aunque Atlas no esté disponible.
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (pathname === '/api/health' || pathname.startsWith('/api/episodes')) {
    try {
      await connectDatabase();
    } catch (error) {
      console.error('Conexión de Atlas no disponible:', error.name);
    }
  }
  return app(req, res);
}
