const {createAction,createReducer,configureStore}=require("@reduxjs/toolkit")

const increment=createAction("INCREMENT")
const incrementByValue=createAction("INCREMENT_BY_VALUE")
const decrement=createAction("DECREMENT")
const reset=createAction("RESET")

const initialState={
    count:0
}

const counterReducer=createReducer(initialState,(builder)=>{
    builder.addCase(increment,(state)=>{
        state.count++
    }).addCase(decrement,(state)=>{
        state.count--
    }).addCase(incrementByValue,(state,action)=>{
        state.count+=action.payload
    }).addCase(reset,(state)=>{
        state.count=0
    })
})

let store=configureStore({reducer:counterReducer})

store.subscribe(()=>{
    const state=store.getState()
    console.log(state,"********")
})

store.dispatch(increment())
store.dispatch(incrementByValue(6))
store.dispatch(decrement())
store.dispatch(reset())