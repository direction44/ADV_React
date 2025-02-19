import React from 'react'
import Contact from './component/Contact'
import About from './component/About'
import Home from './component/Home'
import NotFound from './component/NotFound'
import { Routes,Route,NavLink } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
