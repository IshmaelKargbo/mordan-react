import "./NewTodo.css";
import React, { useState } from "react";

const NewTodo = () => {
  const [todo, setTodo] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="new-todo-button">ADD</button>
    </div>
  );
};

export default NewTodo;
