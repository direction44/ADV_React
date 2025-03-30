import { ADDNOTES,DELETENOTES } from "./actionTypes";

export const addNote=(note)=>{
    return{
        type:ADDNOTES,  
        payload:note
    }
}

export const deleteNote=(note)=>{
    return{
        type:DELETENOTES,  
        payload:note
    }
}