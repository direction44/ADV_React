import { DECREMENT, INCREMENT, RESET } from "../actions/actionType"

const initialState={
    counter:0
}

const counterReducerIs=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                counter:state.counter+1
            }
        case DECREMENT:
            return{
                counter:state.counter-1
            }
        case RESET:
            return{
                counter:0
            }
        default:
            return state
    }
}

export default counterReducerIs