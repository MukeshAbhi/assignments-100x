import { useRecoilValue} from 'recoil';
import {todoAtom } from '../store/totdoatoms'


const TodoList = ()=>{
    const todos = useRecoilValue(todoAtom);

    return(
        <>
        {todos.map(todo => {
            return (
                <>
                <div>{todo.title}</div>
                <div>{todo.description}</div>
                <div>{todo.completed}</div>
                </>
            )
        })}
        </>
    )
}

export default TodoList;