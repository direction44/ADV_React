import { configureStore } from "@reduxjs/toolkit";
import pastryReducer from "../features/pastry/pastrySlice"
import cakeReducer from "../features/cake/cakeSlice"
const store=configureStore({
    reducer:{
        cake:cakeReducer,
        pastry:pastryReducer
    }
})

export default store