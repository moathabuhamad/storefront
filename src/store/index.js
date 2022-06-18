import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import catagoriesSlice from "./catagories";
import productSlice from "./products";
import cartSlice from './cart'

let reducers = combineReducers({
    catagories: catagoriesSlice,
    products: productSlice,
    cart: cartSlice,
  });

const store = configureStore({ reducer: reducers });

export default store;
