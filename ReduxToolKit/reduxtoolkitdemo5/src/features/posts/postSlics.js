import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    posts:[],
    loading:false,
    error:""
}

export const fetchPost=createAsyncThunk("posts",async()=>{
    const reponse=await fetch("http://jsonplaceholder.typicode.com/posts")
    return reponse.json()
})

const postReducer=createSlice({
    name:"posts",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchPost.pending,(state,action)=>{
            state.posts=[];
            state.loading=true;
            state.error=""
        }).addCase(fetchPost.fulfilled,(state,action)=>{
            state.posts=action.payload;
            state.loading=false;
            state.error=""
        }).addCase(fetchPost.rejected,(state,action)=>{
            state.posts=[];
            state.loading=false;
            state.error=action.payload
        })
    }

})

export default postReducer.reducer