import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';

const api = 'https://storefront-api-mh.herokuapp.com';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    incrementProduct: (state, action) => {
      let newProducts = state.products.map((prod) => {
        if (prod.id === action.payload) {
          prod.inventory++;
        }
        return prod;
      });
      state.products = newProducts;
    },
    decrementProduct: (state, action) => {
      let newProductz = state.products.map((prod) => {
        if (prod.id === action.payload) {
          if (prod.inventory !== 0) prod.inventory--;
        }
        return prod;
      });
      state.products = newProductz;
    },
  },
});

export default productSlice.reducer;
export const { getProducts, incrementProduct, decrementProduct } =
  productSlice.actions;

export const getProductsFromAPI = () => (dispatch, state) => {
  return superagent.get(`${api}/products`).then((res) => {
    dispatch(getProducts(res.body));
  });
};