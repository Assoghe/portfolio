import Portfolio from './Pages/Portfolio'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Components/Menu'



function App() {
  return (
    <>
    <Menu/>
    <Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
