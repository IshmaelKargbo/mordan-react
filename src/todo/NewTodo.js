import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./todoSlice";
import styled from "styled-components";

const NContainer = styled.div`
  background: #fff;
  display: flex;
`;

const NAddBtn = styled.button`
  background: transparent;
  border: none;
  color: rgb(52, 52, 255);
  padding: 20px 15px;
  font-size: 14px;
  font-weight: 600;
`;

const NInput = styled.input`
  flex: 1;
  padding: 20px;
  border: none;
  font-size: 14px;
  font-weight: 300;
  color: rgb(56, 56, 56);
  &:focus {
    outline: none;
  }
`;

const NewTodo = () => {
  const todos = useSelector((state) => state.todo.store);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const save = () => {
    if (!title) return;

    const todo = {
      id: `_${Math.random().toString(36).substring(2, 9)}`,
      isComplete: false,
      title: title,
      date: new Date().toISOString(),
    };

    const isDuplicateText = todos.some((todo) => todo.title === title);

    if (isDuplicateText) return;
    dispatch(add(todo));
    setTitle("");
  };

  const submit = () => {
    save();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      save();
    }
  };

  return (
    <NContainer>
      <NInput
        className="new-todo-input"
        type="text"
        placeholder="Type your todo"
        value={title}
        onKeyPress={onKeyPress}
        onChange={(e) => setTitle(e.target.value)}
      />
      <NAddBtn type="button" onClick={submit} className="new-todo-button">
        ADD
      </NAddBtn>
    </NContainer>
  );
};

export default NewTodo;
