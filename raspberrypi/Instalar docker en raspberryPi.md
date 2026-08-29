---
title: "Instalar Docker en Raspberry Pi - Guía Completa"
description: "Tutorial paso a paso para instalar Docker en Raspberry Pi. Configuración, mejores prácticas y primeros contenedores."
tags:
  - raspberrypi
  - docker
  - linux
  - contenedores
  - tutorial
aliases:
  - docker-raspberry
  - instalar-docker-rpi
---

# 🐳 Instalar Docker en Raspberry Pi

Vamos a proceder a instalar Docker en Raspberry Pi. El procedimiento es sencillo y nos permitirá ejecutar contenedores en nuestra placa.

## ⚠️ Pre-requisitos

- Raspberry Pi (cualquier modelo con Raspbian/Raspberry Pi OS)
- Acceso a terminal (SSH o directamente)
- Conexión a internet

## 📦 Paso 1: Actualizar el Sistema

Como siempre, se recomienda actualizar el sistema antes de continuar:

```bash
sudo apt-get update && sudo apt-get upgrade -y
```

> [!tip] Consejo
> Aprovecha para reiniciar la Raspberry después de actualizar si hay actualizaciones del kernel.

## 🔧 Paso 2: Instalación de Docker

### Método Recomendado - Script Oficial

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### Método Alternativo - Repositorio Oficial

```bash
# Añadir la clave GPG oficial
curl -fsSL https://download.docker.com/linux/raspbian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Añadir el repositorio
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/raspbian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```

## ✅ Paso 3: Verificar Instalación

```bash
docker --version
docker run hello-world
```

Si ves el mensaje de bienvenida, ¡Docker está funcionando correctamente!

## 👤 Paso 4: Configurar Usuario (Opcional pero Recomendado)

Para usar Docker sin `sudo`:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

> [!warning] Importante
> Después de este comando, cierra sesión y vuelve a entrar para que los cambios surtan efecto.

## 🚀 Primeros Pasos con Docker

### Verificar que Docker está corriendo

```bash
sudo systemctl status docker
```

### Habilitar inicio automático

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

## 📋 Comandos Básicos

| Comando | Descripción |
|---------|-------------|
| `docker ps` | Ver contenedores activos |
| `docker images` | Ver imágenes descargadas |
| `docker run <imagen>` | Ejecutar un contenedor |
| `docker stop <container>` | Detener un contenedor |
| `docker rm <container>` | Eliminar un contenedor |

## 🔗 Siguientes Pasos

- [[Servidor de Minecraft bedrock en Raspberrypi]] - Crea un servidor de juegos
- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/) - Busca imágenes oficiales

---

> [!note] Rendimiento en Raspberry Pi
> Recuerda que estás ejecutando contenedores en hardware limitado. Evita ejecutar demasiados servicios simultáneamente en modelos antiguos.

*¿Tienes dudas sobre algún paso? Revisa la documentación oficial o los foros de la comunidad.*
