import React from 'react'
import { useNavigate } from 'react-router-dom'

const secret_Key="SCALive"
function Login() {
    const Navigate=useNavigate()
    function handleClick(e){
        if(e.target.value===secret_Key){
            const today=new Date()
            const str=today.toDateString()+"@"+today.toLocaleTimeString()
            Navigate("/dashboard",{state:{loginTime:str}})
        }
    }
  return (
    <div>
      <h1>Login</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, distinctio ad inventore quis minima quibusdam dignissimos, corrupti illo dolores accusamus enim qui at? Maxime dolorum laboriosam optio aperiam repellendus blanditiis.</p>
    <input type='text' onChange={handleClick}/>
    </div>
  )
}

export default Login
