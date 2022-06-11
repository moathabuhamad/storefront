import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension"
import catagories from "./catagories";
import products from "./products";
import cart from './cart'

let reducers = combineReducers({ catagories, products, cart});
const store = ()=>{
    return createStore(reducers,composeWithDevTools())
}

export default store()