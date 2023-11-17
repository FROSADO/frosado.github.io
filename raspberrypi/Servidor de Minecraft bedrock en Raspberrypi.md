---
tags:
  - raspberrypi
  - minecraft
  - linux
  - docker
---

Después de  [haber Instalado docker en raspberryPi](Instalar%20docker%20en%20raspberryPi.md) y comprobar que todo funciona, vamos a configurar la raspberrypi para que sirva de servidor de Minecraft.

Conseguí el enlace al proyecto de [George Bourne](https://github.com/itzg) especifico de "dockerizar" el servidor de Minecraft : 

- Para la version de java : https://github.com/itzg/docker-minecraft-server
- Version bedrock : https://github.com/itzg/docker-minecraft-bedrock-server

No voy a explicar como configurar el servidor, puesto que para mi uso, voy a dejarlo todo por defecto. 

Para arrancar el servidor tan solo es necesario ejecutar el siguiente comando docker: 
```console

$ docker run -d -e EULA=TRUE -p 19132:19132/udp -v mc-bedrock-data:/data itzg/minecraft-bedrock-server

```

Cada argumento : 
- `run` lanza el contenedor usando la imagen indicada
- `-d` indica que es un "detached", es decir, que se ejecute de fondo. No muestra nada por pantalla. 
- `e` se usa para enviar "variables de entorno" al contenedor, en este caso la variable "EULA" se usa para aceptar las condiciones de licencia.
- `p` indica que abra el puerto del contenedor y hacerlo accesible. El puerto por defecto es el 19132. 
- `v` o `volume` le dice que use un volumen externo (lo crea si no existe) para la carpeta `/data`. Esto permite que cuando se reinicia el contenedor no se pierdan los datos. A parte es importante hacer copia de seguridad de este volumen, lo vemos más adelante.
- `itzg/minecraft-bedrock-server` es el nombre de la imagen. 

>[!note]
> Ahora mismo si apagas tu raspberry y vuelves a encenderla, el servidor de Minecraft no se inicia automáticamente.  Para que se inicie con la raspberry debes de configurarlo como servicio.
> Visita > [¿Cómo configurar un servicio funcionando en un contenedor Docker?](../Linux/Cómo configurar un servicio funcionando en un contenedor Docker) para saber que hacer a continuación.


Poco a poco iré configurando las copias de seguridad y otros aspectos del servidor






