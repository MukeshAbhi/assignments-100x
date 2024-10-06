import { useState } from "react";
import { useSetRecoilState } from "recoil"
import { todosAtom } from "../store/atoms/todos";


export const CreateTodo = ()=> {
    const setTodoState = useSetRecoilState(todosAtom);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function onClickHandler(){
        //to update todo 
        setTodoState((e) => [...e,{
            title:title,
            description:description,
            completed: false
        }])


        setTitle('');
        setDescription('');
    }

    return(
        <>
            <input placeholder="Title" type="text" value={title}  onChange={(e)=> setTitle(e.target.value)} /> <br />
            <input placeholder="Description" type="text"  value={description} onChange={(e)=> setDescription(e.target.value) } /> <br />
            <button onClick={onClickHandler} >Add ToDo</button><br />
        </>
    )
}