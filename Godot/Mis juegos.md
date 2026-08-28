---
title: "Mis juegos — Jugables en el navegador"
tags:
  - godot
  - games
  - html5
---

Algunos de los juegos que he ido haciendo con [Godot Engine](Godot%20Engine%20-%20Desarrollo%20de%20videojuegos.md), exportados a HTML5 para poder jugarlos directamente en el navegador.

## Juegos disponibles

🎮 **[Ir a la página de juegos](/games/)**

> [!note] Nota técnica
> Los juegos usan WebAssembly y SharedArrayBuffer. Un Service Worker se encarga de inyectar los headers COOP/COEP necesarios ya que GitHub Pages no permite configurarlos directamente. La primera vez que entres puede ser necesario recargar la página.

## Cómo añadir un juego nuevo

1. En Godot, exportar el proyecto como **Web / HTML5**
2. Copiar los archivos exportados a `games/<nombre-del-juego>/`
3. Añadir una tarjeta en `games/index.html`
4. Commit y push — el CI despliega automáticamente

## Diagnóstico

Si un juego no carga, visita la [página de test](/games/demo/) para verificar que el Service Worker está activo y `SharedArrayBuffer` está disponible.
