import { selector, useRecoilState, useSetRecoilState } from "recoil"
import { completedTodos, todosAtom } from "../store/atoms/todos"
import { useState } from "react";

export const Todo = ()=> {
    

    return(
        <div>
            <AllTodos />
            <CompletedTodos />
        </div>
    )
}


function AllTodos(){
    const[todos,setTodos]=useRecoilState(todosAtom);
    const[showTodos,setShowTodos] = useState(false);

    function clickHandler(index){
        setTodos((prevTodos) => 
            prevTodos.map((todo,i) =>
                i === index ? {...todo,completed : true } : todo 
            )
        )
    }

    function deleteTodo(index){
        setTodos((prevTodos)=>
            prevTodos.filter((todo,i) => i !== index)
        )
    }
    return(
        <>
            <button onClick={() => setShowTodos(!showTodos)}>
                {showTodos ? "Hide Todos" : "All Todos"}
            </button>
            {showTodos && (
                <div>
                    {todos.map((todo,index) => {
                        return(
                            <div key = {index} >
                                <h1>{todo.title}</h1>
                                <h3>{todo.description}</h3>
                                <button onClick={()=> {
                                    if(!todo.completed){
                                        clickHandler(index);
                                    }
                                }}>{todo.completed ? "Completed" : "Mark as completed"}</button>
                                <button onClick={()=>deleteTodo(index)} style={{ marginLeft: 20 }}>Delete todo</button>
                            </div>
                        )
                    })}
                </div>
            )}
        
        </>
    )
}


function CompletedTodos(){
    const[todos,setTodos] = useRecoilState(completedTodos);
    const[showTodos,setShowTodos] = useState(false);

    return(
        <>
        <button onClick={()=> setShowTodos(!showTodos)}>{showTodos?'Hide Completed Todos':' Completed Todos'}</button>
        {showTodos && (
            <div>
                {todos.map((todo,index)=> {
                return(
                    <div key = {index}>
                        <h1>{todo.title}</h1>
                        <h3>{todo.description}</h3>
                    </div>
                )
            })}
            </div>
            
        )}
        
        </>
    )
}