import React from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { Routes,Route } from 'react-router-dom' 

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default App
