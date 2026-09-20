import { createApp } from './app.js';
import { connectDatabase } from './db.js';

try {
  const connected = await connectDatabase();
  console.info(
    connected
      ? 'MongoDB conectado.'
      : 'MongoDB pendiente de configurar; catálogo no disponible.',
  );
} catch {
  console.error(
    'No he podido conectar con MongoDB. Revisa la configuración local.',
  );
}

createApp().listen(process.env.PORT || 3001, '127.0.0.1', () => {
  console.info(
    `API disponible en http://127.0.0.1:${process.env.PORT || 3001}`,
  );
});
