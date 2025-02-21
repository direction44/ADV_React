import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function User(props) {
  return (
    <div>
      <h1>User Name:{props.userName}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, quod deleniti accusamus, ratione non nisi repellat esse corporis provident, nobis quia. Voluptatibus fuga sapiente natus repellat ut, totam perferendis deserunt.</p>
       <NavLink to="profile" style={{margin:"10px"}}>profile</NavLink>
       <NavLink to="account" style={{margin:"10px"}}>account</NavLink>
      <Outlet/>
    </div>
  )
}

export default User
