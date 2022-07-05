const MODEL_PATH = 'https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4';
const EXAMPLE_IMG = document.getElementById('exampleImg');
let movenet = undefined;

async function loadAndRunModel() {

  // carga del modelo
  movenet = await tf.loadGraphModel(MODEL_PATH, { fromTFHub: true });

  // carga de la imagen
  let imageTensor = tf.browser.fromPixels(EXAMPLE_IMG);

  // formato de la imagen
  let cropStartPoint = [15, 170, 0];
  let cropSize = [345, 345, 3];
  let croppedTensor = tf.slice(imageTensor, cropStartPoint, cropSize);
  let resizedTensor = tf.image.resizeBilinear(croppedTensor, [192, 192], true).toInt();
  console.log(await imageTensor.shape);
  console.log(await croppedTensor.shape);
  console.log(await resizedTensor.shape);

  // haciendo prediccion
  let tensorOutput = movenet.predict(tf.expandDims(resizedTensor));
  let arrayOutput = await tensorOutput.array();
  
  // ploteamos los puntos entregados
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  for (let i = 0; i < arrayOutput[0][0].length; i++) {
    a0 = arrayOutput[0][0][i][0] * 400;
    a1 = arrayOutput[0][0][i][1] * 400;
    ctx.beginPath();
    ctx.arc(a1, a0, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

loadAndRunModel();