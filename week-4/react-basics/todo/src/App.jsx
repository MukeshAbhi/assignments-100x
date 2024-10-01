import { useState, useEffect } from 'react'
import { CreateTodo } from './CreateTodo'
import { Todo } from './Todos'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect( ()=>{
    fetch("http://localhost:3000/todos")
      .then(async(res)=>{
        const json =await res.json();
        setTodos(json);
        console.log(todos)
  })
  },[]);

  return (
    <>
      <CreateTodo/>
      <Todo todos ={todos} />
    </>
  )
}





export default App
