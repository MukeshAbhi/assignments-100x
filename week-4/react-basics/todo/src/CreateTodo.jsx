import { useState } from "react"


export function CreateTodo(){

    const[title,setTitle] = useState("");
    const[description,setDec] = useState("");

    function clickHandlre(){
        fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-type" : "application/json"
            }
        })
            .then( async (res) => {
                const data = await res.json();
                alert("Todo added")
            })
    }

    return (
     <>
       <input className='title' type='text' placeholder='title' onChange={ (e) => {
            setTitle(e.target.value);
       }}/> <br />
       <input className='dec' type='text' placeholder='description' onChange={ (e) => {
            setDec(e.target.value); 
       }} /> <br />
       <button className="button" onClick={clickHandlre}>Add a todo</button>
     </>
    )
   }