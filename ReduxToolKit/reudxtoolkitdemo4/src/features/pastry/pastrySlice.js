import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOfPastry:10
}

const pastrySlice=createSlice({
    name:"Pastry",
    initialState,
    reducers:{
        orderPastry:(state)=>{
            state.numOfPastry--
        },
        restockPastry:(state,actions)=>{
            state.numOfPastry+=actions.payload
        }
    }
})

export const {orderPastry,restockPastry}=pastrySlice.actions
export default pastrySlice.reducer