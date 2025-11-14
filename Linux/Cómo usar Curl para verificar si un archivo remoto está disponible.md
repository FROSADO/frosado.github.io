
Cuando se escriben scripts en bash, especialmente cuando se hacen copias de ficheros a un servicio web, ocurre que si se interrumpe una ejecución, habria que verificar si el fichero que se ha copiado ha sido transferido parcialmente o completamente. 
Este proceso de transferencia de ficheros por lo tanto nos da tres situaciones posibles: 
- El fichero no llegó a crearse.
- El fichero se transfirió completamente
- El fichero no se transfirió completamente. Contenido corrupto.

# El fichero no llegó a crearse

Este caso es el más simple, una llamada al destino, si el fichero que se espera no existe, el servicio web remoto devolverá un error [404](https://es.wikipedia.org/wiki/HTTP_404). Una simple llamada para verificar si el fichero existe nos devuelve este codigo de error y por lo tanto tenemos la confirmacion de que no llegó a crearse.


