import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementByOneActionCreator, incrementByOneActionCreator, incrementByValueActionCreator, resetActionCreator } from '../Redux/Actions/actionCreators'

function Counter() {
  let counter=  useSelector((state)=>state.counter)
  let dispatch=useDispatch()
 let[value,setValue]= useState("")
 const handleChange=(e)=>{
    console.log(e.target.value)
    setValue(Number(e.target.value))
 }
 const handleIncrement=()=>{
    dispatch(incrementByOneActionCreator())
 }
 const handleDecrement=()=>{
    dispatch(decrementByOneActionCreator())
 }
 const handleReset=()=>{
    dispatch(resetActionCreator())
 }
 const handleIncrementByValue=()=>{
    dispatch(incrementByValueActionCreator(value))
    setValue("")
 }
  return (
    <div>
      <strong>Counter:{counter}</strong>
      <br />
      <br />
      <input type="number" value={value} onChange={handleChange}/>
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementByValue}>IncrementByValue</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter
