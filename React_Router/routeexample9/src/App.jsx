import React from 'react'
import User from './components/User'
import Home from './components/Home'
import { Routes,Route,NavLink } from 'react-router-dom'
import Account from './components/Account'
import Profile from './components/Profile'


function App() {
  return (
    <div>
      <nav>
        <NavLink to="/" style={{margin:"10px"}}>Home</NavLink>
        <NavLink to="/user" style={{margin:"10px"}}>User</NavLink>
      </nav>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/user'element={<User userName="Disha"/>}>
          <Route index element={<Profile/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='account' element={<Account/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
