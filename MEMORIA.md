# Memoria técnica · Mi archivo de Expediente X

## 1. Datos de mi proyecto

| Campo | Mi información |
| --- | --- |
| Autora | Araceli Fradejas Muñoz |
| Formación | Máster Rock The Code · The Power Tech School |
| Módulo | 7 · Frontend con React |
| Repositorio | [RTC-PROYECTO11-REACT-BASIC](https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC) |
| Inicio de esta memoria | 20 de septiembre de 2026 |
| Estado | He definido el alcance; tengo pendiente la implementación. |
| Despliegue | Tengo previsto utilizar Vercel; aún no dispongo de una URL verificada. |

## 2. Contexto y motivación

He elegido Expediente X porque siempre me ha encantado la serie. Tras trabajar con temáticas swifties en proyectos anteriores, quiero trasladar otra de mis aficiones al desarrollo de una interfaz con React.

Recuerdo haber visto la octava temporada en un canal alemán, donde la serie se titulaba Akte X. Por ese motivo quiero incluir el alemán junto al español y el inglés. No identifico el canal porque todavía no he concretado ese dato.

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

**Todavía no he ejecutado pruebas funcionales:** no hay aplicación implementada. Añadiré los resultados y sus límites cuando pueda reproducirlos.

## 11. Evidencias y capturas

Todavía no incluyo capturas de una aplicación o servicios que no he configurado. Prepararé estas evidencias conforme avance:

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

Primero prepararé la estructura ejecutable de frontend y backend. Después configuraré los servicios, verificaré el catálogo y desarrollaré la navegación y los componentes. Finalmente completaré las traducciones, las comprobaciones responsive, las capturas y el despliegue.

## 14. Fuentes consultadas

- [TVmaze: API](https://www.tvmaze.com/api).
- [TMDB: condiciones y atribuciones](https://developer.themoviedb.org/docs/faq).
- [TMDB: idiomas](https://developer.themoviedb.org/docs/languages).
- [TMDB: proveedores de series por país](https://developer.themoviedb.org/reference/tv-series-watch-providers).
- [IMDb: acceso a la API](https://data.imdb.com/documentation/api-documentation/getting-access/).
- [IMDb: uso de sus datos](https://help.imdb.com/article/imdb/general-information/can-i-use-imdb-data-in-my-software/G5JTRESSHJBBHTGX).
- [Cloudinary: subida de archivos](https://cloudinary.com/documentation/upload_images).
