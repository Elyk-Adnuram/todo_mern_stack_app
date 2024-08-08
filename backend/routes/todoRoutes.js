const express = require("express"); //import express
const Todo = require("/models/Todo"); //import Todo model

const router = express.Router(); //create a router obj
//It allows you to group related routes together, making your code more modular and easier to manage

router.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

//create a new todo
router.post("/todos", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});

//update an existing todo
router.put("/todos/:id", async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updateTodo);
});

//delete a todo
router.delete("todos/:id", async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id);
  res.json({ message: "Todo deleted successfully" });
});
