import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <h1>MERN Stack Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
