import React from 'react'
import { Routes,Route} from 'react-router-dom'
import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'
function App() {
  return (
    <div>
      <h1>hello</h1>
    <Routes>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
