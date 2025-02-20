import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const Navigate=useNavigate()
    function handleClick(){
        Navigate(-1)
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam hic itaque sint tenetur vero accusamus consequatur autem, alias dignissimos. Inventore nulla blanditiis amet, laudantium eum praesentium doloremque atque eos.</p>
      <button onClick={handleClick}>Go Back</button>  
    
    </div>
  )
}

export default Dashboard
