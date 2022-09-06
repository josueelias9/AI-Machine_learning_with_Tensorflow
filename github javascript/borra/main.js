// console.log("hola como estas")
// tf.tensor([[1, 2], [3, 4]]).print();    

const INPUTS = [];
for(let n =1;n<=20;n++){
    INPUTS.push(n);
}

const OUTPUTS = [];
for(n=0;n<INPUTS.length;n++){
    OUTPUTS.push(INPUTS[n] * INPUTS[n])
}

const INPUTS_TENSOR = tf.tensor1d(INPUTS);
const OUTPUTS_TENSOR = tf.tensor1d(OUTPUTS);

console.log(INPUTS_TENSOR.print())
console.log(OUTPUTS_TENSOR.print())



const model = tf.sequential();
model.add(tf.layers.dense({units: 4, inputShape: [2]}));
model.add(tf.layers.dense({units: 2}));
model.add(tf.layers.dense({units: 2}));

model.summary();