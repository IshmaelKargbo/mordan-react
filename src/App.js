import React from "react";
import { hot, setConfig } from "react-hot-loader/root";
import "./App.css";
import TodoList from "./todo/TodoList";


const App = () => (
    <div className="App">
        <TodoList /> 
    </div>
)

export default hot(App);