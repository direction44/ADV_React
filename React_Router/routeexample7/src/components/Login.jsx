import React from 'react'
import { useNavigate } from 'react-router-dom'
const security_Key="SCALive"

function Login() {
   let navigate= useNavigate()
    function handleClick(e){
        if(e.target.value===security_Key){
            navigate("/dashboard")
        }
    }
return (
    <div>
      <h1>Login</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora praesentium, maxime nostrum voluptates architecto modi asperiores et? Voluptatum ipsam consequuntur minus blanditiis error, animi odio accusamus iure quaerat libero.</p>
    <input type="text" onChange={handleClick}></input>
    </div>
  )
}

export default Login
