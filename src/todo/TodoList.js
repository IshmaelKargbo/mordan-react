import React from "react";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import "./TodoList.css";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.store);

  return (
    <div className="todo-list-container">
      <p className="title">TO-DO LIST</p>
      <NewTodo />
      <div className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <p className="empty">Empty Todo</p>
        )}
      </div>
    </div>
  );
};
export default TodoList;
