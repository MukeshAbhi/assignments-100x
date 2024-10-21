

import { RecoilRoot } from 'recoil'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <>
     <RecoilRoot>
          <AddTodo />
          <TodoList />
     </RecoilRoot>
      
    </>
  )
}

export default App
