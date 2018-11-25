// getting the coefficient of a quadratic equation from data 
// using tfjs

import * as tf from 'tensorflow/tfjs';

//importing 3 variable tensors . e.i mutable and optimizer can change them

const a = tf.tensor (0.1).variable();
const b =tf.tensor(0.1).variable();
const c = tf.tensor(0.1).variable();

//f(x) = a*x^2 +b*x+c 

// const f = x => tf.add(tf.add(tf.mul(a,tf.square(x)), tf.mul(b,x)),c); can write the same code in chaining as

const f = x => a.mul(x.sqaure()).add(b.mul(x)).add(c);

// for training the model 
// loss function : mean-square error  between prediction and the label 

const loss = (preds ,label) =>preds.sub(label).sqaure().mean();

const optimizer = tf.train.sgd(learningRate);

for(let i = 0 ; i< EPOCHS ;i++){
 optimizer.minimize(() => loss(f(data.xs), data.ys));
}

