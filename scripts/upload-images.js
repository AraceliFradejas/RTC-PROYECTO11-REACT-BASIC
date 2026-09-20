import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { parseEnv } from 'node:util';

const manifestPath = 'frontend/src/content/images.json';
const assets = JSON.parse(await readFile(manifestPath, 'utf8'));
if (!process.argv.includes('--apply')) {
  console.log(
    `He preparado ${Object.keys(assets).length} imágenes. Uso --apply para subirlas a Cloudinary.`,
  );
} else {
  try {
    const env = {
      ...parseEnv(await readFile('backend/.env', 'utf8')),
      ...process.env,
    };
    const cloud = env.CLOUDINARY_CLOUD_NAME;
    const apiKey = env.CLOUDINARY_API_KEY;
    const secret = env.CLOUDINARY_API_SECRET;
    if (!cloud || !apiKey || !secret)
      throw new Error('CLOUDINARY_NOT_CONFIGURED');
    if (!/^[a-zA-Z0-9_-]+$/.test(cloud)) throw new Error('INVALID_CLOUD_NAME');
    for (const [key, asset] of Object.entries(assets)) {
      if (
        asset.publicId &&
        asset.src.startsWith(`https://res.cloudinary.com/${cloud}/`)
      )
        continue;
      const localSrc = asset.localSrc || asset.src;
      if (!localSrc.startsWith('/art/') || localSrc.includes('..'))
        throw new Error('INVALID_ASSET_PATH');
      const parameters = {
        overwrite: 'false',
        public_id: `rtc-proyecto11/${key}`,
        timestamp: String(Math.floor(Date.now() / 1000)),
      };
      const signature = createHash('sha256')
        .update(
          Object.entries(parameters)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([k, v]) => `${k}=${v}`)
            .join('&') + secret,
        )
        .digest('hex');
      const form = new FormData();
      for (const [k, v] of Object.entries(parameters)) form.set(k, v);
      form.set('api_key', apiKey);
      form.set('signature', signature);
      form.set(
        'file',
        new Blob([await readFile(`frontend/public${localSrc}`)], {
          type: 'image/webp',
        }),
        key.split('/').pop() + '.webp',
      );
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
        { method: 'POST', body: form, signal: AbortSignal.timeout(60000) },
      );
      if (!response.ok) throw new Error(`UPLOAD_HTTP_${response.status}`);
      const data = await response.json();
      if (
        data.public_id !== parameters.public_id ||
        !data.secure_url?.startsWith(
          `https://res.cloudinary.com/${cloud}/image/upload/`,
        )
      )
        throw new Error('INVALID_UPLOAD_RESPONSE');
      assets[key] = {
        ...asset,
        localSrc,
        src: data.secure_url.replace(
          '/image/upload/',
          '/image/upload/f_auto,q_auto/',
        ),
        publicId: data.public_id,
      };
      await writeFile(manifestPath, JSON.stringify(assets, null, 2) + '\n');
      console.log(`He subido ${key}`);
    }
  } catch (error) {
    console.error(
      'No he completado la subida:',
      /^(CLOUDINARY_NOT_CONFIGURED|INVALID_|UPLOAD_HTTP_)/.test(error.message)
        ? error.message
        : error.name,
    );
    process.exitCode = 1;
  }
}
