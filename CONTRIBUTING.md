#Guia de contribucion - PROYECTO_GRUPO4
Este documento define las reglas de colaboracion del equipo para mantener un flujo de trabajo ordenado usando GitFlow

## Flujo de ramas 
- Nunca se trabaja directamente sobre `main` ni sobre `develop`
- Cada nueva funcionalidad se desarrolla en una rama `feature/...`, creada desde `develop`.
- Ejemplo: `feature/navbar`, `feature/landing-screen`.

## Commits
Se usa el estandar de Convetional Commits: `tipo(scope): description`

- feat: nueva funcionalidad
- fix: correccion de un bug
- docs: documentacion
- style: estilos o formato (CSS, espacios)
- chore: tareas de mantenimiento o configuracion
- refactor: reestructuracion de codigo sin cambiar funcionalidad
- test: agregar o corregir pruebas 
- build: cambios en dependencias o sistema de build 

Cada commit debe representar un cambio logico completo, en minuscula y modo imperativo

## Pull Request 

- Todo cambio hacia `develop` se hace mediante un Pull Request, nuncacon push directo
- Cada integrante debe abrir al menos 2 Pull Request durante el proyecto
- Un PR debe ser revisado y aprobado por uno de los administradores del repositorio antes de fusionarse
- El autor de un PR no puede aprobar su propio PR
- Las revisiones deben incluir al menos un comentario o sugerencia, no solo la aprobacion.
- Al fusionar, se usa "Create a merge commit" para conservar el historial de la rama 

## Releases

- Cuando un conjunto de features este listo en `develop`, se crea una rama `release/*` para las ultimas validaciones antes de pasar a `main`
- Cada release importante se etiqueta con un tag de version (ej: v1.0.0)

## Hotfixes

-Correcciones urgentes sobre `main` se realizan en una rama `hotfix`, y luego se integran de vuelta tanto a `main` como a `develop`

