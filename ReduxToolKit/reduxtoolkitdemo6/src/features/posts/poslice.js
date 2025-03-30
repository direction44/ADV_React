import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    posts:[],
    loading:false,
    error:""
}

export const fetchPost=createAsyncThunk("posts",async()=>{
    const responce= await fetch("https://jsonplaceholder.typicode.com/posts")
    return responce.json()
})

const postReducer=createSlice({
    name:"posts",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchPost.pending,(state,action)=>{
            state.posts=[];
            state.error="";
            state.loading=true;
        }).addCase(fetchPost.fulfilled,(state,action)=>{
            state.posts=action.payload;
            state.error="";
            state.loading=false;
        }).addCase(fetchPost.rejected,(state,action)=>{
            state.posts=[];
            state.error=action.payload;
            state.loading=false;
        })
    }
})

export default postReducer.reducer