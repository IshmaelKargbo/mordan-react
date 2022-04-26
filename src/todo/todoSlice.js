import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  store: [],
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.store.push(payload);
    },
    toggle: (state, { payload }) => {
      const todoIndex = state.store.findIndex((e) => e.id === payload.id);
      if (todoIndex < 0) return;
      state.store[todoIndex] = payload;
    },
    remove: (state, {payload}) => {
      state.store = state.store.filter(todo => todo.id !== payload);
    }
  },
});

export const { add, toggle, remove } = todoSlice.actions;

export default todoSlice.reducer;
