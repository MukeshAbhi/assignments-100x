import { useRecoilValue, useSetRecoilState } from "recoil"
import { todoAtom, todoSelector } from "../store/todoatom"
import { Todo } from "../types/todoType";
import axios from "axios";

const TodoList = ()=>{
    const todos = useRecoilValue<Todo []>(todoSelector);
    const setTodos = useSetRecoilState(todoAtom);


    const toggleTodo = async (index: number, todoId: number) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo, i) =>
            i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
          )
        );

        try{
            await axios.put('http://localhost:5000/api/todos/$'+ todoId)
        }catch(error){
            console.error('Error updating todo:', error);
        }
      };
      

    const deleteTodo = async (index: number,todoId: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));

        try{
            await axios.delete('http://localhost:5000/api/todos/$'+ todoId)
        }catch(error){
            console.error('Error deleting todo:', error);
        }
      };

    return(
        <>
            {todos.map((todo,index) => {
                return(
                    <div key={index}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>{todo.isCompleted ? "Completed" : "Incomplete"}</div>
                    <button onClick={()=>toggleTodo(index,todo.id!)}>Toggle</button>
                    <button onClick={()=>deleteTodo(index,todo.id!)}>Remove</button>
                </div>
                )
            })}
        </>
    )
}

export default TodoList;

