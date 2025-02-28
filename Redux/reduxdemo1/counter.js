const {createStore}=require("redux")

const initialState={
    counter:0
}

const incrementByOneAction=()=>{
 return {
    type:"INCREMENT_BY_1"
 }   
}

const decrementByOneAction=()=>{
    return {
       type:"DECREMENT_BY_1"
    }   
   }

   const incrementByValueAction=(val)=>{
    return {
       type:"INCREMENT_BY_VALUE",
       payload:val
    }   
   }
   const resetAction=()=>{
    return {
       type:"RESET"
    }   
   }

   const counterReducer=(state=initialState,action)=>{
        switch(action.type){
            case "INCREMENT_BY_1":
                return{
                    counter:state.counter+1
                }
            case "DECREMENT_BY_1":
                return{
                    counter:state.counter-1
                }
            case "INCREMENT_BY_VALUE":
                return{
                    counter:state.counter+action.payload
                }
            case "RESET":
            return{
                counter:0
            }
            default:
                return state
        }

   }

   const store=createStore(counterReducer)
   store.subscribe(()=>{
       console.log("State Accessed...")
    })
    store.dispatch(incrementByOneAction())