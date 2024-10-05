
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { ThemeProvider } from './Context'
import ThemeToggler from './components/ThemeToggler';

function App() {
  
  return (
    <>
      <ThemeProvider>
        <div>
         <Header />
         <Main />
         <Footer />
        </div>
        <ThemeToggler />
      </ThemeProvider>
    </>
  )
}


export default App
