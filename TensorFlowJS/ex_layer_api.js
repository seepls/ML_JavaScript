// build recurrent NN : to sum of 2 numbers
//numbers fed character by character : and the neural network has to maintain and internal state with encoder  LSTM cell then passed to decoder LSTM
// sequence to sequence model  : stack of layers 
 
 import * as tf from '@tensorflow/tfjs';
 
 const model  =tf.sequential ({
 
 layers :[
  //encoders
 tf.layers.lstm({units :hiddenSize ,inputShape :[maxLen , vocabSize]}),
 tf.layers.repeatVector({n:digits +1 }),
 //decoders 
  tf.layers.lstm({units: hiddenSize , returnSequences: true }),
  tf.layers.timeDistributed(tf.layers.dense({units: vocabSize}),
  tf.layers.activation({activation: 'softmax'})
                            
 ]});

  // that is our model : now compile it with a loss 
  
  model.compile ({
  loss : ' categoricalCrossentropy',
  optimizer : 'adam',
  metrics: ['accuracy']
 });

const history  = await model.fit({x: data.xs , y: data.ys , epochs: 1 , batchSize});


// model.fit : asynchronous call : they await keyword helps :  model.fit : can take 30-40 sec . call back with an history object and till tell GPU can work 

