import { useRecoilValue } from "recoil"
import { todoSelector } from "../store/todoatom"
import { Todo } from "../types/todoType";

const TodoList = ()=>{
    const todos = useRecoilValue<Todo []>(todoSelector);

    return(
        <>
            {todos.map((todo) => {
                <div>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>{todo.isCompleted}</div>
                </div>
            })}
        </>
    )
}

export default TodoList;

