import sharp from 'sharp';
import { readdir, mkdir, writeFile, stat, readFile } from 'node:fs/promises';
import path from 'node:path';
const source = 'frontend/public/images';
const destination = 'frontend/public/art';
const assets = {};
let previous = {};
try {
  previous = JSON.parse(
    await readFile('frontend/src/content/images.json', 'utf8'),
  );
} catch {}

let originalBytes = 0;
let optimizedBytes = 0;
for (const folder of await readdir(source)) {
  if (!(await stat(path.join(source, folder))).isDirectory()) continue;
  await mkdir(path.join(destination, folder), { recursive: true });
  for (const file of await readdir(path.join(source, folder))) {
    if (!file.endsWith('.png')) continue;
    const input = path.join(source, folder, file);
    const key = `${folder}/${file.replace('.png', '')}`;
    const output = path.join(destination, `${key}.webp`);
    const info = await sharp(input)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(output);
    assets[key] = {
      src: previous[key]?.publicId ? previous[key].src : `/art/${key}.webp`,
      ...(previous[key]?.publicId
        ? { publicId: previous[key].publicId, localSrc: `/art/${key}.webp` }
        : {}),
      width: info.width,
      height: info.height,
    };
    originalBytes += (await stat(input)).size;
    optimizedBytes += info.size;
  }
}
await writeFile(
  'frontend/src/content/images.json',
  JSON.stringify(assets, null, 2) + '\n',
);
console.log(
  JSON.stringify({
    images: Object.keys(assets).length,
    originalBytes,
    optimizedBytes,
  }),
);
