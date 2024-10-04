import { useRecoilValue, useSetRecoilState } from "recoil";
import {  todoAtom } from "../store/atom/todo";
import { useState } from "react";


export function CreateTodo(){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const SetTodoState = useSetRecoilState(todoAtom);

    function addTodo(){
        SetTodoState((prevTodos)=> [
            ...prevTodos,{
            title: title,
            description: description
        }]);

        setTitle(' ');
        setDescription(' ');
    }

    return(
        <>
            <input placeholder='Title' type='text' className='title' onChange={(e)=> setTitle(e.target.value) } /><br />
            <input placeholder='Description' type='text' className='des' onChange={ (e)=> setDescription(e.target.value)}/><br />
            <button className='button' onClick={addTodo}>Add Todo</button>
        </>
    )
}

