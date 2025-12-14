// Simple TensorFlow.js model for Node.js
// This example creates a model that learns y = 2x + 1

const tf = require('@tensorflow/tfjs-node');

class SimpleModel {
  private model: any;
  private isModelTrained: boolean;

  constructor() {
    this.model = null;
    this.isModelTrained = false;
  }

  // Create a simple sequential model
  createModel() {
    this.model = tf.sequential({
      layers: [
        tf.layers.dense({
          inputShape: [1],
          units: 1,
          activation: 'linear',
        }),
      ],
    });

    // Compile the model
    // @ts-ignore
    this.model.compile({
      optimizer: 'sgd',
      loss: 'meanSquaredError',
      metrics: ['mae'],
    });

    console.log('✅ Model created successfully');
  }

  // Generate training data for y = 2x + 1

  generateTrainingData(xs, ys) {
    // const xs = [];
    // const ys = [];

    // Generate 100 training examples
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 20 - 10; // Random values between -10 and 10
      const y = 2 * x + 1; // The relationship we want the model to learn
      xs.push(x);
      ys.push(y);
    }

    return {
      xs: tf.tensor2d(xs, [xs.length, 1]),
      ys: tf.tensor2d(ys, [ys.length, 1]),
    };
  }

  // Train the model
  async trainModel(xs, ys) {
    if (!this.model) {
      this.createModel();
    }

    console.log('🎯 Starting training...');

    const trainingData = this.generateTrainingData(xs, ys);
    // const trainingData = {xs, ys};

    // Train the model
    // @ts-ignore
    const history = await this.model.fit(trainingData.xs, trainingData.ys, {
      epochs: 100,
      validationSplit: 0.2,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          if (epoch % 20 === 0) {
            console.log(
              `Epoch ${epoch}: loss = ${logs.loss.toFixed(4)}, val_loss = ${logs.val_loss.toFixed(4)}`,
            );
          }
        },
      },
    });

    // Clean up tensors
    trainingData.xs.dispose();
    trainingData.ys.dispose();

    this.isModelTrained = true;
    console.log('✅ Training completed!');

    return history;
  }

  // Make a single prediction
  predict(inputValue) {
    if (!this.isModelTrained) {
      throw new Error('Model must be trained before making predictions');
    }

    const inputTensor = tf.tensor2d([[inputValue]]);
    // @ts-ignore
    const prediction = this.model.predict(inputTensor);
    const result = prediction.dataSync()[0];

    // Clean up tensors
    inputTensor.dispose();
    prediction.dispose();

    return result;
  }

  // Make multiple predictions
  predictBatch(inputValues) {
    if (!this.isModelTrained) {
      throw new Error('Model must be trained before making predictions');
    }

    const inputTensor = tf.tensor2d(inputValues.map((x) => [x]));
    // @ts-ignore
    const predictions = this.model.predict(inputTensor);
    const results = Array.from(predictions.dataSync());

    // Clean up tensors
    inputTensor.dispose();
    predictions.dispose();

    return results;
  }

  // Evaluate model performance
  async evaluateModel(xs, ys) {
    if (!this.isModelTrained) {
      throw new Error('Model must be trained before evaluation');
    }

    // Generate test data
    const testData = this.generateTrainingData(xs, ys);
    // const testData = {xs, ys};
    // @ts-ignore
    const evaluation = await this.model.evaluate(testData.xs, testData.ys);

    const loss = evaluation[0].dataSync()[0];
    const mae = evaluation[1].dataSync()[0];

    // Clean up tensors
    testData.xs.dispose();
    testData.ys.dispose();
    evaluation[0].dispose();
    evaluation[1].dispose();

    return { loss, mae };
  }

  // Save the model
  async saveModel(path = 'file://./my-model') {
    if (!this.model) {
      throw new Error('No model to save');
    }
    await this.model.save(path);
    console.log(`✅ Model saved to ${path}`);
  }

  // Load a saved model
  async loadModel(path = 'file://./my-model/model.json') {
    this.model = await tf.loadLayersModel(path);
    this.isModelTrained = true;
    console.log(`✅ Model loaded from ${path}`);
  }
}

// Example usage
async function main(xs, ys) {
  console.log('🚀 Starting TensorFlow.js Node.js Example\n');

  const simpleModel = new SimpleModel();

  console.log('xs', xs);
  console.log('ys', ys);

  try {
    // Train the model
    await simpleModel.trainModel(xs, ys);

    console.log('\n📊 Testing predictions:');

    // Make single predictions
    const testValues = [1, 2, 5, 10, -3];
    for (const value of testValues) {
      const prediction = simpleModel.predict(value);
      const expected = 2 * value + 1;
      console.log(
        `Input: ${value}, Predicted: ${prediction.toFixed(3)}, Expected: ${expected}, Error: ${Math.abs(prediction - expected).toFixed(3)}`,
      );
    }

    // Make batch predictions
    console.log('\n🔮 Batch predictions:');
    const batchInputs = [0, 1, 2, 3, 4, 5];
    const batchPredictions = simpleModel.predictBatch(batchInputs);

    batchInputs.forEach((input, index) => {
      const prediction = batchPredictions[index];
      const expected = 2 * input + 1;
      // @ts-ignore
      console.log(
        `Input: ${input}, Predicted: ${prediction.toFixed(3)}, Expected: ${expected}`,
      );
    });

    // Evaluate model
    console.log('\n📈 Model evaluation:');
    const evaluation = await simpleModel.evaluateModel(xs, ys);
    console.log(
      `Loss: ${evaluation.loss.toFixed(6)}, MAE: ${evaluation.mae.toFixed(6)}`,
    );

    // Save the model (optional)
    // await simpleModel.saveModel();
  } catch (error) {
    console.error('❌ Error:', error.message);
  }

  // simpleModel.saveModel('./model.json');

  console.log('\n✅ Example completed!');
}

// Run the example if this file is executed directly
// if (require.main === module) {
//     main();
// }

export { main };

// module.exports = SimpleModel;
