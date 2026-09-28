# 🛡️ Guía de Seguridad y Despliegue — Spidey-Flix

Este documento detalla las configuraciones de seguridad implementadas en el repositorio y los pasos necesarios para desplegar la aplicación en un entorno de producción.

---

## 🔒 Reglas de Protección de Ramas (GitHub Rulesets)

Para preservar la integridad del código fuente, se configuraron las siguientes reglas de protección para la rama `main` y `develop`:

1. **Pull Requests Obligatorios:** No se permiten commits directos sobre `main` ni `develop`. Todo cambio debe ingresar mediante un Pull Request.
2. **Aprobaciones Mínimas:** Se requieren mínimo **2 aprobaciones (approvers)** de integrantes del equipo para autorizar el merge de cualquier PR.
3. **Restricción de Push Directo:** Bloqueo de subidas directas para evitar sobrescrituras accidentalmente.

---

## 🚀 Pasos para el Despliegue Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/damixxs/PROYECTO_GRUPO4.git](https://github.com/damixxs/PROYECTO_GRUPO4.git)
   cd PROYECTO_GRUPO4