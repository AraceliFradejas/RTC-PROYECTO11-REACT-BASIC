# Expediente X · Mi archivo de casos

Proyecto de React del máster **Rock The Code** de **The Power Tech School**.

[Versión en castellano](#versión-en-castellano) · [English version](#english-version)

## Versión en castellano

> Mi forma de reunir mis recuerdos de Expediente X y volver a sentir las ganas de abrir otro expediente. Porque la verdad está ahí fuera.

He creado un archivo de episodios con búsqueda, filtros, favoritos y progreso de visionado. La aplicación reúne **Expediente X**, **The X-Files** y **Akte X** en una interfaz en español, inglés y alemán, con una API propia y datos reales.

**Web pública:** [Mi archivo de Expediente X](https://xfiles-archive.vercel.app/).

**API:** [Comprobación de disponibilidad](https://xfiles-archive.vercel.app/api/health).

**Repositorio de entrega:** [RTC-PROYECTO11-REACT-BASIC](https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC).

![Mi portada en escritorio](docs/screenshots/entrega-2026-09-25/10-portada-escritorio-es.png)

## Contenido

- [Una historia personal](#una-historia-personal)
- [Estado actual](#estado-actual)
- [Funcionalidades](#funcionalidades)
- [Recorrido visual](#recorrido-visual)
- [Accesibilidad y diseño responsive](#accesibilidad-y-diseño-responsive)
- [Estructura](#estructura)
- [Tecnologías](#tecnologías)
- [Instalación local](#instalación-local)
- [Variables de entorno](#variables-de-entorno)
- [Scripts](#scripts)
- [Catálogo e imágenes](#catálogo-e-imágenes)
- [Idiomas](#idiomas)
- [API y rutas](#api-y-rutas)
- [Pruebas y evidencias](#pruebas-y-evidencias)
- [Despliegue](#despliegue)
- [Documentación](#documentación)
- [Mis otros proyectos](#mis-otros-proyectos)
- [Aviso académico y autoría](#aviso-académico-y-autoría)

## Una historia personal

Siempre me ha encantado Expediente X. Después de dedicar varios proyectos de backend al universo swiftie, quiero explorar otra de mis aficiones y darle una identidad visual propia.

Mi hermano me descubrió «Anasazi» un verano. Después llegaron los VHS, mis primeras búsquedas por Internet en la UCM y muchos recuerdos que hoy reúno en [mi historia](docs/MI-HISTORIA.md).

Recuerdo haber visto la novena temporada en un canal alemán, donde la serie se titulaba **Akte X**. Ese recuerdo me ha llevado a plantear la aplicación en español, inglés y alemán.

He diseñado la web como un archivo de investigación: carpetas, sellos, anotaciones y pequeños guiños a la serie. He querido cuidar tanto la experiencia de consulta como el aprendizaje de React.

## Estado actual

He publicado un catálogo de **218 episodios y 11 temporadas**, importado de TMDB en MongoDB Atlas. He conectado favoritos y progreso persistentes, disponibilidad por país, las dos películas y una sección dedicada a Mulder y Scully. He preparado y subido 35 recursos visuales a Cloudinary, con copias WebP locales de respaldo.

En la revisión del **25 de septiembre de 2026** he comprobado el repositorio público, la conexión a Atlas en producción, el catálogo en los tres idiomas y las consultas de plataformas para España, Alemania, Reino Unido y Estados Unidos. Las quince pruebas del backend, la compilación y el formato han pasado. He revisado manualmente los recorridos principales y conservo dieciséis capturas actuales.

Desarrollo la arquitectura, las decisiones, las pruebas, la evolución y el aprendizaje en mi [memoria técnica](MEMORIA.md). El enlace para la entrega está preparado; el envío en el campus figura como pendiente en [Revisión de entrega](docs/REVISION-ENTREGA.md).

## Funcionalidades

- Exploro y busco episodios por título, sin depender de mayúsculas o acentos.
- Combino temporada y estado de visionado.
- Abro una ficha con su identificador en la ruta.
- Guardo favoritos y episodios vistos y los conservo al recargar.
- Consulto mi progreso sobre los episodios del catálogo.
- Revelo u oculto las sinopsis para controlar los spoilers.
- Abro un caso aleatorio entre los resultados filtrados.
- Consulto dónde ver la serie según el país, con fuente y fecha.
- Exploro las dos películas y sus fichas en tres idiomas.
- Recorro personajes, historia personal y atribuciones.

Guardo las preferencias en este navegador; no dispongo de cuentas ni sincronización entre dispositivos. La disponibilidad de plataformas describe una consulta concreta y no confirma audio, subtítulos o acceso a todas las temporadas.

## Recorrido visual

He seleccionado ocho capturas para cada versión de este README, incluida la portada superior; reutilizo los mismos archivos originales en castellano e inglés. En la [sección de evidencias de mi memoria](MEMORIA.md#12-evidencias) incluyo las dieciséis actuales con la acción realizada, el resultado y su alcance; también conservo dos imágenes históricas para explicar la evolución.

### Buscar un expediente desde el móvil

Al buscar Anasazi obtengo un único resultado. He probado también el título en minúsculas y la recuperación del catálogo al limpiar el campo. La captura corresponde a un área de 390 × 844 píxeles CSS.

![Búsqueda móvil de Anasazi](docs/screenshots/entrega-2026-09-25/02-busqueda-anasazi-movil-es.png)

### Abrir la ficha y conservar mis preferencias

He marcado el episodio como favorito y visto, he recargado y ambos estados se han conservado. Después he revelado la sinopsis. La ficha utiliza el identificador `285317` de la ruta para consultar el episodio.

![Detalle móvil de Anasazi con preferencias conservadas y sinopsis visible](docs/screenshots/entrega-2026-09-25/03-anasazi-persistencia-sinopsis-movil-es.png)

### Consultar favoritos y progreso

La selección guardada muestra Anasazi y el progreso 1 / 218. Reutilizo el archivo para representar favoritos y aplicar sus filtros. Al finalizar las pruebas he retirado los datos de prueba y comprobado el regreso a 0 / 218.

![Favoritos y progreso en móvil](docs/screenshots/entrega-2026-09-25/04-favoritos-progreso-movil-es.png)

### Entender un resultado vacío

En Favoritos, el filtro Pendientes excluye el único episodio porque ya estaba visto. Muestro un mensaje específico y no ofrezco abrir un caso aleatorio cuando la selección está vacía. He capturado este estado en tableta, a 768 × 1024 píxeles CSS.

![Filtro sin resultados en tableta](docs/screenshots/entrega-2026-09-25/06-filtro-sin-resultados-tableta-es.png)

### Leer en alemán y consultar España

He cambiado a Akte X sin modificar el país. Después de recargar, la interfaz permanece en alemán y la consulta sigue correspondiendo a España. Muestro fuente y fecha junto a las ofertas.

![Interfaz alemana con disponibilidad de España](docs/screenshots/entrega-2026-09-25/08-aleman-pais-espana-tableta.png)

### Explorar una temporada en escritorio

Al seleccionar la temporada 2 obtengo 25 episodios. La página completa muestra los filtros, las ilustraciones y las tarjetas a 1440 × 900 píxeles CSS de área de visualización.

![Archivo de la temporada 2 en escritorio](docs/screenshots/entrega-2026-09-25/11-archivo-temporada2-escritorio-es.png)

### Ampliar el archivo con las películas

He incorporado las películas de 1998 y 2008 con datos de TMDB. Sus enlaces abren fichas propias y las mantengo separadas del progreso de episodios.

![Listado de las dos películas](docs/screenshots/entrega-2026-09-25/13-peliculas-escritorio-es.png)

He conservado estas capturas reales del 25/09/2026 sin retocar. Son anteriores a la corrección del contador singular: el código publicado ya muestra «1 expediente», «1 case file» y «1 Fallakte». Los PNG representan páginas completas con densidad 2; su altura no corresponde a la altura del dispositivo emulado.

## Accesibilidad y diseño responsive

He utilizado estructura HTML semántica, etiquetas, foco visible, un enlace para saltar al contenido y estados accesibles en los botones. Adapto portada, navegación, filtros y cuadrículas con CSS y respeto la preferencia de movimiento reducido.

He revisado muestras en Chrome a 390, 768 y 1440 píxeles CSS. También he comprobado el salto al contenido, el enlace al archivo y la selección de temporada por teclado. No presento estas muestras como una auditoría completa ni como pruebas en dispositivos físicos. La tira de temporadas tiene desplazamiento horizontal dentro de su propio contenedor.

## Estructura

```text
frontend/src/
  components/   # Tarjetas, imágenes, estructura y estados de consulta
  pages/        # Portada, archivo, detalles y páginas editoriales
  context/      # Idioma, país, favoritos y episodios vistos
  hooks/        # Peticiones, cancelación y reintentos
  content/      # Historia y manifiesto de imágenes
  i18n.js       # Textos de la interfaz en ES, EN y DE
  styles.css    # Estilos y adaptación responsive
backend/src/
  models/       # Episodios y traducciones
  services/     # Catálogo, TMDB, películas y plataformas
  app.js        # API Express
  db.js         # Conexión a MongoDB Atlas
  server.js     # Arranque local
backend/test/   # Pruebas aisladas del servidor
api/index.js    # Entrada de la API en Vercel
scripts/        # Preparación y subida de imágenes
docs/           # Guías, recursos y capturas
```

## Tecnologías

| Área | Qué utilizo | Para qué |
| --- | --- | --- |
| Interfaz | React, React Router y Vite | Componentes, estados, efectos, navegación y compilación. |
| Diseño | HTML semántico y CSS | Identidad del archivo y adaptación responsive. |
| Servidor | Node.js y Express | API propia y consultas externas desde el servidor. |
| Datos | MongoDB Atlas y Mongoose | Catálogo persistente y modelo de episodio. |
| Imágenes | Cloudinary y WebP | Recursos optimizados con respaldo local. |
| Fuentes | TMDB y datos de JustWatch | Episodios, traducciones, películas y plataformas. |
| Verificación | node:test, Supertest y Prettier | Contratos del backend y formato. |
| Publicación | GitHub y Vercel | Repositorio público y web con API bajo el mismo dominio. |

## Instalación local

Utilizo **Node.js 22.12 o superior**. Para reproducir el proyecto desde una copia nueva:

```bash
git clone https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC.git
cd RTC-PROYECTO11-REACT-BASIC
npm ci
cp -n backend/.env.example backend/.env
npm run dev
```

Completo las variables del servidor antes de consultar los servicios reales. Abro la interfaz en `http://127.0.0.1:5173` y la API en `http://127.0.0.1:3001/api/health`. Vite redirige `/api` al backend durante el desarrollo; si cambio el puerto, actualizo también el proxy en `frontend/vite.config.js`.

Puedo arrancar sin credenciales, pero el catálogo necesita Atlas y las consultas externas necesitan TMDB. La guía de [Configuración local](docs/CONFIGURACION.md) explica el alta de servicios, la base y la importación.

## Variables de entorno

| Variable | Dónde la utilizo | Finalidad |
| --- | --- | --- |
| `PORT` | Backend local | Puerto del servidor; por defecto, 3001. |
| `MONGODB_URI` | Backend local y Vercel | Conexión con la base `expediente_x`. |
| `TMDB_READ_TOKEN` | Backend e importador | Token de lectura de TMDB. |
| `CLOUDINARY_CLOUD_NAME` | Script local de subida | Entorno de recursos visuales. |
| `CLOUDINARY_API_KEY` | Script local de subida | Identificador de la API de Cloudinary. |
| `CLOUDINARY_API_SECRET` | Script local de subida | Firma de las subidas autorizadas. |

Guardo los valores privados en `backend/.env` y en la configuración del servidor desplegado. No los incluyo en Git ni en variables `VITE_`. Mostrar las imágenes públicas de Cloudinary no requiere exponer las credenciales de subida.

## Scripts

| Comando desde la raíz | Uso |
| --- | --- |
| `npm run dev` | Arranco frontend y backend en paralelo. |
| `npm run build` | Genero `frontend/dist`. |
| `npm test` | Ejecuto las pruebas del backend. |
| `npm run format:check` | Reviso el formato del código configurado. |
| `npm run catalog:preview` | Consulto y valido el catálogo sin escribir en Atlas. |
| `npm run catalog:import` | Importo o actualizo el catálogo en `expediente_x`. |
| `npm run images:prepare` | Preparo WebP a partir de mis originales locales. |
| `npm run images:upload` | Reviso las imágenes previstas sin subirlas. |
| `npm run images:upload -- --apply` | Subo los recursos con credenciales y permisos configurados. |

## Catálogo e imágenes

He importado 218 episodios de TMDB, excluyendo especiales y uniendo las traducciones por identificador. La importación valida los documentos y solo admite la base `expediente_x`; actualiza datos sin sustituir los recursos visuales propios. La escritura por lotes no es una transacción y puede completarse repitiendo el proceso si falla parcialmente.

He preparado 35 imágenes generadas con IA. Las copias WebP ocupan aproximadamente 2,75 MB frente a los 67,6 MB de PNG originales. Los originales permanecen fuera de Git; las copias optimizadas y el manifiesto permiten servir la web y recurrir al respaldo local. Para regenerarlas necesito mis originales locales, que no se descargan al clonar el repositorio. Explico el proceso en [Mis imágenes](docs/IMAGENES.md).

## Idiomas

He preparado los textos de navegación, controles, estados y errores en **español, inglés y alemán**. Consulto el catálogo con el idioma seleccionado e identifico el idioma disponible cuando falta una traducción. He comprobado la presencia de títulos y sinopsis en las respuestas, sin equipararla a una revisión lingüística exhaustiva.

Mantengo independientes el idioma y el país: puedo leer Akte X y consultar España, o The X-Files y consultar Alemania. Ambas preferencias se conservan en el navegador. Los datos de disponibilidad no acreditan idiomas de audio o subtítulos.

## API y rutas

| Petición GET | Qué consulto |
| --- | --- |
| `/api/health` | Estado del servidor y conexión con Atlas. |
| `/api/episodes?lang=es` | Catálogo en `es`, `en` o `de`. |
| `/api/episodes/:id?lang=es` | Episodio por identificador de TMDB. |
| `/api/movies?lang=es` | Las películas `846` y `8836`. |
| `/api/movies/:id?lang=es` | Detalle de una de las dos películas. |
| `/api/watch-providers?country=ES` | Disponibilidad en `ES`, `DE`, `GB` o `US`. |

He declarado las páginas `/`, `/expedientes`, `/expedientes/:id`, `/favoritos`, `/personajes`, `/peliculas`, `/peliculas/:id`, `/donde-ver` y `/mi-historia`. Utilizo `Link` y `NavLink` para navegar y `useParams` para consultar el recurso correspondiente a cada detalle. La ruta comodín muestra la página de recurso no encontrado.

## Pruebas y evidencias

He comprobado quince pruebas del backend y la compilación de producción. En la web he recorrido búsqueda, filtros, selección aleatoria, marcado y retirada de favoritos y vistos, persistencia, sinopsis, idiomas, países y navegación a películas. He verificado también las respuestas de la API publicada y la apertura directa de rutas.

La [memoria](MEMORIA.md#9-pruebas) distingue pruebas automáticas, integraciones y revisión manual. La [galería](docs/screenshots/entrega-2026-09-25/README.md) conserva las dieciséis capturas actuales con sus dimensiones. No tengo una suite automatizada de interfaz; los fallos de red y almacenamiento no se han simulado en la revisión manual documentada.

## Despliegue

He conectado la rama `main` con el proyecto `xfiles` de Vercel y el dominio [xfiles-archive.vercel.app](https://xfiles-archive.vercel.app/). Compilo con `npm run build` y publico `frontend/dist`. Las reescrituras de `vercel.json` sirven las rutas React y la función `api/index.js` bajo el mismo dominio.

He configurado `MONGODB_URI` y `TMDB_READ_TOKEN` como variables privadas de Production. El servidor reutiliza la conexión a Atlas. La configuración documentada de Atlas permite conexiones desde `0.0.0.0/0` para admitir Vercel, manteniendo autenticación obligatoria. He comprobado la salud del servicio, el catálogo, las plataformas y las rutas publicadas; los detalles están en [Configuración](docs/CONFIGURACION.md#mi-backend-en-vercel).

## Documentación

| Documento | Qué explico |
| --- | --- |
| [Memoria técnica](MEMORIA.md) | Motivación, arquitectura, funcionamiento, pruebas, dieciocho evidencias visuales y aprendizaje. |
| [Comprobación del enunciado](docs/COMPROBACION-ENUNCIADO.md) | Correspondencia de cada requisito con su implementación. |
| [Revisión de entrega](docs/REVISION-ENTREGA.md) | Publicación comprobada y envío pendiente al campus. |
| [Configuración](docs/CONFIGURACION.md) | Desarrollo local, servicios e integración en Vercel. |
| [Galería de producción](docs/screenshots/entrega-2026-09-25/README.md) | Dieciséis capturas, dimensiones y recorridos. |
| [Mis imágenes](docs/IMAGENES.md) | Optimización, Cloudinary y respaldo local. |
| [Recursos y atribuciones](docs/RECURSOS.md) | Procedencia y créditos. |
| [Mi historia](docs/MI-HISTORIA.md) | Mi relación personal con Expediente X. |
| [Historial de desarrollo](docs/HISTORIAL-DESARROLLO.md) | Evolución y comprobaciones anteriores. |
| [Concepto inicial](docs/CONCEPTO.md) | Exploración y alcance al comenzar. |

## Mis otros proyectos

Este trabajo continúa mi aprendizaje después de [KelseTS Talks · Proyecto 10](https://github.com/AraceliFradejas/RTC-PROYECTO10-FULL-STACK-JAVASCRIPT). Conservo la misma forma de presentar el proyecto: motivación personal, funcionamiento, configuración y una memoria técnica con pruebas y capturas comentadas.

## Aviso académico y autoría

Soy **Araceli Fradejas Muñoz**, autora de este proyecto académico del máster Rock The Code · The Power Tech School. He desarrollado una aplicación independiente y no oficial, sin vinculación con los titulares de Expediente X.

Identifico las ilustraciones como recursos generados con IA; no son fotografías ni fotogramas oficiales. Reconozco TMDB como fuente de datos y JustWatch como fuente de disponibilidad a través de TMDB. Documento su procedencia en [Recursos y atribuciones](docs/RECURSOS.md). Mantengo el material docente `Solucion/` y sus variantes fuera de Git, GitHub y el despliegue.

---

## English version

### The X-Files · My case archive

A React project for the **Rock The Code** master's programme at **The Power Tech School**.

> My way of bringing together my memories of The X-Files and rediscovering the excitement of opening another case file. Because the truth is out there.

I have built an episode archive with search, filters, favourites and viewing progress. The application brings together **Expediente X**, **The X-Files** and **Akte X** in a Spanish, English and German interface, using my own API and real data.

**Live website:** [My X-Files archive](https://xfiles-archive.vercel.app/).

**API:** [Health check](https://xfiles-archive.vercel.app/api/health).

**Submission repository:** [RTC-PROYECTO11-REACT-BASIC](https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC).

![My desktop homepage, with the interface in Spanish](docs/screenshots/entrega-2026-09-25/10-portada-escritorio-es.png)

### Contents

- [A personal story](#a-personal-story)
- [Current status](#current-status)
- [Features](#features)
- [Visual walkthrough](#visual-walkthrough)
- [Accessibility and responsive design](#accessibility-and-responsive-design)
- [Project structure](#project-structure)
- [Technologies](#technologies)
- [Local setup](#local-setup)
- [Environment variables](#environment-variables)
- [Available commands](#available-commands)
- [Catalogue and images](#catalogue-and-images)
- [Languages](#languages)
- [API endpoints and routes](#api-endpoints-and-routes)
- [Validation and evidence](#validation-and-evidence)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [My other projects](#my-other-projects)
- [Academic notice and author](#academic-notice-and-author)

### A personal story

I have always loved The X-Files. After dedicating several backend projects to the Swiftie universe, I wanted to explore another of my interests and give it a visual identity of its own.

My brother introduced me to Anasazi one summer. VHS tapes, my first Internet searches at the Complutense University of Madrid and many other memories followed. I have brought them together in [my story](docs/MI-HISTORIA.md), written in Spanish.

I remember watching season nine on a German channel, where the series was called **Akte X**. That memory inspired me to build the application in Spanish, English and German.

I designed the website as an investigation archive, with folders, stamps, notes and small references to the series. I wanted to give equal care to the browsing experience and my learning of React.

### Current status

I have published a catalogue of **218 episodes across 11 seasons**, imported from TMDB into MongoDB Atlas. I have connected persistent favourites and viewing progress, availability by country, both films and a section dedicated to Mulder and Scully. I have prepared and uploaded 35 visual assets to Cloudinary, with local WebP fallback copies.

During the review on **25 September 2026**, I checked the public repository, the production Atlas connection, the catalogue in all three languages and provider queries for Spain, Germany, the United Kingdom and the United States. All fifteen backend tests, the production build and the formatting check passed. I manually reviewed the main user journeys and retained sixteen current screenshots.

I explain the architecture, decisions, tests, development process and lessons learned in my [technical report](MEMORIA.md), in Spanish. The submission link is ready; submission through the course platform is still pending in my [delivery review](docs/REVISION-ENTREGA.md).

### Features

- I can browse and search episodes by title, regardless of case or accents.
- I can combine season and viewing-status filters.
- I can open an episode using its identifier in the route.
- I can save favourites and watched episodes and retain them after reloading.
- I can track progress across the episode catalogue.
- I can reveal or hide summaries to control spoilers.
- I can open a random case from the filtered results.
- I can check where to watch the series by country, with a source and query date.
- I can explore both films and their details in three languages.
- I can visit the characters, personal story and credits pages.

I store preferences in the current browser; I have not added accounts or cross-device synchronisation. Provider availability describes a particular query and does not confirm audio languages, subtitles or access to every season.

### Visual walkthrough

I have selected eight screenshots for each language version of this README, including the homepage above. Both versions use the same original files. My [report's evidence section](MEMORIA.md#12-evidencias) includes all sixteen current screenshots, with the action performed, result and scope, plus two historical images elsewhere in the report to explain development.

The screenshots preserve the interface languages used during the review: Spanish and German in this selection. The English captions do not imply that the screenshots themselves show the English interface.

#### Searching for a case on mobile

Searching for Anasazi returns one result. I also checked the lowercase title and restored the full catalogue by clearing the field. The viewport was 390 × 844 CSS pixels.

![Mobile search for Anasazi, in Spanish](docs/screenshots/entrega-2026-09-25/02-busqueda-anasazi-movil-es.png)

#### Opening the detail and retaining preferences

I marked the episode as a favourite and watched, reloaded the page and confirmed that both settings remained active. I then revealed the summary. The detail page uses the route identifier `285317` to request the episode.

![Anasazi detail with saved preferences and visible summary, in Spanish](docs/screenshots/entrega-2026-09-25/03-anasazi-persistencia-sinopsis-movil-es.png)

#### Checking favourites and progress

The saved selection shows Anasazi and progress of 1 / 218. I reuse the archive page to display favourites and apply filters. After testing, I removed the test selections and confirmed a return to 0 / 218.

![Mobile favourites and viewing progress, in Spanish](docs/screenshots/entrega-2026-09-25/04-favoritos-progreso-movil-es.png)

#### Understanding an empty result

Within Favourites, the unwatched filter excludes the only episode because it has already been watched. I display a specific message and do not offer random selection from an empty set. I captured this state with a tablet viewport of 768 × 1024 CSS pixels.

![Tablet filter with no results, in Spanish](docs/screenshots/entrega-2026-09-25/06-filtro-sin-resultados-tableta-es.png)

#### Reading in German while checking Spain

I switched to Akte X without changing the country. After reloading, the interface remained in German and the query still referred to Spain. I display the source and query date alongside the offers.

![German interface with availability for Spain](docs/screenshots/entrega-2026-09-25/08-aleman-pais-espana-tableta.png)

#### Exploring a season on desktop

Selecting season two returns 25 episodes. The full-page capture shows the filters, illustrations and cards with a viewport of 1440 × 900 CSS pixels.

![Season two archive on desktop, in Spanish](docs/screenshots/entrega-2026-09-25/11-archivo-temporada2-escritorio-es.png)

#### Expanding the archive with films

I added the 1998 and 2008 films using TMDB data. Their links open separate detail pages, and I keep them outside episode viewing progress.

![Both films listed in the Spanish interface](docs/screenshots/entrega-2026-09-25/13-peliculas-escritorio-es.png)

I have preserved these real screenshots from 25 September 2026 without retouching them. They predate the singular-counter correction: the published code now displays “1 expediente”, “1 case file” and “1 Fallakte”. The PNGs capture complete pages at a pixel density of 2; their height is not the height of the emulated device.

### Accessibility and responsive design

I have used semantic HTML, labelled controls, visible focus, a skip-to-content link and accessible button states. I adapt the homepage, navigation, filters and grids with CSS and respect the reduced-motion preference.

I reviewed samples in Chrome at widths of 390, 768 and 1440 CSS pixels. I also checked the skip link, archive link and season selector with the keyboard. These samples are not a complete accessibility audit or tests on physical devices. The season strip scrolls horizontally within its own container.

### Project structure

```text
frontend/src/
  components/   # Cards, artwork, layout and request states
  pages/        # Homepage, archive, details and editorial pages
  context/      # Language, country, favourites and watched episodes
  hooks/        # Requests, cancellation and retries
  content/      # Personal story and image manifest
  i18n.js       # Interface text in ES, EN and DE
  styles.css    # Styles and responsive layout
backend/src/
  models/       # Episodes and translations
  services/     # Catalogue, TMDB, films and providers
  app.js        # Express API
  db.js         # MongoDB Atlas connection
  server.js     # Local startup
backend/test/   # Isolated server tests
api/index.js    # Vercel API entry point
scripts/        # Image preparation and upload
docs/           # Guides, resources and screenshots
```

### Technologies

| Area | What I use | Purpose |
| --- | --- | --- |
| Interface | React, React Router and Vite | Components, state, effects, navigation and builds. |
| Design | Semantic HTML and CSS | Archive identity and responsive layout. |
| Server | Node.js and Express | My own API and server-side external requests. |
| Data | MongoDB Atlas and Mongoose | Persistent catalogue and episode model. |
| Images | Cloudinary and WebP | Optimised assets with local fallbacks. |
| Sources | TMDB and JustWatch data | Episodes, translations, films and providers. |
| Verification | node:test, Supertest and Prettier | Backend contracts and code formatting. |
| Publishing | GitHub and Vercel | Public repository and website with a same-origin API. |

### Local setup

I use **Node.js 22.12 or later**. To reproduce the project from a fresh clone:

```bash
git clone https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC.git
cd RTC-PROYECTO11-REACT-BASIC
npm ci
cp -n backend/.env.example backend/.env
npm run dev
```

I fill in the server variables before querying real services. The interface runs at `http://127.0.0.1:5173` and the API health endpoint at `http://127.0.0.1:3001/api/health`. During development, Vite proxies `/api` to the backend. If I change the backend port, I also update `frontend/vite.config.js`.

The application can start without credentials, but the catalogue requires Atlas and external queries require TMDB. My [local configuration guide](docs/CONFIGURACION.md), in Spanish, explains the services, database and import process.

### Environment variables

| Variable | Where I use it | Purpose |
| --- | --- | --- |
| `PORT` | Local backend | Server port; defaults to 3001. |
| `MONGODB_URI` | Local backend and Vercel | Connection to the `expediente_x` database. |
| `TMDB_READ_TOKEN` | Backend and importer | TMDB read access token. |
| `CLOUDINARY_CLOUD_NAME` | Local upload script | Cloudinary asset environment. |
| `CLOUDINARY_API_KEY` | Local upload script | Cloudinary API identifier. |
| `CLOUDINARY_API_SECRET` | Local upload script | Signature for authorised uploads. |

I keep private values in `backend/.env` and the deployed server configuration. I do not commit them or place them in `VITE_` variables. Displaying public Cloudinary images does not require exposing upload credentials.

### Available commands

| Command from the repository root | Purpose |
| --- | --- |
| `npm run dev` | Start frontend and backend together. |
| `npm run build` | Generate `frontend/dist`. |
| `npm test` | Run backend tests. |
| `npm run format:check` | Check formatting in the configured code directories. |
| `npm run catalog:preview` | Retrieve and validate the catalogue without writing to Atlas. |
| `npm run catalog:import` | Import or update the catalogue in `expediente_x`. |
| `npm run images:prepare` | Prepare WebP copies from my local originals. |
| `npm run images:upload` | Review planned uploads without uploading. |
| `npm run images:upload -- --apply` | Upload assets with configured credentials and permissions. |

### Catalogue and images

I imported 218 episodes from TMDB, excluding specials and joining translations by identifier. The importer validates the documents and only accepts the `expediente_x` database. It updates source data without replacing my own visual assets. The batch write is not a transaction; repeating the process can complete a partially failed import.

I prepared 35 AI-generated images. Their WebP copies occupy approximately 2.75 MB, compared with 67.6 MB for the original PNGs. I keep the originals outside Git; the optimised copies and manifest support image delivery and local fallback. Regenerating them requires my local originals, which are not included when cloning the repository. I explain the process in [My images](docs/IMAGENES.md), in Spanish.

### Languages

I have prepared navigation, controls, request states and error messages in **Spanish, English and German**. I request the catalogue in the selected language and identify the available language when a translation is missing. I checked that responses contained titles and summaries; that is not an exhaustive linguistic review.

I keep language and country independent: I can read Akte X while checking Spain, or The X-Files while checking Germany. Both preferences persist in the browser. Availability data does not establish audio or subtitle languages.

### API endpoints and routes

| GET request | What I query |
| --- | --- |
| `/api/health` | Server status and Atlas connection. |
| `/api/episodes?lang=en` | Catalogue in `es`, `en` or `de`. |
| `/api/episodes/:id?lang=en` | Episode by TMDB identifier. |
| `/api/movies?lang=en` | Films `846` and `8836`. |
| `/api/movies/:id?lang=en` | Details of one of the two films. |
| `/api/watch-providers?country=GB` | Availability in `ES`, `DE`, `GB` or `US`. |

I have declared `/`, `/expedientes`, `/expedientes/:id`, `/favoritos`, `/personajes`, `/peliculas`, `/peliculas/:id`, `/donde-ver` and `/mi-historia`. I use `Link` and `NavLink` for navigation and `useParams` to request each detail resource. The wildcard route displays the not-found page. Route paths remain the same when I change the interface language.

### Validation and evidence

I checked fifteen backend tests and the production build. On the website, I tested search, filters, random selection, adding and removing favourites and watched status, persistence, summaries, languages, countries and navigation to films. I also verified production API responses and direct access to routes.

My [report](MEMORIA.md#9-pruebas) distinguishes automated tests, integration checks and manual review. The [gallery](docs/screenshots/entrega-2026-09-25/README.md) retains all sixteen current screenshots and their dimensions. These documents are in Spanish. I do not have an automated frontend test suite, and I did not simulate network or storage failures during the documented manual review.

### Deployment

I connected the `main` branch to the `xfiles` project on Vercel and the [xfiles-archive.vercel.app](https://xfiles-archive.vercel.app/) domain. I build with `npm run build` and publish `frontend/dist`. The rewrites in `vercel.json` serve React routes and the `api/index.js` function under the same domain.

I configured `MONGODB_URI` and `TMDB_READ_TOKEN` as private Production variables. The server reuses its Atlas connection. The documented Atlas configuration allows connections from `0.0.0.0/0` to support Vercel, while still requiring authentication. I checked service health, the catalogue, providers and deployed routes. Details are in the [configuration guide](docs/CONFIGURACION.md#mi-backend-en-vercel).

### Documentation

I maintain the following supporting documents in Spanish:

| Document | What I explain |
| --- | --- |
| [Technical report](MEMORIA.md) | Motivation, architecture, behaviour, tests, eighteen visual records and lessons learned. |
| [Assignment checklist](docs/COMPROBACION-ENUNCIADO.md) | How each requirement maps to its implementation. |
| [Delivery review](docs/REVISION-ENTREGA.md) | Verified publication and pending course-platform submission. |
| [Configuration](docs/CONFIGURACION.md) | Local development, services and Vercel integration. |
| [Production gallery](docs/screenshots/entrega-2026-09-25/README.md) | Sixteen screenshots, dimensions and user journeys. |
| [My images](docs/IMAGENES.md) | Optimisation, Cloudinary and local fallbacks. |
| [Resources and credits](docs/RECURSOS.md) | Sources and attribution. |
| [My story](docs/MI-HISTORIA.md) | My personal connection with The X-Files. |
| [Development history](docs/HISTORIAL-DESARROLLO.md) | Earlier development stages and checks. |
| [Initial concept](docs/CONCEPTO.md) | Initial exploration and scope. |

### My other projects

This project continues my learning after [KelseTS Talks · Project 10](https://github.com/AraceliFradejas/RTC-PROYECTO10-FULL-STACK-JAVASCRIPT). I follow the same approach to presenting my work: personal motivation, application behaviour, setup instructions and a technical report with tests and annotated screenshots.

### Academic notice and author

I am **Araceli Fradejas Muñoz**, the author of this academic project for the Rock The Code master's programme at The Power Tech School. I have developed an independent, unofficial application with no affiliation to the rights holders of The X-Files.

I identify the illustrations as AI-generated assets; they are not official photographs or frames from the series. I acknowledge TMDB as the data source and JustWatch as the availability source through TMDB. I document their provenance in [Resources and credits](docs/RECURSOS.md). I keep the teaching reference material in `Solucion/` and its spelling variants outside Git, GitHub and deployment.

[Volver a la versión en castellano](#versión-en-castellano) · [Back to the English version](#english-version)
