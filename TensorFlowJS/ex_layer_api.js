// build recurrent NN : to sum of 2 numbers
//numbers fed character by character : and the neural network has to maintain and internal state with encoder  LSTM cell then passed to decoder LSTM
// sequence to sequence model  : stack of layers 
 
 import * as tf from '@tensorflow/tfjs';
 
 const model  =tf.sequential ({
 
 layers :[
 tf.layers.lstm({units :hiddenSize ,inputShape :[maxLen , vocabSize]}),
 tf.layers.repeatVector({n:digits +1 }),
 
 ]});


  
