import { INCREMENT,DECREMENT,RESET } from "./actionType";

export const incrementActionCreator=()=>{
    return{
        type:INCREMENT
    }
}

export const decrementActionCreator=()=>{
    return{
        type:DECREMENT
    }
}

export const resetActionCreator=()=>{
    return{
        type:RESET
    }
}