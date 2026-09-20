# Mi configuración local

## Mi primera ejecución

Utilizo Node.js 22.12 o superior. Instalo las dependencias con `npm ci` y arranco la interfaz y la API con `npm run dev` desde la raíz.

Abro `http://127.0.0.1:5173`. Mi servidor utiliza por defecto el puerto `3001`; puedo consultar `/api/health` para distinguir que el servidor responde de que la base de datos está conectada.

## Mi conexión con Atlas

He verificado la conexión real a Atlas el 20 de septiembre de 2026: el ping y la consulta de lectura a `expediente_x` han respondido correctamente. Tras importar TMDB, la colección `episodes` contiene 218 episodios de 11 temporadas. Guardo la configuración utilizada en `backend/.env`.

Para reproducir la configuración sigo estos pasos:

1. Entro en mi cuenta de MongoDB Atlas y elijo el proyecto y clúster que voy a utilizar. Puedo usar un clúster existente con una base independiente, sin modificar las colecciones de mis anteriores proyectos.
2. Preparo la base `expediente_x` y un usuario de base de datos con permisos limitados a esa base. Para importar el catálogo necesitaré escritura; la consulta de la web solo requiere lectura.
3. Autorizo mi IP actual para el desarrollo local en la lista de acceso de red.
4. Obtengo la cadena de conexión para Node.js desde la opción de conexión del clúster. Indico `expediente_x` como base en la cadena.
5. Copio `backend/.env.example` como `backend/.env` si el archivo local todavía no existe y completo `MONGODB_URI` únicamente en mi equipo. Codifico los caracteres especiales de usuario y contraseña si la cadena lo requiere.
6. Reinicio `npm run dev` y compruebo que `/api/health` devuelve `database: connected`.

No incluyo la contraseña ni la cadena completa en GitHub, capturas o documentación. El archivo `.env` está ignorado. La conexión por sí sola no importa los episodios: utilizo el comando de importación descrito más abajo.

He seguido la [documentación de conexión de Atlas](https://www.mongodb.com/docs/atlas/connect-to-database-deployment/) y la [configuración de usuarios](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/).

## Mi acceso a TMDB

He obtenido el token de lectura de la API en la configuración de mi cuenta de TMDB y lo guardo en `TMDB_READ_TOKEN`, dentro de `backend/.env`. No utilizaré una variable `VITE_` para este secreto: las variables del cliente se incluyen en el código servido al navegador.

He implementado el importador y la consulta de plataformas en el backend. Para revisar el catálogo sin escribir en Atlas ejecuto `npm run catalog:preview`; para importarlo ejecuto `npm run catalog:import`. Este último comando comprueba que la base de destino sea `expediente_x`.

Recojo las temporadas ordinarias en inglés, español y alemán y valido todos los documentos antes de iniciar la escritura. Actualizo los campos de TMDB mediante su identificador único, sin sustituir las imágenes propias. Si falla la descarga, no inicio la importación. La escritura por lotes no es una transacción: si Atlas falla durante la escritura puede quedar una importación parcial, que puedo completar repitiendo el comando.

El endpoint `/api/watch-providers?country=ES` acepta `ES`, `DE`, `GB` y `US`. Mantengo una caché temporal en memoria de una hora y distingo una consulta sin ofertas de un fallo de la fuente. He conectado la pantalla de plataformas y he añadido la atribución a JustWatch y el logotipo oficial de TMDB en «Mi historia».

Sin `TMDB_READ_TOKEN`, el importador se detiene con `TMDB_NOT_CONFIGURED`. He comprobado las consultas reales y la importación de 218 episodios.

## Mis recursos de Cloudinary

Utilizo las variables de Cloudinary en mi script local de subida firmada. He preparado 35 imágenes generadas con IA y copias WebP de respaldo. Explico la preparación y los comandos en [Mis imágenes](IMAGENES.md). Mantengo las tres variables privadas en `backend/.env`. He resuelto el error inicial de permisos mediante una asignación temporal de Master Admin, retirada tras subir las 35 imágenes. Para futuras subidas necesitaré volver a autorizar los permisos adecuados; la visualización pública no requiere credenciales.

## Mis comprobaciones

- Ejecuto `npm run build` para compilar la interfaz.
- Ejecuto `npm test` para comprobar los contratos HTTP de mi API con datos de prueba aislados.
- Ejecuto `npm run format:check` para revisar el formato del código.

He publicado la interfaz en [xfiles-archive.vercel.app](https://xfiles-archive.vercel.app/). Vercel utiliza `npm ci`, `npm run build` y `frontend/dist`, con las rutas de la SPA declaradas en `vercel.json`. He publicado también el backend y he configurado las dos variables como secretos de Production. He comprobado que el catálogo y las plataformas responden con datos reales.

## Mi backend en Vercel

He preparado `api/index.js` y la reescritura de `/api/:path*`. La función utiliza Express sin abrir un puerto, reutiliza la conexión a Atlas y permite consultar plataformas aunque la base no esté disponible.

Configuro `MONGODB_URI` (con la base `expediente_x`) y `TMDB_READ_TOKEN` como variables privadas del proyecto `xfiles` en Vercel, para Production. No uso el prefijo `VITE_`. Después despliego y compruebo `/api/health`, `/api/episodes?lang=es` y `/api/watch-providers?country=ES`. La configuración local no se copia automáticamente a Vercel.

He seguido la [documentación de funciones Node.js de Vercel](https://vercel.com/docs/functions/runtimes/node-js) y sus [reescrituras de rutas](https://vercel.com/docs/routing/rewrites).

He comprobado la conexión tras autorizar permanentemente `0.0.0.0/0` en la lista de red de este proyecto de Atlas. Esta regla permite intentar conexiones desde cualquier IPv4; mantengo la autenticación obligatoria. Es una decisión explícita para admitir las direcciones dinámicas de Vercel.

Las películas utilizan `/api/movies?lang=es` y `/api/movies/:id?lang=es`, con los mismos tres idiomas que el catálogo. Las consulto directamente en TMDB mediante el servidor; no añado esos registros a la colección de episodios.
