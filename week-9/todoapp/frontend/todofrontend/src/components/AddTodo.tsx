import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoAtom } from "../store/todoatom";
import { Todo } from "../types/todoType";
import axios from "axios";

const AddTodo = ()=>{
    const [title,setTitle] = useState<string>('');
    const [description,setDescription] = useState<string>('');
    const [todos,setTodos] = useRecoilState<Todo []>(todoAtom);

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
        <div>Title</div>
        <input onChange={e => setTitle(e.target.value)} />
        <div>Description</div>
        <input onChange={e => setDescription(e.target.value)} />
        <button onClick={onClickHandler}>Add Todo</button>
        </>
    )

}

export default AddTodo;