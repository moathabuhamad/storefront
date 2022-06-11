import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension"
import catagories from "./catagories";
import products from "./products";

let reducers = combineReducers({ catagories, products});
const store = ()=>{
    return createStore(reducers,composeWithDevTools())
}

export default store()