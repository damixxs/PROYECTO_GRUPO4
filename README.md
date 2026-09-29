# BUGLE-STREAM | PROYECTO_GRUPO4

Proyecto desarrollado por el Grupo 4 para la materia **Manejo y Configuración de Software** de la Universidad Técnica de Ambato, Facultad de Ingeniería en Sistemas, Electrónica e Industrial.

## Descripción

BUGLE-STREAM es una plataforma web de entretenimiento digital inspirada conceptualmente en el universo de Spider-Man. El sitio cuenta con una pantalla de bienvenida (landing screen) con transición animada hacia un catálogo de películas, un buscador en tiempo real, tarjetas interactivas con reproductor de video integrado (Google Drive), una sección de contenido adicional ("Daily Bugle | Archivos Clasificados") y un diseño responsive con tema oscuro y acento neón rojo.

El proyecto resuelve el reto de aplicar el modelo de trabajo colaborativo **GitFlow** en un entorno real de desarrollo en equipo de 5 personas, mediante la creación de un sitio web funcional.

## Objetivo

Aplicar conocimientos sobre Git y plataformas de repositorio remoto mediante la simulación de un entorno real de desarrollo colaborativo, utilizando el modelo GitFlow.

## Tecnologías utilizadas

- HTML5
- CSS3 (variables personalizadas, animaciones)
- JavaScript (vanilla, sin frameworks)
- Bootstrap 5.3.3 (vía CDN)
- Integración embebida con Google Drive para reproducción de video

## Estructura de ramas (GitFlow)

- `main`: versión estable y desplegable del proyecto.
- `develop`: rama de integración de las funcionalidades en desarrollo.
- `feature/*`: una rama por funcionalidad, creada desde `develop`.
- `fix/*`: correcciones puntuales sobre `develop`.
- `release/*`: preparación de una nueva versión antes de pasar a `main`.
- `hotfix/*`: corrección urgente directamente sobre `main`.

## Estructura del proyecto
```text
PROYECTO_GRUPO04/
├── css/
│   └── styles.css          # Estilos personalizados (Hero, Navbar, catálogo)
├── js/
│   └── reproductor.js      # Carga diferida de reproductores Google Drive
├── img/                    # Banners e imágenes del catálogo
├── CONTRIBUTING.md         # Guía y reglas de colaboración
├── index.html              # Página principal del catálogo
└── README.md               # Documentación general del proyecto