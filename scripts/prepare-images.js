import sharp from 'sharp';
import { mkdir, writeFile, stat, readFile } from 'node:fs/promises';
import path from 'node:path';

const source = 'frontend/public/images';
const destination = 'frontend/public/art';
const manifestPath = 'frontend/src/content/images.json';
const previous = JSON.parse(await readFile(manifestPath, 'utf8'));
const assets = {};
let originalBytes = 0;
let optimizedBytes = 0;

// El manifiesto selecciona los recursos que utiliza la web.
// Las imágenes de reserva permanecen entre los originales locales.
for (const [key, image] of Object.entries(previous)) {
  const input = path.join(source, `${key}.png`);
  const output = path.join(destination, `${key}.webp`);
  await mkdir(path.dirname(output), { recursive: true });
  const info = await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);
  assets[key] = {
    src: image.publicId ? image.src : `/art/${key}.webp`,
    ...(image.publicId
      ? { publicId: image.publicId, localSrc: `/art/${key}.webp` }
      : {}),
    width: info.width,
    height: info.height,
  };
  originalBytes += (await stat(input)).size;
  optimizedBytes += info.size;
}
await writeFile(manifestPath, JSON.stringify(assets, null, 2) + '\n');
console.log(
  JSON.stringify({
    images: Object.keys(assets).length,
    originalBytes,
    optimizedBytes,
  }),
);
