Vamos a proceder a installar docker en raspberryPI. El procedimiento en modo vagos es tan simple como. 

Como siempre, se recomienda actualizar el sistema antes de continuar

```console
$ sudo apt-get update && sudo apt-get uprade -y
```

Después se usamos el script de la pagina oficial de docker.
```console
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
...
$ sudo rm get-docker.sh

```

Una vez instalado, podemos pasar a arrancar el servicio y ver si funciona.

```console
$ systemctl start docker
$ sudo docker ps 
$ sudo docker run hello-world

```

Para que docker arranque cada vez que se inicie la raspberry podemos poner : 
```console
$ sudo systemctl enable docker
```

Y ya lo tenemos.