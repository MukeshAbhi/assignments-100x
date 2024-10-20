import {ProductList} from './Components/Productpage'
import { RecoilRoot } from 'recoil'
import './App.css'
import { Cart } from './Components/Cart'

function App() {


  return (
    <>
      <RecoilRoot>
        <ProductList />
        <Cart />
      </RecoilRoot>
    </>
  )
}

export default App
