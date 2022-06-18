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

export const getCatagoriesFromAPI = (value) => (dispatch, state) => {
  return superagent.get(`${api}/catagories`).then((res) => {
    dispatch(getCatagories(res.body));
    console.log(res.body)
    console.log(value);
    if (value) {
      dispatch(getActiveCatagory(value));
    }
  });
};

export const getProductsFromAPI=()=>(dispatch,state)=>{
    return superagent.get(`${api}/products`).then((res)=>{
        dispatch(getProducts(res.body))
        console.log(res.body)
    })
}
