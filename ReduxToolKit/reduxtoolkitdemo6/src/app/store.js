import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/poslice";
const store=configureStore({reducer:{
    posts:postReducer
}})
export default store