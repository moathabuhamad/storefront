import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from 'redux-thunk';
import catagories from "./catagories";
import products from "./products";
import cart from './cart'

let reducers = combineReducers({ catagories, products, cart});
const store = ()=>{
    return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
}

export default store()