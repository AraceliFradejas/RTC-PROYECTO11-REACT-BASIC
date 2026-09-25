# Memoria técnica · Mi archivo de Expediente X

## 1. Datos de mi proyecto

| Dato | Información |
| --- | --- |
| Autora | Araceli Fradejas Muñoz |
| Formación | Máster Rock The Code · The Power Tech School |
| Módulo | 7 · Frontend con React |
| Repositorio público | [RTC-PROYECTO11-REACT-BASIC](https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC) |
| Web | [Mi archivo de Expediente X](https://xfiles-archive.vercel.app/) |
| API | [Estado del servicio](https://xfiles-archive.vercel.app/api/health) |
| Inicio | 20 de septiembre de 2026 |
| Última revisión | 25 de septiembre de 2026 |

He desarrollado y publicado la aplicación con un catálogo de 218 episodios y 11 temporadas, interfaz en tres idiomas y una API propia. Distingo las comprobaciones actuales, las evidencias anteriores y las revisiones pendientes. Conservo el recorrido de implementación en [mi historial de desarrollo](docs/HISTORIAL-DESARROLLO.md).

## 2. Mi motivación y objetivos

He elegido Expediente X porque forma parte de mis recuerdos. Mi hermano me descubrió «Anasazi» un verano; después llegaron los VHS, mis búsquedas por Internet en la UCM y mi recuerdo de ver la novena temporada en un canal alemán. Cuento esa historia en [Mi historia](docs/MI-HISTORIA.md) y en la aplicación.

He dado a cada idioma su nombre de la serie: **Expediente X**, **The X-Files** y **Akte X**. Mi recuerdo de Alemania explica la elección del tercer idioma, sin dar por conocido el canal de televisión.

Mi objetivo académico es aplicar componentes, props, estados, efectos y rutas a una experiencia de consulta real. He creado un archivo para buscar episodios, guardar favoritos, seguir mi visionado y consultar dónde ver la serie por país. He añadido las dos películas y una sección dedicada a Mulder y Scully.

## 3. Requisitos e implementación

| Requisito | Cómo lo he implementado | Evidencia o alcance |
| --- | --- | --- |
| Componentes y props | `EpisodeCard` recibe `episode`; `Artwork` recibe `asset`; reutilizo `RequestState`. | `frontend/src/components`. |
| Tres estados útiles | Búsqueda, temporada, visionado, favoritos, idioma, país y sinopsis visible. | `Archive`, `PreferencesProvider` y `Detail`. |
| `useEffect` | Consulto datos, cancelo peticiones, guardo preferencias y actualizo el idioma del documento. | `useApi` y `PreferencesProvider`. |
| Petición real a una API | React hace `fetch` a Express; consulto Atlas y TMDB en el servidor. | Catálogo, detalle, películas y plataformas comprobados en producción. |
| React Router y enlaces | Utilizo `BrowserRouter`, `Routes`, `Link` y `NavLink`. | `main.jsx` y `Layout`. |
| Parámetro de ruta utilizado | Leo `id` con `useParams` y consulto `/api/episodes/:id`. | `/expedientes/283988` corresponde a «Piloto». |
| HTML semántico y accesibilidad | Utilizo `header`, `nav`, `main`, `footer`, etiquetas y enlace para saltar al contenido. | Implementado; he comprobado salto al contenido, enlace al archivo y selector por teclado. No es una auditoría completa. |
| Diseño responsive | Adapto portada, navegación, filtros y cuadrículas con CSS. | 16 capturas actuales con muestras a 390, 768 y 1440 píxeles; alcance en la galería. |
| GitHub público y Vercel | Publico interfaz y API bajo el mismo dominio. | Visibilidad y respuestas HTTP comprobadas el 25/09/2026. |

## 4. Arquitectura y decisiones

He organizado el repositorio en espacios de trabajo npm para `frontend` y `backend`. Utilizo React, Vite y React Router en la interfaz; Express, Mongoose y MongoDB Atlas en el servidor. Las versiones quedan recogidas en `package-lock.json`.

```text
frontend/src/
  components/   Tarjetas, imágenes, estructura y mensajes de petición
  context/      Idioma, país, favoritos y progreso
  hooks/        Peticiones y cancelación
  pages/        Pantallas y rutas
  content/      Historia y manifiesto de imágenes
  i18n.js       Textos de interfaz en ES, EN y DE
  styles.css    Estilos y adaptación responsive
backend/src/
  models/       Modelo de episodio
  services/     Catálogo, cliente TMDB, plataformas y películas
  app.js        API Express
  db.js         Conexión a Atlas
  server.js     Arranque local
api/index.js    Entrada del backend en Vercel
```

Mi flujo de datos es **React → Express → Atlas o TMDB**. Importo los episodios de TMDB en Atlas. Las películas y plataformas se consultan en TMDB con una caché temporal de una hora. Las imágenes se sirven desde Cloudinary con respaldo local.

Mantengo los secretos en archivos `.env` ignorados y en variables privadas de Vercel. No utilizo variables `VITE_` para credenciales. `Solucion/` y sus variantes quedan excluidas de Git y del despliegue.

## 5. Mi funcionamiento en React

En el archivo combino búsqueda por título, temporada y estado de visionado. Normalizo mayúsculas y acentos. La selección aleatoria utiliza los resultados filtrados; no elige episodios fuera de esa selección.

Guardo favoritos y episodios vistos en `localStorage`. `PreferencesProvider` comparte esos datos y valida los valores recuperados. Si el navegador impide guardarlos, muestro un aviso. El progreso cuenta únicamente episodios presentes en el catálogo. No he incluido cuentas ni sincronización entre dispositivos.

En el detalle leo el parámetro de ruta, cargo el episodio y mantengo la sinopsis oculta inicialmente. Los botones comunican su estado con `aria-pressed` y `aria-expanded`. Identifico la ilustración como imagen de temporada, sin presentarla como un fotograma del episodio.

`useApi` distingue carga, éxito, error y recurso inexistente. Cancelo la petición con `AbortController` al cambiar de recurso o abandonar la vista. Ofrezco reintento y evito mostrar datos de una petición anterior mientras cambia la ruta consultada.

Al navegar, `Layout` devuelve el foco al contenido principal y desplaza la página al inicio. Actualizo `lang` y el título del documento según el idioma elegido.

## 6. Rutas de mi aplicación y API

| Ruta de interfaz | Función |
| --- | --- |
| `/` | Portada y entradas al archivo. |
| `/expedientes` | Catálogo, búsqueda, filtros y selección aleatoria. |
| `/expedientes/:id` | Ficha, favoritos, visionado y sinopsis. |
| `/favoritos` | Selección guardada en este navegador. |
| `/personajes` | Mulder y Scully. |
| `/peliculas` y `/peliculas/:id` | Las dos películas y sus fichas. |
| `/donde-ver` | Consulta de disponibilidad por país. |
| `/mi-historia` | Motivación, recursos y atribuciones. |
| Cualquier otra ruta | Página de recurso no encontrado. |

| Petición GET | Respuesta |
| --- | --- |
| `/api/health` | Estado del servidor y conexión a la base. |
| `/api/episodes?lang=es` | Catálogo localizado; admite `es`, `en` y `de`. |
| `/api/episodes/:id?lang=es` | Episodio por identificador de TMDB. |
| `/api/movies?lang=es` | Películas `846` y `8836`. |
| `/api/movies/:id?lang=es` | Detalle de una de esas películas. |
| `/api/watch-providers?country=ES` | Ofertas para `ES`, `DE`, `GB` o `US`. |

Valido idioma, país e identificadores. Distingo parámetros inválidos, catálogo indisponible, recurso inexistente y fallo de la fuente. Mis pruebas HTTP utilizan datos aislados; no escriben en el catálogo real.

## 7. Datos, idiomas y disponibilidad

He elegido TMDB como fuente principal por su catálogo y traducciones. En la fase inicial exploré TVmaze; conservo ese antecedente en el historial, sin presentarlo como la integración actual.

El importador comprueba la serie `4087`, excluye especiales, une traducciones por identificador y limita la escritura a `expediente_x`. Actualizo por identificador de TMDB para evitar duplicados y conservo recursos visuales propios. La escritura por lotes no es una transacción: puedo repetir la importación para completar un fallo parcial.

Mantengo independientes el idioma de la interfaz y el país de disponibilidad. Puedo leer en alemán y consultar España. Si falta una traducción del catálogo, identifico por separado el idioma disponible del título y de la sinopsis. La presencia de texto no equivale a una revisión lingüística completa.

En «Dónde verla» muestro modalidad, país, fuente y fecha de consulta. Los datos proceden de JustWatch mediante TMDB. No deduzco idiomas de audio, subtítulos ni disponibilidad de todas las temporadas a partir de ofertas generales. Tampoco confundo una consulta sin ofertas con un error del servicio.

## 8. Identidad visual y recursos

He utilizado una estética de archivo con verdes oscuros, documentos, sellos y guiños a la serie. He incorporado 35 imágenes generadas con IA, con copias WebP optimizadas y un manifiesto de dimensiones y URLs. Son interpretaciones de ficción, no fotografías ni fotogramas oficiales.

Sirvo las imágenes desde Cloudinary y utilizo copias locales si falla la carga remota. Conservo los PNG originales fuera de Git y del despliegue. Documento la preparación y subida en [Mis imágenes](docs/IMAGENES.md).

Mantengo el logotipo y el aviso de TMDB, además de la atribución a JustWatch. Reúno las fuentes en [Recursos y atribuciones](docs/RECURSOS.md). Este es un proyecto académico independiente y no oficial.

## 9. Configuración y despliegue

Utilizo Node.js 22.12 o superior. Ejecuto `npm ci` y preparo `backend/.env` siguiendo [Configuración local](docs/CONFIGURACION.md). Arranco ambas aplicaciones con `npm run dev`; abro la interfaz en `http://127.0.0.1:5173`. Vite redirige `/api` al puerto `3001` del backend.

En Vercel utilizo el proyecto `xfiles`, el dominio `xfiles-archive.vercel.app`, `npm run build` y la carpeta `frontend/dist`. Las reescrituras sirven las rutas de React y la función de `api/index.js` bajo el mismo dominio. El backend reutiliza la conexión a Atlas.

He configurado `MONGODB_URI` y `TMDB_READ_TOKEN` como secretos de producción. La configuración documentada de Atlas permite conexiones desde `0.0.0.0/0` para admitir Vercel, con autenticación obligatoria. Las credenciales de Cloudinary se utilizan en el script local de subida; no son necesarias para mostrar sus imágenes públicas.

## 10. Verificaciones del 25 de septiembre de 2026

| Comprobación | Resultado observado |
| --- | --- |
| `npm test` | 15 pruebas correctas. El aislamiento bloqueaba los puertos de Supertest; al ejecutar con permiso, pasan las 15. |
| `npm run build` | Compilación de producción correcta. |
| `npm run format:check` | Todos los archivos incluidos cumplen el formato. |
| GitHub | La consulta pública confirma `visibility: public` y rama `main`. |
| `/api/health` en Vercel | HTTP 200, `status: ok`, `database: connected`. |
| Catálogo en ES, EN y DE | HTTP 200 y 218 episodios de 11 temporadas en cada respuesta. |
| Detalle de `283988` en español | HTTP 200; devuelve «Piloto», temporada 1, episodio 1. |
| Películas en español | HTTP 200; devuelve las películas `846` y `8836`. |
| Plataformas ES, DE, GB y US | HTTP 200, país correcto, ofertas y fecha de consulta. |
| Nueve rutas de interfaz | HTTP 200 y HTML en inicio, archivo, detalle, favoritos, personajes, películas, detalle de película, disponibilidad e historia. |
| Portada en Chrome | He observado la página renderizada y su imagen principal en escritorio. |

Las comprobaciones HTTP de rutas acreditan que Vercel sirve la aplicación al abrir esas direcciones. No sustituyen la comprobación de cada interacción en el navegador. Las pruebas automatizadas cubren el backend; no dispongo de una suite automatizada de interfaz.

## 11. Mi revisión manual y las capturas actuales

He completado una revisión de la aplicación publicada en Chrome y he guardado **16 capturas reales de página completa**, tomadas el 25 de septiembre de 2026. Reúno tamaños, idiomas, recorridos y limitaciones en [la galería comentada](docs/screenshots/entrega-2026-09-25/README.md).

He utilizado emulación de **390 × 844**, **768 × 1024** y **1440 × 900** píxeles CSS. Los PNG tienen densidad 2 y altura de página completa. No son capturas de dispositivos físicos. He revisado las imágenes exportadas y no observo contenido principal cortado en las muestras; la tira de temporadas dispone de su propio desplazamiento horizontal.

### Mi búsqueda, filtros y selección aleatoria

He buscado «Anasazi» y obtengo un resultado. También lo encuentro en minúsculas; al limpiar la búsqueda recupero los 218 episodios. El filtro de temporada 2 devuelve 25 episodios. Combinando «Anasazi» con temporada 2, el botón aleatorio abre su ficha, `/expedientes/285317`.

![Mi búsqueda móvil de Anasazi](docs/screenshots/entrega-2026-09-25/02-busqueda-anasazi-movil-es.png)

### Mis favoritos, progreso y sinopsis

He marcado Anasazi como favorito y visto. Tras recargar la ficha, ambos estados siguen activos. He revelado la sinopsis y vuelto a ocultarla. En favoritos aparece el episodio y el progreso 1 / 218; el filtro Visto lo conserva y Pendientes devuelve cero resultados.

![Mi favorito y progreso conservados en móvil](docs/screenshots/entrega-2026-09-25/04-favoritos-progreso-movil-es.png)

Al terminar he retirado el favorito y el marcado como visto, he recargado y he comprobado que la selección permanece vacía y el progreso vuelve a 0 / 218. He restablecido idioma español y país España.

### Mi independencia entre idioma y país

He cambiado de español a alemán manteniendo España y he recargado: se conservan ambas preferencias. Después he seleccionado Alemania y he cambiado a inglés; Alemania permanece seleccionada. He observado las ofertas, modalidades, fuente y fecha. No he probado la reproducción en las plataformas ni confirmado idiomas de audio.

![Mi interfaz en alemán con España seleccionada](docs/screenshots/entrega-2026-09-25/08-aleman-pais-espana-tableta.png)

### Mi escritorio y navegación

He capturado portada, catálogo, personajes, películas, ficha de película, historia y ruta inexistente. La primera película se abre desde su enlace y utiliza `/peliculas/846`. Una ruta inexistente muestra mi página 404 de interfaz; esto no acredita un estado HTTP 404 de la SPA.

![Mi portada de escritorio](docs/screenshots/entrega-2026-09-25/10-portada-escritorio-es.png)

He probado un recorrido de teclado: Tab hasta «Saltar al contenido», foco visible, Enter para saltar, Tab hasta «Abrir el archivo» y Enter para navegar. También he elegido temporada 2 con flechas y Enter. No lo presento como una auditoría completa de accesibilidad.

### Alcance y evidencias históricas

La revisión cubre muestras representativas, no todas las combinaciones de rutas, tamaños e idiomas. No he simulado errores de red o almacenamiento en esta sesión manual. Las pruebas automatizadas del backend y las consultas HTTP quedan diferenciadas de estas observaciones.

Conservo las capturas anteriores de [Piloto en móvil](docs/screenshots/detalle-piloto.png) y [la primera interfaz alemana sin catálogo](docs/screenshots/inicio/archivo-movil-de.png) como antecedentes en el [historial](docs/HISTORIAL-DESARROLLO.md); no representan el estado visual actual.

He corregido después de las capturas la concordancia del contador: utilizo «1 expediente», «1 case file» y «1 Fallakte» para un resultado, y mantengo el plural para cero o varios. El cambio se aplica tanto al archivo como a favoritos. Conservo las capturas originales como evidencia del estado observado antes de esa corrección.

## 12. Mi cierre frente al enunciado

He contrastado los requisitos exactos con el código y las evidencias en [Mi comprobación del enunciado](docs/COMPROBACION-ENUNCIADO.md). He encontrado implementación para todos: responsive, HTML y CSS, tres estados útiles, efectos, petición a una API y React Router con enlaces y un parámetro utilizado en el detalle.

He publicado la corrección del contador, la documentación y las 16 capturas en el commit `0d41192`. He comprobado que Vercel sirve la nueva compilación, la ruta de detalle responde y Atlas continúa conectado.

El enunciado pide únicamente el enlace al repositorio público. La web, la memoria y las capturas complementan mi entrega; las capturas de paneles privados no son un requisito. Mi siguiente paso es enviar el enlace de GitHub en el campus. No doy esa entrega por realizada.

Mantengo el seguimiento en [Revisión de entrega](docs/REVISION-ENTREGA.md).
