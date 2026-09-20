# Mi archivo de Expediente X

Documento mi exploración inicial en esta nota. Mi decisión vigente es utilizar **TMDB como fuente principal prevista**, junto con mi API en Express, MongoDB Atlas y Cloudinary. Mantengo la comprobación de TVmaze como antecedente. Recojo el estado del desarrollo en el [README](../README.md) y la [memoria](../MEMORIA.md).

## Mi punto de partida

He elegido Expediente X porque siempre me ha encantado la serie y quiero convertir esa afición en una aplicación de React con personalidad. Tomo como dirección visual un archivo de investigación: carpetas, sellos, documentos y pequeños guiños a la serie.

## Mi comprobación de la API

El 20 de septiembre de 2026 he consultado la API de TVmaze para `The X-Files`. He obtenido la serie con identificador `430` y 218 registros de episodios distribuidos en 11 temporadas. Los 218 registros incluyen una referencia a una imagen. Esta comprobación confirma la presencia de las URLs, no una revisión individual de sus imágenes ni de sus derechos.

- Ficha: https://www.tvmaze.com/shows/430/the-x-files
- Episodios: https://api.tvmaze.com/shows/430/episodes
- Documentación: https://www.tvmaze.com/api

He observado que la sinopsis del primer episodio está en inglés. Tendré en cuenta el idioma antes de presentar las sinopsis como contenido en castellano.

## Mi criterio para los recursos

La documentación de TVmaze publica la API bajo CC BY-SA. Atribuiré los datos y enlazaré la fuente, respetando las condiciones aplicables a las adaptaciones. No presentaré las imágenes de la serie como obras de mi autoría ni asumiré que la licencia de los datos acredita por sí sola todos los derechos de terceros.

TVmaze recomienda en su foro utilizar las URLs de su servicio para las imágenes, de modo que pueda gestionar posibles retiradas. Esta indicación no equivale a una autorización individual del titular para cada imagen. Si necesito recursos con una licencia individual verificable, utilizaré recursos propios o archivos cuya ficha identifique autoría y licencia compatibles.

- Condiciones de la API: https://www.tvmaze.com/api
- Política de contenidos: https://www.tvmaze.com/site/copyright
- Orientación sobre imágenes: https://www.tvmaze.com/threads/6552/using-posters-and-data-from-tvmaze-api-on-a-commercial-website

Registraré las fuentes, atribuciones y condiciones de los recursos que finalmente incorpore. Identificaré la aplicación como un proyecto educativo de una aficionada, independiente y no oficial.

## Mi propuesta funcional inicial

- Exploro episodios y filtro por temporada y texto.
- Abro un expediente mediante una ruta `/expedientes/:id`.
- Guardo mis favoritos y mi progreso de visionado en el navegador.
- Decido cuándo revelar las sinopsis con un control de spoilers.
- Descubro un expediente al azar.

Estas funciones son una propuesta de alcance, todavía no una implementación. Si incorporo clasificaciones de tramas o casos, las revisaré como contenido editorial propio: no he confirmado que la API proporcione esas categorías.

## Mi ampliación del alcance

He decidido incorporar MongoDB Atlas, una API propia con Express y Cloudinary. También he elegido tres idiomas: español, inglés y alemán. Recuerdo haber visto la temporada 9 en un canal alemán con el título «Akte X»; quiero que esa experiencia personal forme parte del origen del proyecto, sin atribuirla a un canal que todavía no he identificado.

### Mi arquitectura prevista

- En React desarrollo las pantallas, los filtros, la navegación y los textos de interfaz para `es`, `en` y `de`.
- En Express preparo una API que consulta MongoDB Atlas y las fuentes externas. Mantengo las credenciales de Atlas, Cloudinary y TMDB en variables privadas del servidor.
- En Atlas guardo episodios con identificador de origen, temporada, número, títulos y sinopsis por idioma, categorías editoriales y fuentes. Utilizo un identificador de origen único para evitar duplicados al actualizar el catálogo.
- Para mis recursos de Cloudinary guardo URL, identificador público, texto alternativo por idioma, autoría, fuente y licencia.
- Para la disponibilidad guardo temporalmente resultados por país, proveedor, modalidad, enlace de consulta y fecha de recuperación. Distingo un fallo del servicio de una consulta sin resultados.
- Mantengo los favoritos y el progreso localmente en esta primera versión; añadir Atlas no implica crear cuentas ni guardar datos de todos los visitantes en una lista compartida.

### Mis rutas propuestas

| Ruta | Qué consulto |
| --- | --- |
| `/api/episodes?season=8&lang=de` | Mi catálogo filtrado por temporada e idioma |
| `/api/episodes/:id?lang=es` | La ficha de un expediente |
| `/api/watch-providers?country=ES` | La disponibilidad de la serie para el país seleccionado |

### Mis idiomas y la disponibilidad

Presento la serie como «Expediente X», «The X-Files» o «Akte X» según el idioma. Traduzco también navegación, filtros, botones, errores y textos accesibles. Para títulos y sinopsis compruebo qué traducciones ofrecen las fuentes; si falta una, identifico el idioma disponible en lugar de simular una traducción.

Tomo España como país inicial y propongo España, Alemania, Reino Unido y Estados Unidos como primeras opciones. El país no cambia automáticamente al seleccionar un idioma.

Para las plataformas he identificado el endpoint de TMDB `/tv/{series_id}/watch/providers`, que ofrece datos procedentes de JustWatch. La integración requiere credenciales y atribuciones. Todavía no he consultado resultados autenticados ni confirmado plataformas concretas. Enlazo la página de disponibilidad proporcionada por la fuente: no presupongo enlaces directos de reproducción, cobertura de todas las temporadas ni idiomas de audio.

- Documentación: https://developer.themoviedb.org/reference/tv-series-watch-providers
- Idiomas: https://developer.themoviedb.org/docs/languages
- Autenticación: https://developer.themoviedb.org/docs/authentication-application

Esta sección recoge mis decisiones de diseño; la conexión a Atlas, las traducciones completas y la consulta de plataformas están pendientes de implementación y verificación.
