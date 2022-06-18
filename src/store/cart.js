import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';

const api = 'https://storefront-api-mh.herokuapp.com';

const cartSlice = createSlice({
  name: 'products',
  initialState: JSON.parse(localStorage.getItem('cart')) || {
    items: [],
    totalPrice: 0,
    numberOfItems: 0,
  },
  reducers: {
    increment: (state, action) => {
      let numberOfItems = state.numberOfItems + 1;
      state.numberOfItems = numberOfItems;
    },
    addItem: (state, action) => {
      let newItems = [...state.items];
      let newItem = action.payload;
      let totalPrice = state.totalPrice;
      let foundItem = newItems.find((item) => {
        return item.id === newItem.id;
      });
      if (foundItem) {
        foundItem = foundItem.quantity++;
        totalPrice += newItem.price;
      } else {
        foundItem = { ...newItem, quantity: 1 };
        newItems.push(foundItem);
        totalPrice += newItem.price;
      }
      localStorage.setItem(
        'cart',
        JSON.stringify({
          ...state,
          items: newItems,
          totalPrice: totalPrice,
        }),
      );
      state.items = newItems;
      state.totalPrice = totalPrice;
    },
    removeItem: (state, action) => {
      let newItems1 = [...state.items];
      let foundItem1 = newItems1.find((item) => {
        return item.id == action.payload;
      });
      foundItem1.quantity--;
      let newNumberOfItems = state.numberOfItems - 1;
      let newTotalPrice = state.totalPrice - foundItem1.price;
      if (foundItem1.quantity == 0) {
        newItems1 = newItems1.filter((item) => item.id != action.payload);
      }
      state.items = newItems1;
      state.totalPrice = newTotalPrice;
      state.numberOfItems = newNumberOfItems;
      localStorage.setItem(
        'cart',
        JSON.stringify({
          ...state,
          items: newItems1,
          totalPrice: newTotalPrice,
          numberOfItems: newNumberOfItems,
        }),
      );
    },
    clearCart: (state, action) => {
      localStorage.setItem(
        'cart',
        JSON.stringify({
          items: [],
          totalPrice: 0,
          numberOfItems: 0,
        }),
      );
      state = { items: [], totalPrice: 0, numberOfItems: 0 };
    },
  },
});

export default cartSlice.reducer;
export const { increment, addItem, removeItem, clearCart } = cartSlice.actions;
