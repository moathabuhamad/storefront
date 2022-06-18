const initialState = {
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {...state,products:action.payload};
    case 'INCREMENT_PRODUCTS':
      let newProducts = state.products.map((prod) => {
        if (prod.id === action.payload) {
          prod.inventory++;
        }
        return prod;
      });
      return { ...state, products: newProducts };
    case 'DECREMENT_PRODUCTS':
      let newProductz = state.products.map((prod) => {
        if (prod.id === action.payload) {
          if(prod.inventory !== 0) prod.inventory--;
        }
        return prod;
      });
      return { ...state, products: newProductz };
    default:
      return state;
  }
}

export const getProducts = () => {
  return {
    type: 'GET_PRODUCTS',
  };
};

export const incrementProduct = (id) => {
  return {
    type: 'INCREMENT_PRODUCTS',
    payload: id,
  };
};

export const decrementProduct = (id) => {
  return {
    type: 'DECREMENT_PRODUCTS',
    payload: id,
  };
};
