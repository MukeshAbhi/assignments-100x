import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'
import { RecoilRoot } from 'recoil'

function App() {
  

  return (
    <>
      <RecoilRoot>
        <CreateTodo />
        <Todo />
      </RecoilRoot>
    </>
  )
}

export default App