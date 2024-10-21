
import { useState } from "react"
import { useRecoilState } from "recoil";
import { todoAtom } from "../store/totdoatoms";
import { Todo } from '../types/type';

const AddTodo = ()=>{
    const [title,setTitle] = useState<string>('');
    const [description,setDescription] = useState<string>('');
    const [todos,setTodos] = useRecoilState<Todo[]>(todoAtom);
    let id :number = 1;

    const onClickhandler = ()=>{
        setTodos([...todos,{ id:id++,
            title : title,
            description: description,
            completed: false
        }])
    }

    return(
        <>
            <div>Title</div>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <div>Description</div>
            <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
            <button onClick={onClickhandler}>Add Todo</button>
        </>
    )
}


export default AddTodo;