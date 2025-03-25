const {createAction,createReducer,configureStore}=require("@reduxjs/toolkit")
const logger=require("redux-logger").createLogger()

const increment=createAction("INCREMENT")
const decrement=createAction("DECREMENT")
const incrementByValue=createAction("INCREMENTBYVALUE")
const reset=createAction("RESET")

const initialState={
    count:0
}

const counterReducer=createReducer(initialState,(builder)=>{
    builder.addCase(increment,(state)=>{
        state.count++
    }).addCase(decrement,(state)=>{
        state.count--
    }).addCase(reset,(state)=>{
        state.count=0
    }).addCase(incrementByValue,(state,action)=>{
        state.count+=action.payload
    })
})

const store=configureStore({reducer:counterReducer,middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(logger);
}})

store.dispatch(increment())
store.dispatch(incrementByValue(4))
store.dispatch(decrement())
store.dispatch(reset())