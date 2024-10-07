
import { RecoilRoot } from 'recoil'
import { CreateTodo } from './Components/CreateTodo'
import { Todo } from './Components/Todo'

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
