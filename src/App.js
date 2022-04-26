import React from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import { fetchTodo } from "./todo/fetchTodo";
import TodoList from "./todo/TodoList";

const App = () => {
  const ReduxTodo = fetchTodo(TodoList);
  
  return (
    <div className="App">
      <ReduxTodo />
    </div>
  );
};

export default hot(App);
