import { useRecoilValue } from "recoil"
import { todoAtom } from "../store/atom/todo"

let id = 1
export function Todo(){

    const todos = useRecoilValue(todoAtom);
    console.log(todos)
    return(
         <>
            {todos.map((todo) => {
            return(
                <div key={id++}>
                    <h1 className="title">{todo.title}</h1>
                    <h2 className="des">{todo.description}</h2>
                </div>
            )
         })}
         </>
        
    )
}