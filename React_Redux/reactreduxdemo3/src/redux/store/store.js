import {createStore} from "redux"
import noteReducer from "../reducers/noteReducers"
import { composeWithDevTools } from "@redux-devtools/extension"

const store=createStore(noteReducer,composeWithDevTools())
export default store