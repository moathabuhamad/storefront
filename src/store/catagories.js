import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';

const api = 'https://storefront-api-mh.herokuapp.com';

const catagoriesSlice = createSlice({
  name: 'products',
  initialState: {
    catagories: [],
    activeCatagory: {},
  },
  reducers: {
    getCatagories: (state, action) => {
      state.catagories = action.payload;
    },
    getActiveCatagory: (state, action) => {
      let activeCatagory = state.catagories.find(
        (catagory) => action.payload === catagory.id,
      );
      state.activeCatagory = activeCatagory;
    },
  },
});


export default catagoriesSlice.reducer;
export const { getCatagories, getActiveCatagory } = catagoriesSlice.actions;

export const getCatagoriesFromAPI = (value) => (dispatch, state) => {
  return superagent.get(`${api}/catagories`).then((res) => {
    dispatch(getCatagories(res.body));
    if (value) {
      dispatch(getActiveCatagory(value));
    }
  });
};
