// import pre trained models and just to inference in the browser 

1. TensorFlow SavedModel:

builder =
saved_model.builder.SavedModelBuilder(export_dir)
with tf.Session(graph=tf.Graph()) as sess:
 ...
 builder .add_meta_graph_and_variables(sess)
builder.save()


2. keras model:

model= Sequential()
model.add(Dense(2,input_dim=3 ,name ='dense_1'))
model.add(Dense(3,name='dense_2'))
...
model.save_weights('model.hdf5')

