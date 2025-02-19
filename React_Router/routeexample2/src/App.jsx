import React from 'react'
import Home from './components/Home' 
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NoTFound'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
