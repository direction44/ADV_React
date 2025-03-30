import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlics"

const store=configureStore({reducer:{
    post:postReducer
}})

export default store