import { useRecoilState } from "recoil"
import { todoAtom } from "../store/todoatom"
import { Todo } from "../types/todoType";
import axios from "axios";
import { useEffect } from "react";

const TodoList = ()=>{
    
    const [todos,setTodos] = useRecoilState<Todo []>(todoAtom)

    useEffect(()=>{
        const fetchTodos =  async()=>{
            try {
                const response = await axios.get('http://localhost:5000/api/todos');
                setTodos(response.data) ;
            }catch(error){
                console.error('Error fetching todos: ', error);
                return [];
            }
        }
        fetchTodos();
    },[setTodos]);


    const toggleTodo = async (index: number, todoId?: number) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo, i) =>
            i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
          )
        );

        try{
            await axios.put(`http://localhost:5000/api/todos/${todoId}` )
        }catch(error){
            console.error('Error updating todo:', error);
        }
      };
      

    const deleteTodo = async (index: number,todoId?: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));

        try{
            await axios.delete(`http://localhost:5000/api/todos/${todoId}` )
        }catch(error){
            console.error('Error deleting todo:', error);
        }
      };

    return(
        <>
            {todos.map((todo,index) => {
                return(
                    <div key={index}>
                        <div className="grid grid-cols-4 gap-4 items-center bg-slate-100 font-semibold p-4 rounded-md">
                            <div className="px-4" >{todo.title}</div>
                            <div className="px-4" >{todo.isCompleted ? "✅" : ""}</div>
                            <div className="px-4" >
                                <button onClick={()=>toggleTodo(index,todo.id!)} type="button" className=" mt-1 hover:bg-sky-600 bg-sky-400 p-3 rounded-md text-white">Toggle</button>
                                <button onClick={()=>deleteTodo(index,todo.id!)} type="button" className=" mt-1 hover:bg-red-600 bg-red-400 p-3 rounded-md text-white ml-1" >Remove</button>
                            </div>
                            <div className="pr-52 truncate" >{todo.description}</div>
                        </div>
                </div>
                )
            })}
        </>
    )
}

export default TodoList;

