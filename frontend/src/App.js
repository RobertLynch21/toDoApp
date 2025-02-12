import React, { useState } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [todos, setToDos] = useState([]);
  
  const addToDo = todo => {
    setToDos([...todos, todo]); // add new todo
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
      <h1>Todo App</h1>
<TodoInput addToDo={addToDo} />
<TodoList todos={todos} />
    </div>
  );
}

export default App;
