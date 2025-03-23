import { createStore } from "redux";
import counterReducerIs from "../reducers/counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(counterReducerIs, composeWithDevTools());

export default store;
