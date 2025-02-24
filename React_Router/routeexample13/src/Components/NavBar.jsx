import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profile from './Profile'
function NavBar() {
  return (
    <nav style={{margin:"10px"}}>
      <Link to="/" style={{padding:"10px"}}>Home</Link>
      <Link to="/about" style={{padding:"10px"}}>About</Link>
      <Link to="/profile" style={{padding:"10px"}}>Profile</Link>
    </nav>
  )
}

export default NavBar
