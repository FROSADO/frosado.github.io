---
title: "Servidor de Minecraft Bedrock en Raspberry Pi con Docker"
description: "Tutorial para crear un servidor de Minecraft Bedrock en Raspberry Pi usando Docker. Juega con amigos en tu propia red."
tags:
  - raspberrypi
  - minecraft
  - linux
  - docker
  - gaming
  - servidor-casero
aliases:
  - minecraft-bedrock-rpi
  - servidor-minecraft-docker
---

# 🎮 Servidor de Minecraft Bedrock en Raspberry Pi

Después de [haber instalado Docker en Raspberry Pi](Instalar%20docker%20en%20raspberryPi.md) y comprobar que todo funciona, vamos a configurar la Raspberry Pi para que sirva de servidor de Minecraft.

## 📋 Requisitos Previos

- ✅ Raspberry Pi con Docker instalado
- ✅ Conexión a internet estable
- ✅ Espacio en disco (mínimo 2GB recomendados)

## 🔗 Recursos Oficiales

Conseguí el enlace al proyecto de **George Bourne (@itzg)** específico de "dockerizar" el servidor de Minecraft:

| Versión | Repositorio |
|---------|-------------|
| **Java Edition** | https://github.com/itzg/docker-minecraft-server |
| **Bedrock Edition** | https://github.com/itzg/docker-minecraft-bedrock-server |

## 🚀 Instalación Rápida

### 1. Crear Directorio de Datos

```bash
mkdir -p ~/minecraft-bedrock
cd ~/minecraft-bedrock
```

### 2. Ejecutar el Contenedor

```bash
docker run -d \
  --name minecraft-bedrock \
  -p 19132:19132/udp \
  -v $(pwd)/data:/data \
  -e EULA=TRUE \
  itzg/minecraft-bedrock-server
```

### 3. Verificar que Funciona

```bash
docker logs -f minecraft-bedrock
```

Espera hasta ver el mensaje "Server started".

## ⚙️ Configuración Avanzada

### Variables de Entorno Útiles

```bash
docker run -d \
  --name minecraft-bedrock \
  -p 19132:19132/udp \
  -v $(pwd)/data:/data \
  -e EULA=TRUE \
  -e DIFFICULTY=normal \
  -e GAMEMODE=survival \
  -e MAX_PLAYERS=10 \
  -e LEVEL_NAME=MundoRaspberry \
  itzg/minecraft-bedrock-server
```

| Variable | Descripción | Valores Comunes |
|----------|-------------|-----------------|
| `DIFFICULTY` | Dificultad del juego | `peaceful`, `easy`, `normal`, `hard` |
| `GAMEMODE` | Modo de juego | `survival`, `creative`, `adventure` |
| `MAX_PLAYERS` | Jugadores máximos | Número (default: 10) |
| `LEVEL_NAME` | Nombre del mundo | Texto personalizado |

## 🔌 Conectarse al Servidor

### Desde la Misma Red

1. Abre Minecraft Bedrock en tu dispositivo
2. Ve a **Jugar** → **Servidores**
3. Desplázate hasta el final y haz clic en **Añadir Servidor**
4. Introduce:
   - **Nombre**: Mi Servidor Raspberry
   - **Dirección**: IP de tu Raspberry Pi
   - **Puerto**: 19132

### Encontrar la IP de tu Raspberry

```bash
hostname -I
```

## 🛠️ Gestión del Servidor

### Comandos Útiles

```bash
# Ver estado
docker ps | grep minecraft-bedrock

# Detener servidor
docker stop minecraft-bedrock

# Iniciar servidor
docker start minecraft-bedrock

# Reiniciar
docker restart minecraft-bedrock

# Ver logs en tiempo real
docker logs -f minecraft-bedrock

# Eliminar (cuidado: borra datos si no montaste volumen)
docker rm -f minecraft-bedrock
```

### Hacer Backup del Mundo

```bash
# Detener servidor
docker stop minecraft-bedrock

# Copiar datos
cp -r ~/minecraft-bedrock/data/ ~/backup-minecraft-$(date +%F)

# Reiniciar
docker start minecraft-bedrock
```

## ⚡ Optimización para Raspberry Pi

> [!tip] Consejos de Rendimiento
> - Usa una **Raspberry Pi 4** o superior para mejor experiencia
> - Limita `MAX_PLAYERS` a 5-10 jugadores
> - Considera usar SSD en lugar de SD card para mejor I/O
> - Reduce `view-distance` en configuración avanzada

## 🔗 Recursos Relacionados

- [[Instalar docker en raspberryPi]] - Guía de instalación de Docker
- [Documentación oficial del contenedor](https://github.com/itzg/docker-minecraft-bedrock-server)
- [Minecraft Bedrock Dedicated Server](https://www.minecraft.net/en-us/download/server/bedrock/)

---

> [!note] ¿Problemas de conexión?
> Asegúrate de que el puerto UDP 19132 está abierto en tu firewall y router si quieres acceso desde fuera de casa.

*¿Tienes un servidor funcionando? ¡Comparte tu experiencia!*
