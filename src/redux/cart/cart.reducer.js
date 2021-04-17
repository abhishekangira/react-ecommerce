const INITIAL_STATE = {
  cartDropdownVisible: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN_VISIBILITY":
      return { ...state, cartDropdownVisible: !state.cartDropdownVisible };

    default:
      return state;
  }
};

export default cartReducer;
