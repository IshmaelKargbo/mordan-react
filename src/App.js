import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import TodoList from "./todo/TodoList";

const App = () => (
    <div className="App">
        <TodoList todos={[{title: 'Codeing', id: 1}]} /> 
    </div>
)

export default hot(module)(App);