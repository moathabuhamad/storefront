const initialState = {
  products: [
    {
      name: 'apples',
      id: 1,
      price: 10,
      inventory: 10,
      desc: 'best apples in jordan',
      img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      catagoryId: 1,
    },
    {
      name: 'Ice Cream',
      id: 6,
      price: 10,
      inventory: 10,
      desc: 'best Ice Cream in jordan',
      img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      catagoryId: 1,
    },
    {
      name: 'Windows',
      id: 3,
      price: 1200,
      inventory: 10,
      desc: 'best Laptop',
      img: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      catagoryId: 3,
    },
    {
      name: 'Mac',
      id: 4,
      price: 1700,
      inventory: 10,
      desc: 'overpriced Laptop',
      img: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      catagoryId: 3,
    },
    {
      name: 'Pants',
      id: 2,
      price: 30,
      inventory: 10,
      desc: 'best Pants in jordan',
      img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
      catagoryId: 2,
    },
    {
      name: 'Tshirt',
      id: 5,
      price: 30,
      inventory: 10,
      desc: 'best T-shirt in jordan',
      img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      catagoryId: 2,
    },
  ],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return state;
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
          prod.inventory--;
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

export const increment = (id) => {
  return {
    type: 'INCREMENT_PRODUCTS',
    payload: id,
  };
};

export const decrement = (id) => {
  return {
    type: 'DECREMENT_PRODUCTS',
    payload: id,
  };
};
