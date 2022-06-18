const intitialState = {
  numberOfItems: 0,
  items: [],
  totalPrice: 0,
};

export default function cart(
  state = JSON.parse(localStorage.getItem('cart')) || intitialState,
  action,
) {
  switch (action.type) {
    case 'INCREMENT_CART':
      let numberOfItems = state.numberOfItems + 1;

      return { ...state, numberOfItems: numberOfItems };
    case 'ADD_ITEM':
      let newItems = [...state.items];
      let newItem = action.payload;
      let totalPrice = state.totalPrice;
      let foundItem = newItems.find((item) => {
        return item.id == newItem.id;
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
      return { ...state, items: newItems, totalPrice: totalPrice };

    case 'REMOVE_ITEM':
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

      return {
        ...state,
        items: newItems1,
        totalPrice: newTotalPrice,
        numberOfItems: newNumberOfItems,
      };
    default:
      return state;
  }
}

export const increment = (id) => {
  return {
    type: 'INCREMENT_CART',
  };
};
export const addItem = (product) => {
  return {
    type: 'ADD_ITEM',
    payload: product,
  };
};
export const removeItem = (itemId) => {
  return {
    type: 'REMOVE_ITEM',
    payload: itemId,
  };
};
