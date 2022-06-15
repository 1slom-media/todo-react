export const Todos=({todos,setTodos})=>{
    const handleDeleteTodo=(id)=>{
        const filtredTodos=todos.filter((todo)=>todo.id !== id);
        setTodos(filtredTodos);
        localStorage.setItem("todos",JSON.stringify(filtredTodos));

    }

    const handleEditTodo=(todo)=>{
       const editText= prompt("Edit !", todo.text);
       const foundIndex=todos.findIndex((item)=>item.id===todo.id);
       todos[foundIndex].text=editText;
       setTodos([...todos])
       localStorage.setItem("todos", JSON.stringify(todos));

    }

    const handleCompletedTodo=(evt,id)=>{
        const foundIndex=todos.findIndex((todo)=>todo.id===id);
        todos[foundIndex].isCompleted=evt.target.checked;
        setTodos([...todos])
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    const activeTodo=()=>{
        const active = todos.filter(todo=>todo.isCompleted===false);
        setTodos(active)
    }

    const completeTodo=()=>{
        const complete = todos.filter(todo=>todo.isCompleted===true);
        setTodos(complete)
    }

    const allTodo=()=>{
        const all = todos.filter(todo=>todo.isCompleted===true || todo.isCompleted===false);
        setTodos(all)
    }

 

    return(
        <div className="container">
        <ul>
            {todos.map((todo)=>(

                 <li className={ todo.isCompleted ? "text-decoration-line-through list-group-item d-flex justify-content-between" : "list-group-item d-flex justify-content-between"} key={todo.id}>
                 <input  type="checkbox" onChange={(evt)=>handleCompletedTodo(evt,todo.id)} defaultChecked={todo.isCompleted}/>
                 {todo.text}
                 <div>
                 <button className="btn btn-warning" onClick={()=>handleEditTodo(todo)} disabled={todo.isCompleted}>edit</button>
                 <button className="btn btn-danger" onClick={()=>handleDeleteTodo(todo.id)}>delete</button>
                 </div>
             </li>
                
            ))}
        </ul>

        <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
            <h3>Count: {todos.length}</h3>
            <button onClick={activeTodo} type="button" className="btn btn-success">Active</button>
            <button onClick={allTodo} type="button" className="btn btn-danger">ALL</button>
            <button onClick={completeTodo} type="button" className="btn btn-warning">Completed</button>
        </div>


        </div>
        

    )
}

