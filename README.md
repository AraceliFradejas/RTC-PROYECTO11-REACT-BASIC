# Expediente X · Mi archivo de casos

Desarrollo este proyecto para el **Módulo 7: Frontend con React** del máster **Rock The Code**, de **The Power Tech School**.

> Mi punto de partida: convertir mi afición por Expediente X en un archivo que pueda explorar, consultar y hacer mío.

## Contenido

- [Una historia personal](#una-historia-personal)
- [Estado actual](#estado-actual)
- [Qué quiero construir](#qué-quiero-construir)
- [Tecnologías y fuentes](#tecnologías-y-fuentes)
- [Idiomas](#idiomas)
- [Desarrollo local y despliegue](#desarrollo-local-y-despliegue)
- [Documentación](#documentación)
- [Recursos y autoría](#recursos-y-autoría)

## Una historia personal

Siempre me ha encantado Expediente X. Después de dedicar varios proyectos de backend al universo swiftie, quiero explorar otra de mis aficiones y darle una identidad visual propia.

Recuerdo haber visto la octava temporada en un canal alemán, donde la serie se titulaba **Akte X**. Ese recuerdo me ha llevado a plantear la aplicación en español, inglés y alemán.

Imagino la web como un archivo de investigación: carpetas, sellos, anotaciones y pequeños guiños a la serie. Quiero cuidar tanto la experiencia de consulta como el aprendizaje de React.

## Estado actual

**Estoy en la fase de definición y documentación inicial.** He elegido la temática, las tecnologías y el alcance de la primera versión. Todavía no he implementado la aplicación, conectado los servicios ni realizado el despliegue.

Mi repositorio es [RTC-PROYECTO11-REACT-BASIC](https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC). Añadiré el enlace de la web cuando tenga un despliegue comprobado.

## Qué quiero construir

- Exploraré el catálogo de episodios con búsqueda y filtro por temporada.
- Consultaré cada expediente en una página con su identificador en la ruta.
- Guardaré favoritos y progreso de visionado en el navegador.
- Podré ocultar o revelar las sinopsis para evitar spoilers.
- Descubriré un episodio al azar.
- Consultaré dónde ver la serie según el país seleccionado.
- Utilizaré la web en móvil, tableta y escritorio, con navegación por teclado y controles accesibles.

Estas funcionalidades representan mi alcance previsto; todavía no las presento como terminadas.

## Tecnologías y fuentes

| Tecnología | Para qué la utilizaré |
| --- | --- |
| React y Vite | Construiré la interfaz con componentes, props, estados y efectos. |
| React Router | Organizaré las páginas y la navegación, incluida la ruta `/expedientes/:id`. |
| CSS | Daré forma al archivo y adaptaré las pantallas a distintos tamaños. |
| Node.js y Express | Crearé mi API y centralizaré las consultas externas. |
| MongoDB Atlas y Mongoose | Guardaré mi catálogo y contenido editorial con sus fuentes. |
| Cloudinary | Alojaré recursos visuales propios o con permiso de reutilización. |
| TMDB | Consultaré el catálogo, las traducciones disponibles y las plataformas. |

He elegido **TMDB como fuente principal prevista** por el alcance multilingüe. Para la disponibilidad utilizaré sus datos de JustWatch y aplicaré las atribuciones correspondientes. Todavía tengo pendiente configurar el acceso y comprobar las respuestas para la serie.

Durante la exploración inicial también comprobé TVmaze: devolvió 218 registros de episodios en 11 temporadas. Mantengo esa comprobación en la memoria como antecedente, sin confundirla con una integración terminada de TMDB.

## Idiomas

Prepararé las versiones **Expediente X**, **The X-Files** y **Akte X**. Traduciré navegación, controles, errores y textos accesibles. Revisaré la cobertura de títulos y sinopsis; identificaré los contenidos que solo estén disponibles en otro idioma.

Separaré el idioma del país de reproducción: podré leer la web en alemán y consultar la disponibilidad en España. No daré por confirmado el doblaje, los subtítulos o todas las temporadas a partir de la disponibilidad general de la serie.

## Desarrollo local y despliegue

Todavía no dispongo de comandos de instalación ni variables definitivas: los documentaré cuando prepare y compruebe la estructura ejecutable. Mantendré las credenciales en archivos locales ignorados por Git y en variables privadas del servidor.

Mi objetivo es desplegar en **Vercel**, verificar las rutas al recargar y entregar el repositorio público. Incorporaré enlaces y capturas cuando haya comprobado cada paso.

## Documentación

- En mi [memoria](MEMORIA.md) explico la motivación, los requisitos, las decisiones y el plan de validación.
- En mi [documento de concepto](docs/CONCEPTO.md) recojo la exploración inicial y el alcance previsto.

## Recursos y autoría

Soy **Araceli Fradejas Muñoz**, autora de este proyecto académico, independiente y no oficial. No tengo vinculación con los titulares de Expediente X ni presento los materiales de terceros como propios.

Registraré la procedencia, autoría y licencia de los recursos utilizados. Alojar una imagen en Cloudinary no sustituye su permiso de uso. Mantengo el material docente de referencia fuera de Git y GitHub.

### Fuentes técnicas

- [Condiciones y atribuciones de TMDB](https://developer.themoviedb.org/docs/faq).
- [Disponibilidad por país y atribución a JustWatch](https://developer.themoviedb.org/reference/tv-series-watch-providers).
- [Documentación de TVmaze](https://www.tvmaze.com/api).
- [Gestión de archivos en Cloudinary](https://cloudinary.com/documentation/upload_images).
