# Mis imágenes del archivo

He incorporado 35 imágenes generadas con IA e inspiradas en Expediente X: cuatro recursos principales, once ilustraciones de temporada, dos retratos adicionales y dieciocho escenas de ambiente. Conservo los PNG que he aportado en `frontend/public/images/`, sin modificarlos. Son interpretaciones de ficción, no fotogramas ni fotografías de mis recuerdos personales.

## Mi selección en la interfaz

- Utilizo `hero-mulder-scully` en la portada, colocando el texto sobre el espacio oscuro de la derecha en escritorio y debajo de la imagen en móvil.
- Presento los retratos de Mulder y Scully en `/personajes`.
- Recorro las once ilustraciones de temporada mediante botones que aplican el filtro del catálogo. Repito la ilustración de temporada en el detalle, identificándola como tal; no la presento como una escena del episodio.
- Acompaño «Mi historia» con la ilustración de los agentes en el tren. No la presento como una fotografía personal.
- Conservo las escenas adicionales optimizadas para futuras incorporaciones.

## Mi preparación técnica

Ejecuto `npm run images:prepare` para generar copias WebP de hasta 1600 píxeles de ancho, sin ampliar originales pequeños. He reducido los 67.615.527 bytes originales a 2.745.710 bytes: aproximadamente un 96 % menos. Registro las dimensiones en `frontend/src/content/images.json` y reservo el espacio de las imágenes para evitar saltos de diseño. Cargo de forma diferida las imágenes secundarias.

Excluyo los PNG originales de Git y del despliegue; publico las copias de `frontend/public/art/`. Los originales continúan en mi equipo. Las instrucciones de generación que acompañaban a los archivos permanecen con ellos.

## Mi subida a Cloudinary

He preparado `npm run images:upload` como revisión sin subida. Con las variables `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET` en `backend/.env`, ejecuto `npm run images:upload -- --apply` para subir únicamente las copias optimizadas bajo `rtc-proyecto11/`.

Firmo cada petición en el script local y nunca envío la clave secreta al frontend. Guardo en el manifiesto las URL públicas y los identificadores de los recursos, con una copia local de respaldo si falla la entrega remota. El script guarda el avance después de cada imagen y evita sobrescribir recursos existentes. No necesito añadir estas credenciales a Vercel para mostrar las imágenes.

La subida real todavía está pendiente de completar la configuración de Cloudinary.

## Mis atribuciones

Identifico las imágenes como «Imagen generada con IA · Inspiración no oficial». No atribuyo estas composiciones a los titulares de la serie ni les asigno una licencia de terceros que no he comprobado. Conservo la procedencia de los recursos separada de los datos y créditos de TMDB.
