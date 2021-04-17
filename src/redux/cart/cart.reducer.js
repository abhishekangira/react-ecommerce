const INITIAL_STATE = {
  cartDropdownVisible: false,
  cartItems: {},
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN_VISIBILITY":
      return { ...state, cartDropdownVisible: !state.cartDropdownVisible };
    case "ADD_TO_CART":
      if (action.payload in state.cartItems)
        return { ...state, cartItems: {...state.cartItems, [action.payload]: state.cartItems[action.payload]+1 } };
      return { ...state, cartItems: {...state.cartItems, [action.payload]: 1 } };
    default:
      return state;
  }
};

export default cartReducer;
