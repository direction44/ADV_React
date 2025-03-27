import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { orderCake,restockCake } from './cakeSlice'
function Cake() {
    const cake=useSelector((state)=>state.cake.numOfCake)
    const dispatch=useDispatch()
    const [available,setavailable]=useState(true)
    const handleOrderCake=()=>{
        if(cake)
        {

            dispatch(orderCake())
        }
        else{
            setavailable(false)
        }
    }
    const handleRestockCake=()=>{
        dispatch(restockCake())
        setavailable(true)
    }
  return (
    <div>
      <strong>Num Of Cake</strong>{cake}
       {
         (!available&&<span style={{color:"red"}}> Sorry! No cakes in stock. Please restock.</span>)
       }
      <br />
      <button onClick={handleOrderCake}>Order Cake</button>
      <button onClick={handleRestockCake}>Restock Cake</button>
    </div>
  )
}

export default Cake
