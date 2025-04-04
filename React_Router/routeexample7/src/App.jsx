import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

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
