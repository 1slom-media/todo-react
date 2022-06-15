import { useRef } from "react";
import { v4 } from "uuid";

export const Form=({todos, setTodos})=>{
    const inputRef=useRef(null)
    const handleAddTodo=(evt)=>{
        evt.preventDefault();

        const newTodo={
            id:v4(),
            text:inputRef.current.value,
            isCompleted:false
        }
        setTodos((prev)=>[newTodo, ...prev]);
        localStorage.setItem("todos", JSON.stringify([newTodo,...todos]));
        inputRef.current.value=null;
    }
    return(
        <div className="container">
        <form  onSubmit={handleAddTodo}>
            <input ref={inputRef} type="text" placeholder="todo text" required />
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
        </div>
    )
}