import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const addTodo = async () => {
    try {
      const response = await axios.post("/todos", { task });
      onAdd(response.data);
      setTask("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};
TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TodoForm;
