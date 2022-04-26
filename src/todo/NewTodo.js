import "./NewTodo.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./todoSlice";

const NewTodo = () => {
  const todos = useSelector((state) => state.todo.store);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    if (!title) return;

    const todo = {
      id: `_${Math.random().toString(36).substring(2, 9)}`,
      isComplete: false,
      title: title,
    };

    const isDuplicateText = todos.some((todo) => todo.title === title);

    if (isDuplicateText) return;
    dispatch(add(todo));
    setTitle("");
  };

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="button" onClick={submit} className="new-todo-button">
        ADD
      </button>
    </div>
  );
};

export default NewTodo;
