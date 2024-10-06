import { useRecoilState, useRecoilValue } from "recoil"
import { todosAtom } from "../store/atoms/todos";



export const Todo = ()=>{
    const [todos,setTodos] = useRecoilState(todosAtom);
        
    const markAsCompleted = (index) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, completed: true } : todo
            )
        );
    };

    const deleteTodo = (index) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo, i) => i !== index); // Filter out the todo at the specified index
        });
    };
    return(
       <div>
        {todos.map((todo,index)=>{
            return(
                <div key={index}>
                    <h1>{todo.title}</h1>
                    <h3>{todo.description}</h3>
                        <button
                            onClick={() => {
                                if (!todo.completed) {
                                    markAsCompleted(index);
                                }
                            }}
                        >
                            {todo.completed ? "Completed" : "Mark as Completed"}
                        </button> <br />
                        <button onClick={deleteTodo}>Delete</button>
                </div>
            )
        })}
       </div>
    )
}


            
        