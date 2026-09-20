# Memoria técnica · Mi archivo de Expediente X

## 1. Datos de mi proyecto

| Campo | Mi información |
| --- | --- |
| Autora | Araceli Fradejas Muñoz |
| Formación | Máster Rock The Code · The Power Tech School |
| Módulo | 7 · Frontend con React |
| Repositorio | [RTC-PROYECTO11-REACT-BASIC](https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC) |
| Inicio de esta memoria | 20 de septiembre de 2026 |
| Estado | He preparado la base ejecutable; tengo pendientes los servicios externos. |
| Despliegue | [Mi interfaz inicial en Vercel](https://xfiles-archive.vercel.app/); backend pendiente. |

## 2. Contexto y motivación

He elegido Expediente X porque siempre me ha encantado la serie. Tras trabajar con temáticas swifties en proyectos anteriores, quiero trasladar otra de mis aficiones al desarrollo de una interfaz con React.

Recuerdo haber visto la novena temporada en un canal alemán, donde la serie se titulaba Akte X. Por ese motivo quiero incluir el alemán junto al español y el inglés. No identifico el canal porque todavía no he concretado ese dato.

Quiero crear la sensación de consultar un archivo de casos. Utilizaré una dirección visual basada en documentos, carpetas, sellos y anotaciones, con guiños que acompañen la navegación sin dificultar la lectura.

## 3. Objetivos

Mi objetivo principal es aplicar JSX, componentes, props, estados, efectos y navegación en una aplicación que tenga sentido como producto.

Quiero que pueda buscar un episodio, abrir su expediente, guardarlo como favorito y consultar dónde ver la serie. También quiero aprovechar mis conocimientos previos de Express, MongoDB Atlas y Cloudinary, manteniendo el trabajo de React como centro de esta entrega.

## 4. Requisitos y cómo planteo cumplirlos

| Requisito | Mi aplicación prevista | Mi estado actual |
| --- | --- | --- |
| Diseño responsive | Adaptaré el archivo y las fichas a móvil, tableta y escritorio. | Pendiente de implementar y verificar. |
| Buenas prácticas HTML y CSS | Utilizaré estructura semántica, etiquetas, foco visible y estilos reutilizables. | Pendiente. |
| Componentes y props | Separaré tarjetas, filtros y controles, pasando los datos desde sus componentes padres. | Pendiente. |
| Tres estados con sentido | Gestionaré búsqueda, temporada seleccionada y favoritos. | Pendiente. |
| Al menos un `useEffect` | Cargaré datos y controlaré la cancelación de solicitudes al abandonar la vista. | Pendiente. |
| Petición a una API | Consultaré mi backend desde React y conectaré el backend con las fuentes externas. | Pendiente. |
| React Router y enlaces | Navegaré entre inicio, archivo, favoritos y disponibilidad. | Pendiente. |
| Ruta con parámetro | Utilizaré `/expedientes/:id` para cargar el episodio correspondiente. | Pendiente. |
| Entrega en GitHub público | Comprobaré la visibilidad y el acceso antes de entregar. | He vinculado la carpeta local al remoto; queda la verificación final. |

## 5. Tecnologías y arquitectura

Prepararé una interfaz con React, Vite, React Router y CSS. Crearé una API con Node.js y Express y utilizaré Mongoose para trabajar con MongoDB Atlas.

Mi flujo previsto será: **React → API de Express → Atlas y servicios externos**. Entregaré las imágenes mediante sus URLs de Cloudinary. Mantendré los secretos de los servicios en el servidor.

En Atlas guardaré episodios con identificador de origen, temporada, número, contenido por idioma y fuentes. Para cada recurso visual guardaré su URL, identificador público, atribución y licencia cuando corresponda. Evitaré duplicados al importar mediante identificadores únicos de la fuente.

Guardaré favoritos y progreso en el navegador en la primera versión. No he incluido cuentas de usuario ni sincronización entre dispositivos en el alcance inicial.

## 6. Elección de las fuentes de datos

### Mi exploración de TVmaze

En la comprobación inicial del 20 de septiembre obtuve 218 registros de episodios distribuidos en 11 temporadas para la serie con identificador `430`. Cada registro incluía una URL de imagen. No interpreto ese resultado como una revisión de los derechos de cada imagen ni como una comprobación de todos los archivos enlazados.

La sinopsis del primer episodio estaba en inglés. Al ampliar el proyecto a tres idiomas, valoré una fuente con soporte de traducciones.

### Mi elección de TMDB

He elegido TMDB como fuente principal prevista para consultar episodios, traducciones y disponibilidad. Su documentación contempla datos localizados y un endpoint de proveedores por país, con información de JustWatch. Aplicaré las condiciones y atribuciones antes de publicar.

Todavía tengo pendiente configurar la credencial y comprobar la cobertura real de los episodios en español, inglés y alemán. No doy por equivalentes los identificadores ni el número de registros de TVmaze y TMDB.

### Mi valoración de IMDb

He revisado la opción de IMDb. Su API oficial requiere acceso mediante AWS Data Exchange y suscripción; los archivos no comerciales tienen restricciones de reutilización. Para el alcance de esta entrega he preferido TMDB. Podré incorporar enlaces a IMDb como referencia sin convertirlo en una integración contratada.

## 7. Navegación y funcionamiento previstos

| Página | Qué quiero hacer |
| --- | --- |
| Inicio | Presentaré el proyecto y facilitaré la entrada al archivo. |
| Archivo | Buscaré y filtraré episodios por temporada. |
| Expediente | Consultaré el episodio identificado por el parámetro de la ruta. |
| Favoritos | Revisaré los episodios que haya guardado en el navegador. |
| Dónde verla | Consultaré proveedores según el país. |
| Acerca del proyecto | Explicaré mi motivación y recogeré las fuentes y atribuciones. |

Añadiré un control para revelar las sinopsis y una opción de expediente aleatorio. Si incorporo categorías como mitología o casos independientes, las trataré como una clasificación editorial que debo revisar; no presupongo que la API las proporcione.

## 8. Idiomas y plataformas

Prepararé español, inglés y alemán para la interfaz, los mensajes y los textos accesibles. Comprobaré por separado las traducciones del catálogo y señalaré los casos en los que recurra al idioma disponible.

Mantendré independientes el idioma y el país. Tomo España como selección inicial y propongo Alemania, Reino Unido y Estados Unidos como primeras alternativas.

Mostraré la fuente y la fecha de consulta de las plataformas, diferenciando suscripción, compra y alquiler cuando haya datos. No afirmaré que todas las temporadas o idiomas de audio estén incluidos a partir de un resultado general de la serie. Diferenciaré la ausencia de resultados de un fallo al consultar el servicio.

## 9. Recursos visuales

Utilizaré Cloudinary para recursos propios o autorizados. Registraré la procedencia de cada archivo, su autoría y sus condiciones. No tomaré la disponibilidad de una imagen en una API como autorización ilimitada para copiarla.

Crearé las capturas de la memoria a partir de mi aplicación y de comprobaciones reales. Mantengo el material docente de referencia fuera del repositorio y del despliegue.

## 10. Mi plan de validación

Comprobaré la búsqueda, los filtros, las fichas, los favoritos y su persistencia. Abriré rutas de detalle directamente y probaré identificadores inexistentes, respuestas vacías, errores de red y estados de carga.

Revisaré los tres idiomas, la independencia del país, el teclado, el foco, la lectura y la ausencia de desbordamientos en distintos tamaños de pantalla. Antes de entregar ejecutaré los comandos de comprobación que incorpore al proyecto y verificaré las rutas del despliegue.

He ejecutado `npm run build` correctamente y cinco pruebas de API con `npm test`: ausencia de conexión, idioma alternativo de la sinopsis, consulta por identificador, parámetros inválidos y episodio inexistente. Para las respuestas con datos utilizo dobles de prueba: no representan una conexión real a Atlas.

He revisado en Chrome el inicio en escritorio, el cambio a alemán, la conservación de España como país y el archivo a 390 × 844 píxeles. El aviso de catálogo no disponible corresponde a una respuesta HTTP 503 controlada. Tengo pendiente comprobar todos los recorridos con datos reales, el resto de tamaños y el despliegue.

## 11. Evidencias y capturas

He incorporado mi primera captura real de la interfaz. No incluyo todavía capturas de Atlas, Cloudinary o Vercel porque no he conectado esos servicios.

![Mi archivo de Akte X en móvil, con el aviso de catálogo no disponible](docs/screenshots/inicio/archivo-movil-de.png)

He capturado esta página desde Chrome con emulación de 390 × 844 píxeles. Documenta mi primera base visual, no un catálogo terminado.

Completaré las siguientes evidencias conforme avance:

| Evidencia | Qué documentaré |
| --- | --- |
| Archivo en escritorio y móvil | Mostraré la adaptación visual. |
| Búsqueda y ficha | Mostraré filtros y navegación con parámetro. |
| Idiomas | Mostraré las versiones española, inglesa y alemana. |
| Favoritos | Mostraré el guardado y la persistencia al recargar. |
| Disponibilidad | Mostraré país, proveedor, fuente y fecha de consulta. |
| Atlas | Mostraré documentos y relaciones realmente utilizados, sin credenciales. |
| Cloudinary | Mostraré los recursos incorporados y su correspondencia con la web. |
| Vercel y GitHub | Mostraré el despliegue comprobado y el repositorio de entrega. |

## 12. Registro de decisiones

El 20 de septiembre de 2026 he definido la temática, la dirección visual y el alcance inicial. He decidido incorporar Atlas y Cloudinary, preparar tres idiomas y consultar la disponibilidad por país. Después de explorar TVmaze e IMDb, he elegido TMDB como fuente principal prevista.

Mantendré commits en castellano asociados a cambios reales y revisables. Actualizaré esta memoria conforme implemente y pruebe cada parte; no presentaré previsiones como resultados.

## 13. Próximos pasos

He preparado la estructura ejecutable y la navegación. Mi siguiente paso es configurar Atlas y TMDB, importar los episodios y comprobar las fichas, los filtros y los favoritos con datos reales. Después completaré los recursos visuales de Cloudinary, el progreso, la disponibilidad, las traducciones del catálogo y el despliegue.

## 13.1. Mi primera base ejecutable

He organizado el proyecto en dos espacios de trabajo npm: `frontend` y `backend`. Arranco ambos con `npm run dev`. He separado las páginas, los componentes, las preferencias y las peticiones en React; en Express he separado el arranque, la conexión y el modelo de episodios.

He utilizado un efecto para las peticiones y cancelo la solicitud cuando abandono la vista. He preparado estados para búsqueda, temporada, favoritos, idioma, país y visibilidad de sinopsis. Mantengo separados el idioma del título y el de la sinopsis cuando falta alguna traducción.

He creado el motivo decorativo de la portada con CSS. No es una fotografía de la serie ni un recurso ya alojado en Cloudinary. Las tipografías de esta primera versión se cargan desde Google Fonts.

### Mi estado de los requisitos tras este avance

He implementado componentes con props, estados, efectos, rutas, enlaces y lectura del parámetro `id`. He realizado peticiones HTTP reales entre frontend y backend, aunque el catálogo responde con indisponibilidad hasta conectar Atlas. No doy por cumplida todavía la recogida de datos externos ni la validación de todos los requisitos de la entrega.

## 14. Fuentes consultadas

- [TVmaze: API](https://www.tvmaze.com/api).
- [TMDB: condiciones y atribuciones](https://developer.themoviedb.org/docs/faq).
- [TMDB: idiomas](https://developer.themoviedb.org/docs/languages).
- [TMDB: proveedores de series por país](https://developer.themoviedb.org/reference/tv-series-watch-providers).
- [IMDb: acceso a la API](https://data.imdb.com/documentation/api-documentation/getting-access/).
- [IMDb: uso de sus datos](https://help.imdb.com/article/imdb/general-information/can-i-use-imdb-data-in-my-software/G5JTRESSHJBBHTGX).
- [Cloudinary: subida de archivos](https://cloudinary.com/documentation/upload_images).


## 15. Mi primera conexión a MongoDB Atlas

El 20 de septiembre de 2026 he preparado `backend/.env` a partir de mi configuración local. La cadena no indicaba una base de datos, por lo que he añadido `expediente_x` como destino del proyecto y he conservado el archivo original.

He comprobado una conexión real con Mongoose, un comando `ping` y una consulta de lectura a la colección `episodes`. Las comprobaciones han respondido correctamente y el recuento es de cero documentos. No he importado episodios ni modificado colecciones de proyectos anteriores.

Mantengo tanto `.env` como `backend/.env` excluidos de Git. No incluyo credenciales, nombres de host ni cadenas de conexión en las evidencias públicas. Mi siguiente paso es configurar el token de lectura de TMDB y preparar la importación del catálogo.


## 16. Mi importador y la consulta de plataformas

He preparado un cliente de TMDB que envía el token mediante cabecera, limita la espera y devuelve errores controlados. No publico respuestas que puedan revelar credenciales.

Mi importador verifica la serie `4087` por su identificador y nombre original, excluye especiales y solicita cada temporada en los tres idiomas. Uno las traducciones por identificador de episodio, valido los documentos y después actualizo la base `expediente_x`. Conservo los campos de recursos visuales propios. La escritura no es transaccional; puedo repetir la importación para completar un fallo parcial sin crear duplicados por identificador.

He añadido una consulta de plataformas por país con modalidades de suscripción, compra, alquiler, acceso gratuito y anuncios. Mantengo la fecha de consulta y la atribución a JustWatch mediante TMDB, con una caché en memoria de una hora. Todavía no he conectado esta respuesta a la pantalla de disponibilidad.

He ejecutado doce pruebas correctas: las cinco iniciales y siete sobre ausencia de token, cabecera de autenticación, traducciones, serie y temporadas, actualizaciones, caché y errores de disponibilidad. Utilizo datos de prueba aislados, no episodios ni proveedores publicados.

He ejecutado también `npm run catalog:preview`: se ha detenido con `TMDB_NOT_CONFIGURED` porque todavía no he completado el token de lectura. Esta comprobación confirma la detección de configuración incompleta; no es una importación exitosa ni una validación del catálogo real. Mi siguiente paso depende de configurar ese token en `backend/.env`.


## 17. Mi primer despliegue de la interfaz

He publicado la interfaz en **https://xfiles-archive.vercel.app/**, vinculando el repositorio de GitHub y su rama `main` al proyecto `xfiles` de Vercel. El nombre exacto `xfiles.vercel.app` ya estaba asignado a otro proyecto; he elegido `xfiles-archive.vercel.app` y he conservado una redirección desde el dominio automático inicial.

He configurado la instalación con `npm ci`, la compilación con `npm run build` y la salida `frontend/dist`. He añadido reglas para abrir directamente las rutas de React, reservando `/api/` para el backend.

He comprobado respuestas HTTP 200 con el HTML de mi aplicación en `/`, `/expedientes`, `/mi-historia` y `/donde-ver`. También he comprobado el inicio renderizado en Chrome. La verificación HTTP acredita la entrega de la interfaz, no el funcionamiento completo del catálogo.

No he publicado credenciales ni conectado el backend de producción. Mantengo el catálogo y las plataformas identificados como pendientes. Utilizaré esta URL pública en mi solicitud de acceso a la API de TMDB.

## 18. Mi catálogo real y el seguimiento de episodios

He configurado el token de TMDB y he ejecutado primero la revisión sin escritura. He recibido 218 episodios de 11 temporadas, con título y sinopsis no vacíos en cada idioma solicitado. Esta comprobación mide presencia de texto; no sustituye una revisión lingüística completa.

Mi primera ejecución de importación se detuvo porque la URI no indicaba `expediente_x`. He añadido el nombre de la base manteniendo las credenciales y he repetido el comando: he creado 218 documentos. He comprobado las respuestas de catálogo y detalle en los tres idiomas y las plataformas en ES, DE, GB y US.

He conectado «Dónde verla» a mi API y muestro modalidades, fecha y atribución a JustWatch mediante TMDB. He incluido en «Mi historia» el logotipo oficial y el aviso de independencia requerido por TMDB. No deduzco idiomas de audio ni disponibilidad de todas las temporadas a partir de las ofertas de la serie.

He añadido el estado `watched`, su persistencia local, una barra de progreso y el filtro de vistos y pendientes. Cuento solo los identificadores que siguen presentes en el catálogo. El botón aleatorio elige entre los resultados de mis filtros. Mantengo separados favoritos y visionado.

En Chrome he marcado «Piloto» como visto, he recargado y he comprobado que el progreso continúa en 1/218. Al buscar «piloto» he obtenido un resultado; el botón aleatorio ha abierto `/expedientes/283988`. He guardado el episodio como favorito y he revelado su sinopsis real. He compilado la interfaz y han pasado las doce pruebas del backend.

He preparado la función del backend para Vercel. Todavía no doy por verificados sus datos en producción: necesito completar las variables privadas y comprobar las respuestas del despliegue.

He añadido una prueba del adaptador de Vercel sin credenciales: compruebo salud, catálogo no disponible y ruta inexistente. Mi conjunto actual suma trece pruebas correctas.

He revisado el detalle en una vista móvil de 390 × 844 píxeles. Conservo esta captura real con la sinopsis oculta, el favorito guardado y el episodio visto:

![Mi detalle móvil de Piloto](docs/screenshots/detalle-piloto.png)

### Mi comprobación del despliegue de este avance

He publicado los commits `0425b4e`, `7ecb395` y `afc3299` en `main`. Vercel ha confirmado el despliegue correcto. He comprobado el dominio público: `/api/health` devuelve HTTP 200 con `database: unavailable`; el catálogo devuelve HTTP 503 con `CATALOG_UNAVAILABLE` y las plataformas HTTP 503 con `TMDB_NOT_CONFIGURED`. La ruta directa `/expedientes/283988` sirve la interfaz con HTTP 200.

Estas respuestas confirman que mi función y sus rutas están desplegadas. Todavía no acreditan la conexión de producción con Atlas y TMDB: las dos variables privadas siguen pendientes de configurar. He cancelado un intento de autenticación de Vercel CLI que abrió el navegador predeterminado y he mantenido la sesión existente de Chrome.

## 19. Mi conexión de producción y las películas

He guardado exclusivamente `MONGODB_URI` y `TMDB_READ_TOKEN` como secretos de Production en el proyecto `xfiles` de Vercel y he desplegado de nuevo. He eliminado el archivo temporal usado para importarlos; conservo mi configuración local ignorada por Git.

TMDB ha respondido correctamente, pero Atlas rechazaba el acceso porque solo permitía mi IP local. He decidido autorizar de forma permanente `0.0.0.0/0` para admitir las conexiones de Vercel. Conozco que permite intentos de conexión desde cualquier IPv4; no elimina la autenticación. Tras aplicar la regla, he comprobado `/api/health` con `database: connected`, el catálogo español con 218 episodios y el detalle alemán de «Gezeichnet», todos con HTTP 200.

He ampliado el proyecto con las dos películas: «Expediente X: Enfréntate al futuro» (1998, TMDB 846) y «Expediente X: Creer es la clave» (2008, TMDB 8836). He verificado sus datos en los tres idiomas y he creado listado y ruta parametrizada. Solicito los datos desde mi backend con caché de una hora y conservo las sinopsis ocultas inicialmente. Mantengo el recuento de episodios independiente.

He añadido dos pruebas sobre caché, consultas simultáneas, idioma de reserva y validación de rutas. Las quince pruebas pasan y la interfaz compila. He comprobado en Chrome el listado local de las dos películas con sus años y duraciones.

Estoy generando imágenes con IA inspiradas en la serie y sus temporadas para incorporarlas a mis recursos visuales. Todavía no las he integrado. Las identificaré como imágenes generadas con IA y no oficiales, y registraré su procedencia antes de publicarlas en Cloudinary.

## 20. Mi historia como centro del proyecto

He desarrollado «Mi historia» a partir de mis recuerdos: el relato de mi hermano sobre «Anasazi», las cintas VHS, las guías, Internet en la UCM, las emisiones de madrugada, los DVD, mi viaje a Londres, el cine con Diego y los nueve minutos de mi reloj. Los presento como vivencias personales, sin convertir mis recuerdos de fechas o emisiones en una cronología documental de la serie.

He corregido mi referencia inicial a la octava temporada: en mi relato más detallado recuerdo haber visto la novena en un canal alemán por satélite. He actualizado esa referencia en los tres idiomas y en la documentación.

He organizado la página en seis recuerdos, con encabezados y párrafos que puedo leer también en inglés y alemán. Conservo la versión castellana en [Mi historia](docs/MI-HISTORIA.md). Mantengo los créditos de TMDB y JustWatch al final de la página.

## 21. Mis imágenes y los personajes principales

He revisado las 35 imágenes que he generado y he preparado versiones WebP, manteniendo intactos mis PNG. Las copias optimizadas suman 2,75 MB frente a unos 67,6 MB de originales. No envío los PNG a GitHub ni a Vercel.

He sustituido el motivo de la portada por la panorámica de Mulder y Scully. He incorporado un selector visual de las once temporadas, una ilustración identificada en el detalle y una imagen de ambiente en mi historia. He añadido `/personajes`, con los dos retratos y textos en los tres idiomas, además de los dos lemas que forman parte de mis recuerdos. No los atribuyo a un diálogo concreto.

He preparado un script de subida firmada a Cloudinary y una copia local de respaldo. La configuración y subida real siguen pendientes; no doy por alojadas las imágenes en Cloudinary hasta comprobar sus URL.

He comprobado visualmente la portada en Chrome en escritorio y en una vista móvil de 390 × 844 píxeles: en móvil sitúo la imagen encima del texto para conservar los rostros y la legibilidad. He compilado la interfaz y he comprobado que los 35 archivos del manifiesto existen.
