# Guía de contribución — PROYECTO_GRUPO4

Este documento define las reglas de colaboración del equipo para mantener un flujo de trabajo ordenado usando GitFlow.

## Flujo de ramas

- Nunca se trabaja directamente sobre `main` ni sobre `develop`.
- Cada nueva funcionalidad se desarrolla en una rama `feature/nombre-descriptivo`, creada desde `develop` ya actualizada (`git pull origin develop` antes de crear la rama).
- Correcciones puntuales usan el prefijo `fix/nombre-descriptivo`.
- Ejemplo: `feature/navbar`, `fix/grid-typo`.

## Commits

Se usa el estándar de Conventional Commits: `tipo(scope): descripción`

- `feat`: nueva funcionalidad
- `fix`: corrección de un bug
- `docs`: documentación
- `style`: estilos o formato (CSS, espacios)
- `chore`: tareas de mantenimiento o configuración
- `refactor`: reestructuración de código sin cambiar funcionalidad

Cada commit debe representar un cambio lógico completo, en minúscula y modo imperativo.

## Pull Requests

- Todo cambio hacia `develop` se hace mediante un Pull Request, **nunca** con push directo.
- **Antes de crear el Pull Request, verificar siempre que la base (`base:`) sea `develop` y no `main`.** GitHub a veces preselecciona `main` por defecto, y esto puede integrar código incompleto a la rama principal.
- Cada integrante debe abrir al menos 2 Pull Requests durante el proyecto.
- Un PR debe ser revisado y aprobado por uno de los administradores del repositorio antes de fusionarse.
- El autor de un PR no puede aprobar su propio PR.
- Las revisiones deben incluir al menos un comentario o sugerencia, no solo la aprobación.
- Al fusionar, se usa **"Create a merge commit"** para conservar el historial de la rama.
- Después de fusionar, se elimina la rama (`Delete branch`) para mantener el repositorio limpio.

## Pull Requests de tipo revert

- Un Pull Request de tipo *Revert* debe revisarse con el mismo cuidado que cualquier otro, confirmando explícitamente qué cambios deshace antes de aprobarlo. Un revert puede anular una corrección ya aprobada sin que esto sea evidente en su título.

## Releases

- Cuando un conjunto de funcionalidades esté listo en `develop`, se crea una rama `release/*` para las últimas validaciones antes de pasar a `main`.
- Cada release se etiqueta con un tag de versión (ej. `v1.0.0`).

## Hotfixes

- Correcciones urgentes sobre `main` se realizan en una rama `hotfix/*`, creada desde `main`, y luego se integran de vuelta tanto a `main` como a `develop`.