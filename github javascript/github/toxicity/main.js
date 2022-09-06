

// The minimum prediction confidence.
const threshold = 0.9;

// Load the model. Users optionally pass in a threshold and an array of
// labels to include.

async function hola(){
    model = await toxicity.load(threshold);   
    const sentences = ['you are ugly and a cocksucker. I will kill you bitch'];

    predictions = await model.classify(sentences);
    
    for(let i = 0; i<predictions.length; i++){
        console.log(predictions[i].label +" "+predictions[i].results[0].match)
    }
 
}

hola();
