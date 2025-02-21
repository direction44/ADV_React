import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function Users(props) {
  const{allUsersIs}=props
  console.log(allUsersIs)
  return (
    <div>
      <h2>Users</h2>
      <ul>
      {allUsersIs.map((user)=>{
        return <li key={user.id}><Link to={`/users/${user.id}`} style={{textDecoration:"none"}}>{user.name}</Link></li>
      })}
      </ul>
      <Outlet/>
    </div>
  )
}

export default Users
