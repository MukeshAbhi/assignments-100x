
import { RecoilRoot } from 'recoil'
import './App.css'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'


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
