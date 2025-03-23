import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrementActionCreator, incrementActionCreator, resetActionCreator } from '../Redux/actions/actionCreators'
function Counter() {
    let counterVal=useSelector((state)=>state.counter)
    let dispatch=useDispatch()
    
    function handleIncrement()
    {
        dispatch(incrementActionCreator())
    }
    function handleDecrement()
    {
        dispatch(decrementActionCreator())
    }
    function handleReset()
    {
        dispatch(resetActionCreator())
    }

  return (
    <div>
      <h1>Counter is:{counterVal}</h1>
      <button onClick={handleIncrement} >Increment</button>
      <button onClick={handleDecrement} >Decrement</button>
      <button onClick={handleReset} >Reset</button>
    </div>
  )
}

export default Counter
