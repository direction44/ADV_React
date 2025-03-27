import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOfCake:5
}

const cakeSlice=createSlice({
    name:"cake",
    initialState,
    reducers:{
        orderCake:(state)=>{
            state.numOfCake--
        },
        restockCake:(state)=>{
            state.numOfCake+=5
        }
    }
})

export const {orderCake,restockCake}=cakeSlice.actions
export default cakeSlice.reducer