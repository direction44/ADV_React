import React from 'react'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import NotFound from './component/NotFound'
import { Routes,Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <Link to="/" style={{margin:"10px"}}>Home</Link>
        <Link to="/about" style={{margin:"10px"}}>About</Link>
        <Link to="/contact" style={{margin:"10px"}}>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
