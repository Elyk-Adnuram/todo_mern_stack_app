const express = require("express"); //import express
const mongoose = require("mongoose"); //import mongoose
const cors = require("cors"); //import cors

const app = express(); //create express app
const PORT = process.env.PORT || 5000; //set port

app.use(cors());
app.use(express.json()); // express middleware for sending and receiving json data

//Connect to MongoDB using Mongoose library
//mongooose.connect: This is the Mongoose method used to initiate a connection to a MongoDB database.
mongoose.connect("mongodb://localhost/mern-stack-db", {
  //'mongodb://localhost/mern-stack-db': This is the connection string specifying the location of the database.
  // mongodb://: Indicates the MongoDB protocol.
  // localhost: Specifies the server to connect to (in this case, your local machine).
  // mern-stack-db: The name of the database you want to use.
  useNewURLParser: true, // Uses the new URL parser, which is recommended for newer MongoDB drivers
  useUnifiedTopology: true, // Enables the new Server Discovery and Monitoring engine, providing improved connection stability and performance
});

//Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

//This code defines a Mongoose schema named todoSchema. A schema is like a blueprint for the data.
//It specifies the structure of the documents that will be stored in the MongoDB collection.
//mongoose.Schema: This is a constructor function provided by Mongoose to create a new Schema
const todoSchema = new mongoose.Schema({
  //This object defines the fields for the documents:

  task: String, //A string representing the task to be done
  completed: Boolean, //A boolean indicating whether the task is completed or not.
});

//This line creates a Mongoose model named Todo. A model is a class with methods for interacting with the database.
//mongoose.model: This is a function provided by Mongoose to create a model.
const Todo = mongoose.model("Todo", todoSchema);
//'Todo': This is the name of the model. It will be used to reference the model in the application.
// 'todoSchema': This is the schema defined earlier, which specifies the structure of the documents.

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

//create a new todo
app.post("/todos", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});

//update an existing todo
app.put("/todos/:id", async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updateTodo);
});

//delete a todo
app.delete("todos/:id", async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id);
  res.json({ message: "Todo deleted successfully" });
});
