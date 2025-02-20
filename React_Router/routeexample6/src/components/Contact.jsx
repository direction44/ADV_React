import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/contact-Details")
    }
  return (
    <div>
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur ut porro quasi tempore optio pariatur dicta, eveniet placeat possimus corrupti quia sint perferendis ab doloribus excepturi numquam, delectus illo!</p>
        <button onClick={handleClick}>Show to ContactDetails</button>
    </div>
  )
}

export default Contact
