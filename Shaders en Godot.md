<iframe width="560" height="315" src="https://www.youtube.com/embed/nyFzPaWAzeQ?si=yAzSy2mDjgKn1Hb1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

La referencia del lenguaje
https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/shading_language.html

Partimos del hecho de que todo en godot son "mesh". Es decir, triangulos. 
En graficos pixel (rasterizado) lo que hace es tomar fragmentos de los pixeles. En lugar de trabajar con puntos, trabajamos con los fragmentos de los pixeles. 

VisualShaders es para usar la version visual de los shaders. 

![](assets/Pasted%20image%2020231108221809.png)

Los shaders ejecutan todos los puntos (casi) al mismo tiempo. 

la imagen de referencia en mi proyecto 148x165
$$ 148 \times 165 $$
$$ \frac{148}{2} = 74$$
$$ \frac{165}{2} = 82.5 \to 83 $$

