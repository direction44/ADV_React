import React from 'react'
import { Routes,Route,NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/about'
import Contact from './components/Contact'
import ContactDetails from './components/ContactDetails'


function App() {
  return (
    <div>
      <nav>
      <NavLink to="/" style={{margin:"10px"}}>Home</NavLink>
      <NavLink to="about" style={{margin:"10px"}}>About</NavLink>
      <NavLink to="/contact" style={{margin:"10px"}}>Contact</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/contact-Details' element={<ContactDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
