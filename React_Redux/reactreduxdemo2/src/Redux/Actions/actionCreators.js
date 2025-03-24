import { INCREMENT_BY_ONE } from "./actionTypes"
import { INCREMENT_BY_VALUE } from "./actionTypes"
import { RESET} from "./actionTypes"
import { DECREMENT_BY_ONE } from "./actionTypes"

export const incrementByOneActionCreator=()=>{
    return{
        type:INCREMENT_BY_ONE
    }
}

export const decrementByOneActionCreator=()=>{
    return{
        type:DECREMENT_BY_ONE
    }
}

export const resetActionCreator=()=>{
    return{
        type:RESET
    }
}

export const incrementByValueActionCreator=(value)=>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:value
    }
}