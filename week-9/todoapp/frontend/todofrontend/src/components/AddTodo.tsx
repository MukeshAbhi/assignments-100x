import { useState } from "react";
import {  useSetRecoilState } from "recoil";
import { todoAtom } from "../store/todoatom";
import { Todo } from "../types/todoType";
import axios from "axios";

const AddTodo = ()=>{
    const [title,setTitle] = useState<string>('');
    const [description,setDescription] = useState<string>('');
    const setTodos = useSetRecoilState(todoAtom);

    const onClickHandler = async ()=>{
        if(title.trim() === '') return;

        const newTodo : Todo = { title: title, description: description, isCompleted : false};

        setTodos((oldTodos) => [...oldTodos, newTodo]);

        try{
            await axios.post('http://localhost:5000/api/todos',
                {
                    title: newTodo.title,
                    description: newTodo.description,

                }
            )
        }catch(error){
            console.error('Error adding todos: ', error);
        }

        setTitle('');
        setDescription('');
    }

    return (
        <>
        <div className=" text-red-400 text-2xl" >Title</div>
        <div>
            <input className= "w-full border-4 border-sky-200 rounded-md  p-2 my-3  focus:border-4 focus:border-sky-300 focus:outline-none "  placeholder="required" onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="  text-red-400 text-2xl">Description</div>
        <div >
            <input className= "w-full border-4 border-sky-200 rounded-md  p-2 my-3 focus:border-4 focus:border-sky-300 focus:outline-none " placeholder="optional" onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
            <button onClick={onClickHandler} type="button" className=" mt-1 hover:bg-sky-400 bg-sky-600 p-3 rounded-md text-white" >
                Add Todo
            </button>
        </div>
        </>
    )

}

export default AddTodo;