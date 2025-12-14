// script.js
const tf = require('@tensorflow/tfjs-node');

function generateRandomArray(length, min, max) {
  return Array.from(
    { length: length },
    () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
}

async function runModel2() {
  // Create a simple model.
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  // Prepare the model for training: Specify the loss and the optimizer.
  model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

  // Generate some synthetic data for training (y = 2x - 1).
  // const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
  // const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

  const xs = tf.tensor2d([...generateRandomArray(100, 1, 500)], [100, 1]);
  const ys = tf.tensor2d([...generateRandomArray(100, -100, 100)], [100, 1]);

  // Train the model using the data.
  await model.fit(xs, ys, { epochs: 250 });

  // Make a prediction.
  const predictionInput = tf.tensor2d([20], [1, 1]);
  const prediction = model.predict(predictionInput);

  // Display the prediction.
  // const outputDiv = document.getElementById('output');
  // outputDiv.innerText = `Prediction for 20: ${prediction.dataSync()[0].toFixed(2)}`;

  console.log(' = = = = = = = = = = = = = = = ');

  console.log('prediction: ', prediction.dataSync());

  console.log('Model trained and prediction made.');
}

export { runModel2 };
