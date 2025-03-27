import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset } from './counterSlice'

function Counter() {
    const count=useSelector((state)=>state.counter)
    console.log(count,"*************")
    const dispatch=useDispatch()

    const handleIncrement=()=>{
        dispatch(increment())
    }

    const handleDecrement=()=>{
        dispatch(decrement())
    }

    const handleReset=()=>{
        dispatch(reset())
    }
  return (
    <div>
      <strong>Counter:</strong>
      {count}
        <br />
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter
