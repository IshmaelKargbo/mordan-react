import React from "react";
import { useSelector } from "react-redux";
import { todoStore } from "./selectors";

export const fetchTodo = (Component) => {
  const todos = useSelector((state) => todoStore(state));

  return (props) => {
    return <Component {...props} todos={todos} />;
  };
};
