import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { Routes,Route,Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
      <a href="/" style={{margin:"10px"}}>Home </a>
      <a href="/contact" style={{margin:"10px"}}>contact</a>
      <a href="/about" style={{margin:"10px"}}>about</a>
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
