import { ADDNOTES,DELETENOTES } from "../actions/actionTypes"

const initailState={
    notes:[]
}
const noteReducer=(state=initailState,action)=>{
    switch(action.type){
        case ADDNOTES:
            const newNotes=[...state.notes,action.payload]
            return {
            notes:newNotes
            }

        case DELETENOTES:
            const remainingNote=[...state.notes]
            remainingNote.splice(Number(action.payload),1)
            return{
                notes:remainingNote
            }   
        default:
            return state
    }

}

export default noteReducer