import React, { useState } from "react";
import "./TodoItem.css";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { remove, toggle } from "./todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(remove(todo.id));
  };

  const onChange = () => {
    dispatch(toggle({...todo, isComplete: !todo.isComplete}));
  };

  return (
    <div className="todo-item-container">
      <div className="text-check">
        <input
          onChange={onChange}
          value={todo.isComplete}
          checked={todo.isComplete}
          className="checkbox"
          type="checkbox"
          id={todo.id}
        />
        <label
          className={todo.isComplete ? "todo-title active" : "todo-title"}
          htmlFor={todo.id}
        >
          {todo.title}
        </label>
      </div>
      <button onClick={onRemove}>
        <BsTrash className="icon" />
      </button>
    </div>
  );
};
export default TodoItem;
