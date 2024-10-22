

import { RecoilRoot } from 'recoil'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import TodoBar from './components/TodoBar'
import AddTodoBar from './components/AddTodoBar'

function App() {
  

  return (
    <>
     <RecoilRoot>
      <div className='m-2'>
        <div className='mx-2'>
          <TodoBar />
          <AddTodo />
        </div>
          <AddTodoBar />
          <TodoList />
      </div>
          
     </RecoilRoot>
      
    </>
  )
}

export default App
