import React from "react";
import "./TodoItem.css";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo }) => (
  <div className="todo-item-container">
    <button>
      <BsTrash className="icon" />
    </button>
    <input className="checkbox" type="checkbox" id={`todo-${todo.id}`} />
    <label className="todo-title" htmlFor={`todo-${todo.id}`}>{todo.title}</label>
  </div>
);

export default TodoItem;
