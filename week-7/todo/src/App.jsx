import { CreateTodo} from './Components/CreateTodo';
import { Todo } from './Components/Todo';
import './App.css'
import { RecoilRoot } from 'recoil';

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
