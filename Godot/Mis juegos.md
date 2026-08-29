---
title: "Mis Juegos — Jugables en el Navegador"
description: "Juegos desarrollados con Godot Engine y exportados a HTML5. Juega directamente en tu navegador sin instalar nada."
tags:
  - godot
  - games
  - html5
  - webgl
  - proyectos
aliases:
  - juegos-html5
  - godot-games
  - browser-games
---

# 🎮 Mis Juegos - HTML5 Exportados

Algunos de los juegos que he ido haciendo con [Godot Engine](Godot%20Engine%20-%20Desarrollo%20de%20videojuegos.md), exportados a HTML5 para poder jugarlos directamente en el navegador.

## 🕹️ Juegos Disponibles

### **[Ir a la Página de Juegos](/games/)**

Accede a todos mis juegos jugables directamente desde tu navegador.

> [!note] Nota Técnica
> Los juegos usan **WebAssembly** y **SharedArrayBuffer**. Un Service Worker se encarga de inyectar los headers COOP/COEP necesarios ya que GitHub Pages no permite configurarlos directamente. La primera vez que entres puede ser necesario recargar la página.

## 📋 Lista de Juegos

| Juego | Género | Estado |
|-------|--------|--------|
| *Próximamente* | - | En desarrollo |

> [!tip] ¿Quieres ver el progreso?
> Sigo mi aprendizaje en el DevLog [10 Minutos al Día haciendo videojuegos](10%20Minutos%20al%20D%C3%ADa%20haciendo%20videojuegos.md). ¡Cada día aprendo algo nuevo!

## 🛠️ Cómo Añadir un Juego Nuevo

1. **En Godot**, exportar el proyecto como **Web / HTML5**
2. Copiar los archivos generados a la carpeta `/games/`
3. Actualizar el Service Worker si es necesario
4. Añadir el juego a esta lista

## 🔗 Recursos de Desarrollo

- [Godot HTML5 Export Documentation](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html)
- [WebAssembly Info](https://webassembly.org/)
- [COOP/COEP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)

---

*¿Tienes sugerencias para nuevos juegos? ¡Compártelas!*
