# - EDX clases oficiales
[`link del curso oficial`](https://learning.edx.org/course/course-v1:Google+WebML102+3T2021/home)

cómo entender las clases:
- chapter `<cn>`: donde `<cn>` es el numero del capitulo. Solo encontrarás exámenes aquí.
- lesson `<ln>`: donde `<ln>` es el número de lección dentro del chapter `<cn>`. Solo encontrarás videos y transcripciones de la clase aquí.

# - Despliegue
```bash
cd (repo)/codigo
```
dar doble click al archivo __index.html__.

# - Demos...
En todos los ejemplos los modelos se cargan desde una CDN.
## -- chapter 3 lesson 3 (pre-made model)
Ver que aqui se esta cargando el modelo desde el html...
```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>
<script src="script.js"></script>
```
## -- chapter 3 lesson 5 (raw model)
... y aqui no...
```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.11.0/dist/tf.min.js" type="text/javascript"></script>
<script src="script.js"></script>
```
# - Referencias oficiales
javascript
- crear package [link](https://docs.npmjs.com/creating-node-js-modules)
- agregar packetetes de tensorflow [link](https://github.com/tensorflow/tfjs-models/tree/master/pose-detection/src/movenet)
- curso oficial de EDX (capitulo 3) [link](https://learning.edx.org/course/course-v1:Google+WebML102+3T2021/home)
- API de las funciones de tensorflow [link](https://js.tensorflow.org/api/latest/?hl=es-419)

python
- tensores [link](https://www.tensorflow.org/guide/tensor)
