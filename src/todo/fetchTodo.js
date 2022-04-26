import React from "react";
import { useSelector } from "react-redux";

export const fetchTodo = (Component) => {
  const todos = useSelector((state) => state.todo.store);

  return (props) => {
    return <Component {...props} todos={todos} />;
  };
};
