# Mi configuración local

## Mi primera ejecución

Utilizo Node.js 22.12 o superior. Instalo las dependencias con `npm ci` y arranco la interfaz y la API con `npm run dev` desde la raíz.

Abro `http://127.0.0.1:5173`. Mi servidor utiliza por defecto el puerto `3001`; puedo consultar `/api/health` para distinguir que el servidor responde de que la base de datos está conectada.

## Mi conexión con Atlas

He verificado la conexión real a Atlas el 20 de septiembre de 2026: el ping y la consulta de lectura a `expediente_x` han respondido correctamente. La colección `episodes` devuelve cero documentos; todavía no he importado el catálogo. Guardo la configuración utilizada en `backend/.env`.

Para reproducir la configuración sigo estos pasos:

1. Entro en mi cuenta de MongoDB Atlas y elijo el proyecto y clúster que voy a utilizar. Puedo usar un clúster existente con una base independiente, sin modificar las colecciones de mis anteriores proyectos.
2. Preparo la base `expediente_x` y un usuario de base de datos con permisos limitados a esa base. Para importar el catálogo necesitaré escritura; la consulta de la web solo requiere lectura.
3. Autorizo mi IP actual para el desarrollo local en la lista de acceso de red.
4. Obtengo la cadena de conexión para Node.js desde la opción de conexión del clúster. Indico `expediente_x` como base en la cadena.
5. Copio `backend/.env.example` como `backend/.env` si el archivo local todavía no existe y completo `MONGODB_URI` únicamente en mi equipo. Codifico los caracteres especiales de usuario y contraseña si la cadena lo requiere.
6. Reinicio `npm run dev` y compruebo que `/api/health` devuelve `database: connected`.

No incluyo la contraseña ni la cadena completa en GitHub, capturas o documentación. El archivo `.env` está ignorado. La conexión por sí sola no importa los episodios: prepararé y comprobaré la carga desde TMDB después.

He seguido la [documentación de conexión de Atlas](https://www.mongodb.com/docs/atlas/connect-to-database-deployment/) y la [configuración de usuarios](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/).

## Mi acceso a TMDB

Obtendré el token de lectura de la API en la configuración de mi cuenta de TMDB y lo guardaré en `TMDB_READ_TOKEN`, dentro de `backend/.env`. No utilizaré una variable `VITE_` para este secreto: las variables del cliente se incluyen en el código servido al navegador.

He implementado el importador y la consulta de plataformas en el backend. Para revisar el catálogo sin escribir en Atlas ejecuto `npm run catalog:preview`; para importarlo ejecuto `npm run catalog:import`. Este último comando comprueba que la base de destino sea `expediente_x`.

Recojo las temporadas ordinarias en inglés, español y alemán y valido todos los documentos antes de iniciar la escritura. Actualizo los campos de TMDB mediante su identificador único, sin sustituir las imágenes propias. Si falla la descarga, no inicio la importación. La escritura por lotes no es una transacción: si Atlas falla durante la escritura puede quedar una importación parcial, que puedo completar repitiendo el comando.

El endpoint `/api/watch-providers?country=ES` acepta `ES`, `DE`, `GB` y `US`. Mantengo una caché temporal en memoria de una hora y distingo una consulta sin ofertas de un fallo de la fuente. Todavía tengo pendiente conectar la pantalla de plataformas y completar las atribuciones visuales antes de mostrar estos datos.

Sin `TMDB_READ_TOKEN`, el importador se detiene con `TMDB_NOT_CONFIGURED`. No he consultado ni importado todavía datos reales de TMDB.

## Mis recursos de Cloudinary

He reservado las variables de Cloudinary en la plantilla, pero todavía no las utiliza el código. Las completaré cuando prepare la integración con recursos cuya reutilización haya comprobado.

## Mis comprobaciones

- Ejecuto `npm run build` para compilar la interfaz.
- Ejecuto `npm test` para comprobar los contratos HTTP de mi API con datos de prueba aislados.
- Ejecuto `npm run format:check` para revisar el formato del código.

He previsto Vercel como siguiente entorno, pero todavía no he configurado el despliegue. Mi arranque actual es local; no lo presento como una publicación terminada.
