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
- [Redes sociales](#redes-sociales)
- [Aviso académico y autoría](#aviso-académico-y-autoría)

## Una historia personal

Siempre me ha encantado Expediente X. Después de dedicar varios proyectos de backend al universo swiftie, quiero explorar otra de mis aficiones y darle una identidad visual propia.

Mi hermano me descubrió «Anasazi» un verano. Después llegaron los VHS, mis primeras búsquedas por Internet en la UCM y muchos recuerdos que hoy reúno en [mi historia](docs/MI-HISTORIA.md).

Recuerdo haber visto la novena temporada en un canal alemán, donde la serie se titulaba **Akte X**. Ese recuerdo me ha llevado a plantear la aplicación en español, inglés y alemán.

He diseñado la web como un archivo de investigación: carpetas, sellos, anotaciones y pequeños guiños a la serie. He querido cuidar tanto la experiencia de consulta como el aprendizaje de React.

## Estado actual

Mi archivo reúne **218 episodios y 11 temporadas**, importados de TMDB en MongoDB Atlas. Incluye favoritos, progreso de visionado, disponibilidad por país, las dos películas y una sección de Mulder y Scully. Para el diseño utilizo 35 recursos visuales alojados en Cloudinary, con copias WebP locales de respaldo.

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

He seleccionado **seis capturas de escritorio** y dos de móvil y tableta para mostrar el diseño y los principales recorridos.

En la [sección de evidencias de mi memoria](MEMORIA.md#12-evidencias) conservo las dieciséis capturas actuales con la acción realizada, el resultado y su alcance. Las dos imágenes históricas de la memoria explican la evolución del proyecto.

### Explorar el archivo en escritorio

Al seleccionar la temporada 2 obtengo 25 episodios. La captura completa permite recorrer los filtros, las ilustraciones de temporada y la cuadrícula de tarjetas. He utilizado un área de visualización de 1440 × 900 píxeles CSS para las capturas de escritorio de esta selección.

![Archivo de la temporada 2 en escritorio](docs/screenshots/entrega-2026-09-25/11-archivo-temporada2-escritorio-es.png)

### Conocer a Mulder y Scully

La sección de personajes reúne los retratos y el contenido editorial de los dos protagonistas. He utilizado ilustraciones generadas con IA, identificadas como interpretaciones no oficiales, para mantener la identidad visual del archivo.

![Mulder y Scully en la sección de personajes de escritorio](docs/screenshots/entrega-2026-09-25/12-personajes-escritorio-es.png)

### Consultar las dos películas

He incorporado las películas de 1998 y 2008 con datos de TMDB. El listado presenta ambas fichas y sus enlaces; las mantengo separadas del catálogo y del progreso de episodios.

![Listado de películas en escritorio](docs/screenshots/entrega-2026-09-25/13-peliculas-escritorio-es.png)

### Abrir el detalle de una película

Desde el listado he abierto `/peliculas/846` y he comprobado los datos de la primera película, de 1998 y 121 minutos. Su ficha incluye una sinopsis ocultable y un enlace a la fuente. El identificador de la ruta determina el recurso que consulto en mi API.

![Detalle de la primera película en escritorio](docs/screenshots/entrega-2026-09-25/14-detalle-pelicula-escritorio-es.png)

### Recorrer mi historia y las atribuciones

He dedicado una página a mi relación personal con Expediente X. La captura de página completa recoge el relato, las ilustraciones y los créditos de los recursos y las fuentes. La escena del tren es una interpretación de ficción, no una fotografía personal.

![Mi historia y atribuciones en escritorio](docs/screenshots/entrega-2026-09-25/15-historia-atribuciones-escritorio-es.png)

### Adaptación móvil: ficha y preferencias

Como muestra responsive, incluyo la ficha de Anasazi a 390 × 844 píxeles CSS. He marcado el episodio como favorito y visto, he recargado y ambos estados se han conservado. Después he revelado la sinopsis. Presento esta imagen a un ancho reducido para que conserve su proporción de móvil dentro del README.

<img src="docs/screenshots/entrega-2026-09-25/03-anasazi-persistencia-sinopsis-movil-es.png" alt="Ficha móvil de Anasazi con preferencias conservadas y sinopsis visible" width="340">

### Adaptación a tableta: idioma y país independientes

A 768 × 1024 píxeles CSS he cambiado a Akte X sin modificar el país. Después de recargar, la interfaz permanece en alemán y la consulta sigue correspondiendo a España. Muestro fuente y fecha junto a las ofertas.

<img src="docs/screenshots/entrega-2026-09-25/08-aleman-pais-espana-tableta.png" alt="Interfaz alemana en tableta con disponibilidad de España" width="600">

Las capturas son del 25/09/2026, anteriores al ajuste del contador singular. Explico sus dimensiones y la corrección en la [memoria](MEMORIA.md#12-evidencias).

## Accesibilidad y diseño responsive

He utilizado estructura HTML semántica, etiquetas, foco visible, un enlace para saltar al contenido y estados accesibles en los botones. Adapto portada, navegación, filtros y cuadrículas con CSS y respeto la preferencia de movimiento reducido.

He revisado la web con la emulación de Chrome a 390, 768 y 1440 píxeles CSS, además del salto al contenido, el enlace al archivo y la selección de temporada por teclado. Quedan pendientes las pruebas en dispositivos físicos y una revisión completa de accesibilidad.

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

He importado 218 episodios de TMDB, excluyendo especiales y uniendo las traducciones por identificador. La importación valida los documentos y solo admite la base `expediente_x`; actualiza datos sin sustituir los recursos visuales propios. Explico la recuperación de una importación parcial en la [memoria](MEMORIA.md#7-datos-y-normalización).

He preparado 35 imágenes generadas con la herramienta de imágenes de Codex. Las copias WebP ocupan aproximadamente 2,75 MB frente a los 67,6 MB de PNG originales. Los originales permanecen fuera de Git; las copias optimizadas y el manifiesto permiten servir la web y recurrir al respaldo local. Para regenerarlas necesito mis originales locales, que no se descargan al clonar el repositorio. Explico el proceso en [Mis imágenes](docs/IMAGENES.md).

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

## Redes sociales

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

## Aviso académico y autoría

Soy **Araceli Fradejas Muñoz**, autora de este proyecto académico del máster Rock The Code · The Power Tech School. He desarrollado una aplicación independiente y no oficial, sin vinculación con los titulares de Expediente X.

Identifico las ilustraciones como recursos generados con IA; no son fotografías ni fotogramas oficiales. Reconozco TMDB como fuente de datos y JustWatch como fuente de disponibilidad a través de TMDB. Documento su procedencia en [Recursos y atribuciones](docs/RECURSOS.md).

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
- [Social links](#social-links)
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

I selected **six desktop screenshots** and two mobile and tablet examples to show the design and main user journeys.

My [report's evidence section](MEMORIA.md#12-evidencias) retains all sixteen current screenshots, with the action performed, result and scope. Two historical images elsewhere in the report explain the project's development. The screenshots preserve the Spanish and German interface text used during the review; their English captions do not change the language shown in the images.

#### Exploring the archive on desktop

Selecting season two returns 25 episodes. The full-page capture shows the filters, season illustrations and card grid. I used a viewport of 1440 × 900 CSS pixels for the desktop screenshots in this selection.

![Season two archive on desktop, in Spanish](docs/screenshots/entrega-2026-09-25/11-archivo-temporada2-escritorio-es.png)

#### Meeting Mulder and Scully

The characters section brings together portraits and editorial content about the two protagonists. I used AI-generated illustrations, identified as unofficial interpretations, to maintain the archive's visual identity.

![Mulder and Scully on the desktop characters page, in Spanish](docs/screenshots/entrega-2026-09-25/12-personajes-escritorio-es.png)

#### Browsing both films

I added the 1998 and 2008 films using TMDB data. The list presents both cards and their links; I keep them separate from the episode catalogue and viewing progress.

![Both films listed on desktop, in Spanish](docs/screenshots/entrega-2026-09-25/13-peliculas-escritorio-es.png)

#### Opening a film detail page

From the list, I opened `/peliculas/846` and checked the first film's data: 1998 and 121 minutes. Its detail page includes a summary that can be hidden and a source link. The route identifier determines which resource I request from my API.

![First film detail page on desktop, in Spanish](docs/screenshots/entrega-2026-09-25/14-detalle-pelicula-escritorio-es.png)

#### Reading my story and the credits

I dedicated a page to my personal connection with The X-Files. The full-page capture includes the story, illustrations and credits for assets and sources. The train scene is a fictional interpretation, not a personal photograph.

![My story and credits on desktop, in Spanish](docs/screenshots/entrega-2026-09-25/15-historia-atribuciones-escritorio-es.png)

#### Mobile layout: episode detail and preferences

As a responsive example, I include the Anasazi detail page at 390 × 844 CSS pixels. I marked the episode as a favourite and watched, reloaded and confirmed that both settings remained active. I then revealed the summary. I display this image at a reduced width to preserve its mobile proportions within the README.

<img src="docs/screenshots/entrega-2026-09-25/03-anasazi-persistencia-sinopsis-movil-es.png" alt="Mobile Anasazi detail with saved preferences and a visible summary, in Spanish" width="340">

#### Tablet layout: independent language and country

At 768 × 1024 CSS pixels, I switched to Akte X without changing the country. After reloading, the interface remained in German and the query still referred to Spain. I display the source and query date alongside the offers.

<img src="docs/screenshots/entrega-2026-09-25/08-aleman-pais-espana-tableta.png" alt="German tablet interface with availability for Spain" width="600">

The screenshots date from 25 September 2026, before the singular-counter correction. I explain their dimensions and the correction in my [report](MEMORIA.md#12-evidencias).

### Accessibility and responsive design

I have used semantic HTML, labelled controls, visible focus, a skip-to-content link and accessible button states. I adapt the homepage, navigation, filters and grids with CSS and respect the reduced-motion preference.

I reviewed the website with Chrome emulation at widths of 390, 768 and 1440 CSS pixels, and checked the skip link, archive link and season selector with the keyboard. Tests on physical devices and a complete accessibility review remain pending.

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

I imported 218 episodes from TMDB, excluding specials and joining translations by identifier. The importer validates the documents and only accepts the `expediente_x` database. It updates source data without replacing my own visual assets. I explain recovery from a partial import in my [report](MEMORIA.md#7-datos-y-normalización).

I prepared 35 images generated with the image tool integrated into Codex. Their WebP copies occupy approximately 2.75 MB, compared with 67.6 MB for the original PNGs. I keep the originals outside Git; the optimised copies and manifest support image delivery and local fallback. Regenerating them requires my local originals, which are not included when cloning the repository. I explain the process in [My images](docs/IMAGENES.md), in Spanish.

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

### Social links

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

### Academic notice and author

I am **Araceli Fradejas Muñoz**, the author of this academic project for the Rock The Code master's programme at The Power Tech School. I have developed an independent, unofficial application with no affiliation to the rights holders of The X-Files.

I identify the illustrations as AI-generated assets; they are not official photographs or frames from the series. I acknowledge TMDB as the data source and JustWatch as the availability source through TMDB. I document their provenance in [Resources and credits](docs/RECURSOS.md).

[Volver a la versión en castellano](#versión-en-castellano) · [Back to the English version](#english-version)
