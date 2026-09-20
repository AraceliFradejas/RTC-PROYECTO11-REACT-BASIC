import mongoose from 'mongoose';
import { connectDatabase } from '../src/db.js';
import { Episode } from '../src/models/Episode.js';
import { createTmdbClient, SourceError } from '../src/services/tmdb.js';
import { collectCatalog, importOperations } from '../src/services/catalog.js';

const apply = process.argv.includes('--apply');
try {
  if (apply && !process.env.MONGODB_URI?.trim())
    throw new SourceError('MONGODB_NOT_CONFIGURED');
  const catalog = await collectCatalog(createTmdbClient());
  // Valido todo antes de escribir. Si falla una petición, no importo datos parciales.
  for (const item of catalog) await new Episode(item).validate();
  console.info(
    `Catálogo comprobado: ${catalog.length} episodios, ${new Set(catalog.map((item) => item.season)).size} temporadas.`,
  );
  for (const language of ['es', 'en', 'de'])
    console.info(
      `${language}: ${catalog.filter((item) => item.translations[language]?.summary).length} sinopsis recibidas. Pendientes de revisión lingüística.`,
    );
  if (!apply) {
    console.info('Vista previa terminada. No he escrito en MongoDB.');
  } else {
    await connectDatabase();
    if (mongoose.connection.name !== 'expediente_x')
      throw new SourceError('UNEXPECTED_DATABASE');
    await Episode.init();
    const result = await Episode.bulkWrite(importOperations(catalog), {
      ordered: true,
    });
    console.info(
      `Importación terminada: ${result.upsertedCount} nuevos; ${result.modifiedCount} actualizados.`,
    );
  }
} catch (error) {
  console.error(
    `No he completado la importación: ${error instanceof SourceError ? error.code : 'IMPORT_FAILED'}.`,
  );
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
