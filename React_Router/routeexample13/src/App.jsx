import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Protected from './Components/Protected'
import Profile from './Components/Profile'
function App() {
  const[isLogIn,setIsLogIn]=useState(null)
  const logIn=()=>{
    setIsLogIn(true)
  }
  const logOut=()=>{
    setIsLogIn(false)
  }
  return (
    <div>
      <NavBar/>
      {
        !isLogIn?<button onClick={logIn}>Login</button>:<button onClick={logOut}>LogOut</button>
      }
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profile' element={<Protected isLogIn={isLogIn}><Profile/></Protected>}></Route>
    </Routes>
    </div>
  )
}

export default App
