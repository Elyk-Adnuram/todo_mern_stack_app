const mongoose = require("mongoose"); //import mongoose

//This code defines a Mongoose schema named todoSchema. A schema is like a blueprint for the data.
//It specifies the structure of the documents that will be stored in the MongoDB collection.
//mongoose.Schema: This is a constructor function provided by Mongoose to create a new Schema
const todoSchema = new mongoose.Schema({
  //This object defines the fields for the documents:

  task: { type: String, required: true }, //A string representing the task to be done
  completed: { type: Boolean, default: false }, //A boolean indicating whether the task is completed or not.
});

//This line creates a Mongoose model named Todo. A model is a class with methods for interacting with the database.
//mongoose.model: This is a function provided by Mongoose to create a model.
const Todo = mongoose.model("Todo", todoSchema);
//'Todo': This is the name of the model. It will be used to reference the model in the application.
// 'todoSchema': This is the schema defined earlier, which specifies the structure of the documents.

module.exports = Todo;
