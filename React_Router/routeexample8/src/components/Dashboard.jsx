import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

function Dashboard() {
    const navigation=useNavigate()
    const location=useLocation()
    function handleClick()
    {
        navigation(-1)
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse praesentium ducimus aspernatur dolorum neque harum repellendus eos. Quae autem dignissimos provident et itaque eum inventore quaerat voluptatem ducimus molestiae. Temporibus.</p>
      <p>You visited Login Page At <strong>{location.state.loginTime}</strong></p>
      <button onClick={handleClick}>Go Back</button>    
    </div>
  )
}

export default Dashboard
