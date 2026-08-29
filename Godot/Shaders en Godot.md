---
title: "Shaders en Godot - Gráficos Avanzados"
description: "Notas y tutoriales sobre shaders en Godot Engine. Aprende el lenguaje de shaders, VisualShaders y efectos visuales avanzados."
tags:
  - godot
  - shaders
  - graficos
  - youtube
  - visualshaders
aliases:
  - godot-shaders
  - shader-language-godot
---

# 🎨 Shaders en Godot Engine

Los shaders son programas que se ejecutan en la GPU para controlar cómo se renderizan los píxeles y vértices. Esta página documenta mis notas sobre el sistema de shaders de Godot.

## 📺 Tutorial de Referencia

Este contenido está basado en el siguiente tutorial de YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/nyFzPaWAzeQ?si=yAzSy2mDjgKn1Hb1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 🔧 Conceptos Fundamentales

### ¿Qué es un Shader?

En Godot, todo son **"mesh"** (mallas) compuestas de triángulos. Los shaders trabajan a nivel de:

- **Vertex Shader**: Procesa cada vértice del modelo
- **Fragment Shader**: Procesa cada fragmento (píxel potencial)

### El Lenguaje de Shaders de Godot

Godot usa su propio lenguaje de shaders, similar a GLSL pero simplificado.

**Documentación oficial**: [Shader Reference](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/shading_language.html)

## 🎯 Programación Visual de Shaders

No siempre es necesario escribir código. Godot incluye un editor visual llamado **VisualShaders**:

![VisualShaders Editor](../assets/Pasted%20image%2020231108221809.png)

*Editor visual de shaders de Godot*

### Ventajas de VisualShaders

- ✅ Ideal para principiantes
- ✅ Prototipado rápido
- ✅ No requiere memorizar sintaxis
- ✅ Resultado visual inmediato

### Cuándo Usar Código vs Visual

| Enfoque | Mejor Para |
|---------|------------|
| **VisualShaders** | Aprendizaje, prototipos, efectos simples |
| **Código** | Efectos complejos, optimización, reutilización |

## 💡 Ejemplos Prácticos

### Shader Básico de Color

```glsl
shader_type canvas_item;

void fragment() {
    COLOR = vec4(1.0, 0.0, 0.0, 1.0); // Rojo sólido
}
```

### Shader con Textura

```glsl
shader_type canvas_item;

void fragment() {
    COLOR = texture(TEXTURE, UV);
}
```

## 📚 Recursos Adicionales

- [Godot Shader Documentation](https://docs.godotengine.org/en/stable/tutorials/shaders/index.html)
- [The Book of Shaders](https://thebookofshaders.com/) - Conceptos generales de shaders
- [GDQuest Shaders](https://www.gdquest.com/tutorial/godot-3/shaders/)

## 🔗 Relacionado

- [[Godot Engine - Desarrollo de Videojuegos]] - Índice principal de Godot
- [[10 Minutos al Día haciendo videojuegos]] - Mi DevLog donde aplico estos conceptos

---

> [!tip] Consejo de Aprendizaje
> Empieza con VisualShaders para entender los conceptos, luego pasa a código cuando necesites más control. ¡La práctica constante es clave!

*¿Tienes algún shader interesante que hayas creado? Compártelo en los comentarios.*
