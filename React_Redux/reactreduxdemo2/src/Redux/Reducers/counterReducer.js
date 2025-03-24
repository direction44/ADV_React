import { DECREMENT_BY_ONE, INCREMENT_BY_ONE, INCREMENT_BY_VALUE, RESET } from "../Actions/actionTypes"

const initialState={
    counter:0
}
const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT_BY_ONE:
            return{
                counter:state.counter+1
            }

        case DECREMENT_BY_ONE:
            return{
                counter:state.counter-1
            }

        case RESET:
            return{
            counter:0
        }
        case INCREMENT_BY_VALUE:
            return{
                counter:state.counter+action.payload
            }
        default:
            return state
    }

}

export default counterReducer