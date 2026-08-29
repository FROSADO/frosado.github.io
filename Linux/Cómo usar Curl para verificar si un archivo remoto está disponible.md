---
title: "Cómo usar Curl para Verificar Archivos Remotos"
description: "Técnica para verificar integridad de archivos transferidos usando Curl en scripts Bash. Ideal para automatizar backups y transferencias."
tags:
  - linux
  - bash
  - curl
  - scripting
  - automatizacion
aliases:
  - curl-verificar-archivo
  - verificar-transferencia-remota
---

# 🔍 Verificar Archivos Remotos con Curl

Cuando automatizas transferencias de archivos en scripts Bash, es crucial verificar que los ficheros se copiaron completamente. Este artículo muestra cómo usar `curl` para validar integridad.

## 🎯 El Problema

Al transferir archivos a un servicio web, pueden ocurrir tres situaciones:

1. ❌ **El fichero no llegó a crearse** (error de conexión)
2. ✅ **El fichero se transfirió completamente** (éxito)
3. ⚠️ **El fichero se transfirió parcialmente** (contenido corrupto)

## 💡 La Solución con Curl

### Verificar Existencia (HTTP HEAD)

```bash
#!/bin/bash

URL="https://ejemplo.com/archivo.zip"

# Verificar si el archivo existe (sin descargarlo)
if curl --output /dev/null --silent --head --fail "$URL"; then
    echo "✅ El archivo está disponible"
else
    echo "❌ El archivo no existe o hay error de conexión"
fi
```

### Verificar Tamaño del Archivo

```bash
#!/bin/bash

URL="https://ejemplo.com/archivo.zip"
TAMANO_ESPERADO=1048576  # 1MB en bytes

# Obtener tamaño remoto
TAMANO_REMOTO=$(curl -sI "$URL" | grep -i content-length | awk '{print $2}' | tr -d '\r')

if [[ "$TAMANO_REMOTO" -ge "$TAMANO_ESPERADO" ]]; then
    echo "✅ Tamaño correcto: $TAMANO_REMOTO bytes"
else
    echo "⚠️ Tamaño incorrecto. Esperado: $TAMANO_ESPERADO, Obtenido: $TAMANO_REMOTO"
fi
```

### Script Completo de Validación

```bash
#!/bin/bash

verificar_archivo_remoto() {
    local url="$1"
    local tamano_minimo="${2:-0}"
    
    # Verificar existencia
    if ! curl --output /dev/null --silent --head --fail "$url"; then
        echo "❌ ERROR: El archivo no está disponible en $url"
        return 1
    fi
    
    # Verificar tamaño
    local tamano=$(curl -sI "$url" | grep -i content-length | awk '{print $2}' | tr -d '\r')
    
    if [[ -z "$tamano" ]]; then
        echo "⚠️ WARNING: No se pudo determinar el tamaño del archivo"
        return 0
    fi
    
    if [[ "$tamano" -lt "$tamano_minimo" ]]; then
        echo "❌ ERROR: El archivo es demasiado pequeño ($tamano bytes)"
        return 1
    fi
    
    echo "✅ OK: Archivo válido ($tamano bytes)"
    return 0
}

# Uso
verificar_archivo_remoto "https://ejemplo.com/backup.tar.gz" 1000000
```

## 🔧 Opciones Útiles de Curl

| Opción | Descripción |
|--------|-------------|
| `-I` o `--head` | Solo descarga headers HTTP |
| `-s` o `--silent` | Modo silencioso (sin progreso) |
| `-f` o `--fail` | Falla en errores HTTP (4xx, 5xx) |
| `--output /dev/null` | Descarta el cuerpo de la respuesta |

## 📋 Casos de Uso Reales

### 1. Verificar Backup antes de Restaurar

```bash
BACKUP_URL="https://backups.miempresa.com/db-2024.sql.gz"

if verificar_archivo_remoto "$BACKUP_URL" 10000000; then
    curl -o backup.sql.gz "$BACKUP_URL"
    # Proceder con restauración...
else
    echo "🚫 Abortando: backup no válido"
    exit 1
fi
```

### 2. Monitoreo de Disponibilidad

```bash
#!/bin/bash
# Verificar cada 5 minutos

while true; do
    if ! curl --output /dev/null --silent --fail "https://misitio.com/data.json"; then
        echo "📧 $(date): ¡Alerta! Servicio no disponible" | mail -s "Alerta de Servicio" admin@empresa.com
    fi
    sleep 300
done
```

## 🔗 Recursos Relacionados

- [Documentación oficial de Curl](https://curl.se/docs/)
- [[Bash - Manipulación de Strings]] - Para procesar output de comandos

---

> [!tip] Consejo Pro
> Combina esta técnica con checksums (MD5/SHA256) para validación aún más robusta de integridad de archivos.

*¿Tienes otros casos de uso para curl? ¡Compártelos!*
