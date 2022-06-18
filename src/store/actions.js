import superagent from 'superagent';
const api = 'https://storefront-api-mh.herokuapp.com';

export const getCatagories = (catagories) => {
  return {
    type: 'GET_CATAGORIES',
    payload: catagories,
  };
};

export const getActiveCatagory = (value) => {
  return {
    type: 'GET_ACTIVE_CATAGORY',
    payload: value,
  };
};

export const getProducts = (products) => {
    return {
      type: 'GET_PRODUCTS',
      payload:products
    };
  };


