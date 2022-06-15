import { useState } from "react";
import { Form, Todos } from "./components";


function App() {
  const localTodos=localStorage.getItem("todos")
  const [todos,setTodos]=useState(localTodos ? JSON.parse(localTodos) : [ ])

  return (
  <div className="app">
    <Form todos={todos} setTodos={setTodos}></Form>
    <Todos todos={todos} setTodos={setTodos}></Todos>
  </div>
  );
}

export default App;
