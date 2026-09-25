# Mi comprobación del enunciado · React Basic

He contrastado mi aplicación con el enunciado de entrega facilitado el **25 de septiembre de 2026**. La entrega solicitada consiste en **el enlace al repositorio público de GitHub**.

## Requisitos y evidencias

| Requisito del enunciado | Mi implementación | Evidencia |
| --- | --- | --- |
| Responsive | Adapto navegación, portada, filtros y cuadrículas mediante CSS y media queries. | [Estilos](../frontend/src/styles.css) y [capturas reales](screenshots/entrega-2026-09-25/README.md) con muestras a 390, 768 y 1440 píxeles CSS. |
| Buenas prácticas de HTML y CSS | Utilizo estructura semántica, etiquetas asociadas a controles, foco visible, clases reutilizables y adaptación a movimiento reducido. | [Layout](../frontend/src/components/Layout.jsx), [archivo](../frontend/src/pages/Archive.jsx) y [estilos](../frontend/src/styles.css). |
| Mínimo tres estados con sentido lógico | En el archivo gestiono `query` para buscar, `season` para filtrar por temporada y `viewing` para distinguir vistos y pendientes. Además, comparto favoritos, progreso, idioma y país. | [Archive](../frontend/src/pages/Archive.jsx) y [PreferencesProvider](../frontend/src/context/Preferences.jsx). |
| Mínimo un `useEffect` | Cargo los datos al cambiar la URL consultada y cancelo la petición al limpiar el efecto. También persisto preferencias y actualizo el idioma del documento. | [useApi](../frontend/src/hooks/useApi.js) y [preferencias](../frontend/src/context/Preferences.jsx). |
| Mínimo una petición a una API para recoger datos | Desde React realizo `fetch` a mi API Express. El catálogo procede de MongoDB Atlas y las películas y plataformas de TMDB. | [useApi](../frontend/src/hooks/useApi.js), [API](../backend/src/app.js) y comprobaciones de producción en [mi memoria](../MEMORIA.md). |
| React Router, declaración de rutas y navegación mediante Links | Declaro las rutas con `BrowserRouter`, `Routes` y `Route`. Navego con `Link` y `NavLink`. | [Rutas](../frontend/src/main.jsx), [navegación](../frontend/src/components/Layout.jsx) y [tarjeta de episodio](../frontend/src/components/EpisodeCard.jsx). |
| Ruta con parámetro utilizado por el componente | Declaro `/expedientes/:id`. En `Detail` leo `id` con `useParams` y lo utilizo para solicitar el episodio a `/api/episodes/:id`. | [Detail](../frontend/src/pages/Detail.jsx). He comprobado la ficha de Anasazi, identificador `285317`. |
| Repositorio público | Mantengo `main` publicada en GitHub con visibilidad pública, comprobada mediante su API pública. | [Repositorio de entrega](https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC). |

También aplico los contenidos de la descripción general: escribo JSX, separo componentes y envío props de padre a hijo. Por ejemplo, `Archive` renderiza `EpisodeCard` con la prop `episode`; la tarjeta utiliza sus datos para mostrar el título y construir el enlace al detalle.

## Mi conclusión

He encontrado implementación y evidencias para todos los requisitos del enunciado. Las pruebas de diseño y teclado tienen el alcance concreto descrito en la galería; no las presento como una auditoría exhaustiva ni como pruebas en dispositivos físicos.

La compilación, el formato y las 15 pruebas del backend pasaron antes de publicar la corrección del contador en el commit `0d41192`. Después comprobé que Vercel servía la nueva compilación, la ruta de detalle respondía y Atlas seguía conectado. Esta actualización del enunciado modifica únicamente documentación.

El enunciado no exige una API propia, Atlas, Cloudinary, tres idiomas, Vercel, memoria ni capturas de paneles privados. He incorporado esas ampliaciones y evidencias para explicar mi trabajo; no necesito añadir funcionalidades para cubrir los mínimos solicitados.

## Mi texto de entrega

> Entrego mi proyecto React Basic: «Expediente X · Mi archivo de casos». He desarrollado un archivo de episodios con búsqueda, filtros, favoritos y seguimiento de visionado. Incluyo el README, la memoria y las capturas de las comprobaciones realizadas en el repositorio público.
>
> Repositorio: https://github.com/AraceliFradejas/RTC-PROYECTO11-REACT-BASIC
>
> Aplicación publicada, como enlace adicional: https://xfiles-archive.vercel.app/

La entrega obligatoria es el enlace de GitHub. No he enviado todavía el proyecto al campus.
