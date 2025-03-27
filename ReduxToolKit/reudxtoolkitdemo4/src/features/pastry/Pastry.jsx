import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { orderPastry,restockPastry } from './pastrySlice'
 
function Pastry() {
    const pastry=useSelector((state)=>state.pastry.numOfPastry)
    const dispatch=useDispatch()
    const [available,setAvailable]=useState(true)
    const [pastriesValue,setPastriesValue]=useState("")

    const handleOrderPastry=()=>{
        if(pastry)
        {
            dispatch(orderPastry())
        }
        else{
            setAvailable(false)
        }
    }
    const handleRestockPastry=()=>{
        dispatch(restockPastry(Number(pastriesValue)))
        setAvailable(true)
        setPastriesValue("")
    }
    const handleChange=(e)=>{
        setPastriesValue(e.target.value)
    }
  return (
    <div>
      <strong>Num Of Pastries</strong>{pastry}
      {
        (!available&&<span style={{color:"red"}}> Sorry! No pastries in stock. Please restock.</span>)
      }
      <br />
      <input type="number" value={pastriesValue} onChange={handleChange} />
      <br />
      <button onClick={handleOrderPastry}>Order Pastry</button>
      <button onClick={handleRestockPastry}>Restock Pastry</button>
    </div>
  )
}

export default Pastry
