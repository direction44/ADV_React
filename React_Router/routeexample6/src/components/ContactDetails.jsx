import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function ContactDetails() {
    const navigate=useNavigate()
    function handleBack(){
        navigate(-1)
    }
    function handleHome(){
        navigate("/")
    }
  return (
    <div>
      <h1>ContactDetails</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo magnam asperiores laborum rem consequuntur saepe voluptatibus nostrum quam illum ab. Officia voluptates ratione quis earum cupiditate unde quasi minus debitis.</p>
    <button onClick={handleBack}>Go Back</button> &nbsp;&nbsp;
    <button onClick={handleHome}>Go Home</button> 
    
    </div>
  )
}

export default ContactDetails
