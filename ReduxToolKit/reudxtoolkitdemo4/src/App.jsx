import React from 'react'
import Cake from './features/cake/cake'
import Pastry from './features/pastry/pastry'
function App() {
  return (
    <>
      <h2 style={{textAlign:"center",textDecoration:"underline"}}>BlissFul Bites</h2>
      <Cake/>
      <hr />
      <Pastry/>
    </>  
  )
}

export default App
