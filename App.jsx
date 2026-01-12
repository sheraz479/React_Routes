import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Routes , Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
     <Route path='/' element ={<Navbar />}></Route>
     <Route path='/home' element={<Home />}></Route>
     <Route path='/about' element={<About />}></Route>
     <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </>
  )
}

export default App;
