# Mi revisión de entrega

Última revisión: **25 de septiembre de 2026**. Mi objetivo es cerrar la entrega del fin de semana del 26 y 27 de septiembre.

## Comprobado

- [x] Compilo la interfaz con `npm run build`.
- [x] Supero las 15 pruebas del backend con `npm test`.
- [x] Supero `npm run format:check`.
- [x] Confirmo el repositorio público y la rama `main` mediante la API pública de GitHub.
- [x] Compruebo la conexión de Vercel a Atlas con `/api/health`.
- [x] Consulto 218 episodios y 11 temporadas en ES, EN y DE en producción.
- [x] Compruebo el detalle de «Piloto» (`283988`) y el listado de dos películas.
- [x] Compruebo respuestas de plataformas para ES, DE, GB y US con país y fecha.
- [x] Abro por HTTP nueve rutas públicas, incluidas `/expedientes/283988` y `/peliculas/846`.
- [x] Observo la portada renderizada en Chrome en escritorio.
- [x] Recupero la memoria sustituida por el texto de recursos y conservo el historial anterior.
- [x] Reviso el README y la memoria de mi proyecto 10 antes de actualizar esta documentación.

## Mi revisión manual completada

He documentado resultados y límites en [la galería de 16 capturas](screenshots/entrega-2026-09-25/README.md).

| Recorrido | Resultado observado |
| --- | --- |
| Buscar «Anasazi» y limpiar | Un resultado; al limpiar recupero los 218 episodios. También funciona en minúsculas. |
| Temporada y aleatorio | Temporada 2 devuelve 25 episodios. Combinada con Anasazi, el aleatorio abre /expedientes/285317. |
| Favoritos | Añado, recargo, consulto la selección, retiro y recargo de nuevo. El estado se conserva en ambos sentidos. |
| Progreso | Marco como visto, recargo y observo 1 / 218. Visto incluye el episodio y Pendientes lo excluye. Al desmarcar vuelve a 0 / 218. |
| Sinopsis | Está oculta inicialmente; la revelo y vuelvo a ocultarla. |
| Idioma y país | DE conserva España tras cambiar de idioma y recargar. EN conserva Alemania. Restablezco ES y España al finalizar. |
| Películas y errores | Abro /peliculas/846 desde su enlace y reviso la página de ruta inexistente. |
| Teclado | Compruebo el salto al contenido, foco visible, enlace al archivo y elección de temporada con flechas y Enter. |
| Responsive | Reviso las muestras documentadas a 390, 768 y 1440 píxeles. No observo contenido principal cortado en las capturas. |

No he auditado todas las combinaciones de ruta, idioma y tamaño ni utilizado dispositivos físicos. La revisión de teclado es un recorrido concreto. No he simulado fallos de red o almacenamiento en esta sesión.

## Evidencias y publicación

- [x] Guardo 16 capturas actuales de la web publicada, incluidas portada, archivo, detalle, favoritos y disponibilidad.
- [x] Identifico idioma, tamaño y fecha de cada captura.
- [x] Reviso los PNG exportados e incorporo una galería comentada y evidencias en la memoria.
- [x] Documento los servicios a través de la aplicación y las consultas HTTP, sin mostrar credenciales.
- [x] Reviso los enlaces locales de README, memoria, revisión y galería.
- [x] Corrijo el singular del contador en español, inglés y alemán; conservo el plural para cero y varios resultados. Las capturas son anteriores a este ajuste.
- [ ] Si añado evidencias de los paneles privados de Atlas, Cloudinary o Vercel, las preparo sin credenciales. Esta sesión no incluye nuevas capturas de esos paneles.
- [ ] Publico los cambios de documentación en GitHub y compruebo la versión final de Vercel.
- [ ] Entrego los enlaces de repositorio, web y memoria en el campus.

Las respuestas HTTP 200 de la SPA no demuestran por sí solas que todos los controles funcionen. Los resultados manuales anteriores proceden de interacciones reales con el navegador.
