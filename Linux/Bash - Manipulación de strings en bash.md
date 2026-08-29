---
title: "Bash - Manipulación de Strings y Variables"
description: "Técnicas avanzadas para manipular strings en Bash. Sustitución, extracción, mayúsculas, minúsculas y más."
tags:
  - linux
  - bash
  - scripting
  - automatizacion
aliases:
  - bash-strings
  - manipulacion-texto-bash
---

# 🐚 Bash - Manipulación de Strings

La manipulación de texto es fundamental en scripting de Bash. Esta guía cubre las técnicas esenciales para trabajar con variables y cadenas de texto.

## 🔧 Sintaxis Básica

Las variables se procesan encerrando el nombre entre `${ }`. Los modificadores se añaden con operadores específicos:

```bash
VARIABLE="valor"
${VARIABLE[operador]}
```

## 📝 Operadores de Transformación

### Mayúsculas y Minúsculas

| Operador | Descripción | Ejemplo | Resultado |
|----------|-------------|---------|-----------|
| `^` | Primera letra MAYÚSCULA | `${msg^}` | `hola Mundo` → `Hola Mundo` |
| `^^` | Todo a MAYÚSCULAS | `${msg^^}` | `hola Mundo` → `HOLA MUNDO` |
| `,` | Primera letra minúscula | `${msg,}` | `HOLA Mundo` → `hOLA Mundo` |
| `,,` | Todo a minúsculas | `${msg,,}` | `HOLA MUNDO` → `hola mundo` |

### Ejemplo Práctico

```bash
#!/bin/bash

MSG="hola Mundo"

echo "${MSG^^}"    # HOLA MUNDO
echo "${MSG,,}"    # hola mundo
echo "${MSG^}"     # Hola Mundo
```

## ✂️ Extracción y Subcadenas

```bash
TEXTO="Hello World"

# Extraer desde posición (0-indexed)
echo "${TEXTO:6}"      # "World"
echo "${TEXTO:0:5}"    # "Hello"

# Longitud del string
echo "${#TEXTO}"       # 11
```

## 🔍 Búsqueda y Reemplazo

```bash
ARCHIVO="documento.txt.bak"

# Eliminar extensión
echo "${ARCHIVO%.bak}"           # documento.txt
echo "${ARCHIVO%%.*}"            # documento

# Reemplazar primera coincidencia
echo "${ARCHIVO/txt/pdf}"        # documento.pdf.bak

# Reemplazar todas las coincidencias
echo "${ARCHIVO//./_}"           # documento_txt_bak
```

## 💡 Casos de Uso Reales

### 1. Normalizar nombres de archivos

```bash
nombre="Mi Archivo.TXT"
nombre_normalizado="${nombre,,}"  # mi archivo.txt
```

### 2. Validar entrada de usuario

```bash
read -p "¿Continuar? (s/n): " RESPUESTA
if [[ "${RESPUESTA,,}" == "s" ]]; then
    echo "Continuando..."
fi
```

### 3. Procesar logs

```bash
while read -r linea; do
    if [[ "${linea^^}" == *"ERROR"* ]]; then
        echo "⚠️ ERROR DETECTADO: $linea"
    fi
done < logfile.txt
```

## 🔗 Recursos Relacionados

- [GNU Bash Manual](https://www.gnu.org/software/bash/manual/)
- [Shell Parameter Expansion](https://wiki.bash-hackers.org/syntax/pe)

---

> [!tip] Consejo Pro
> Combina estos operadores con arrays y bucles para crear scripts poderosos de procesamiento de texto. ¡La práctica hace al maestro!

*¿Tienes algún truco de Bash que usar frecuentemente? Compártelo en los comentarios.*
