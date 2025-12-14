// script.js
const tf = require('@tensorflow/tfjs-node');

async function runModel3() {
  const x = [-1, 0, 1, 2, 3, 4];
  const y = [-3, -1, 1, 3, 5, 7];

  const myFirstTensor = tf.scalar(42);
  console.log('- - - - - - - - myFirstTensor - - - - - - - -');
  myFirstTensor.print();
  console.log('- - - - - - - - ************* - - - - - - - -');

  const xs = tf.tensor2d([...x], [x.length, 1]);
  const ys = tf.tensor2d([...y], [y.length, 1]);

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

  await model.fit(xs, ys, { epochs: 250 }); // Train the model

  const predictions = model.predict(xs);
  predictions.print();

  const loss = tf.losses.meanSquaredError(ys, predictions);
  loss.print();

  const test = model.predict(tf.tensor2d([[5]]));
  console.log('f(5) =', await test.data());

  const _predictions = await predictions.array();
  const _loss = await loss.data();
  const _test = await test.data();

  predictions.dispose();
  test.dispose();
  xs.dispose();
  ys.dispose();

  return {
    predictions: _predictions.flat().map((prediction) => Number(prediction)),
    loss: _loss,
    test: _test,
  };
}

export { runModel3 };
