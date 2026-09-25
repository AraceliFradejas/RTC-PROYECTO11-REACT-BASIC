# Expediente X · Mi archivo de casos

Proyecto de React del máster **Rock The Code** de **The Power Tech School**.

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

He seleccionado ocho capturas para este README, incluida la portada superior. En la [sección de evidencias de mi memoria](MEMORIA.md#12-evidencias) incluyo las dieciséis actuales con la acción realizada, el resultado y su alcance; también conservo dos imágenes históricas para explicar la evolución.

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
