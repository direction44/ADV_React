import React from 'react'
import { useParams,Link } from 'react-router-dom'

function User(props) {
  const{allUsersIs}=props
  const {userid}=useParams()
  let user=allUsersIs.find((user)=>(userid==user.id))
  console.log(user)
  return (
    <>
      <h3>User Id:{user.id}</h3>
      <p><strong>Name:</strong>{user.name}</p>
      <p><strong>Gender:</strong>{user.gender}</p>
      <p><strong>City:</strong>{user.city}</p>
      <Link to="/users" >Back to Users</Link>
    </>
  )
}

export default User
