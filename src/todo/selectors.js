import { createSelector } from "@reduxjs/toolkit";

const selectTodoStore = (state) => state.todo.store;

export const todoStore = createSelector(selectTodoStore, (todos) => {
  const complete = todos
    .filter((todo) => todo.isComplete)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const notComplete = todos
    .filter((todo) => !todo.isComplete)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return [...notComplete, ...complete];
});
