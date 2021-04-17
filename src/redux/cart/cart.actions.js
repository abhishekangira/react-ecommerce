export const toggleCartDropdownVisibility = () => ({
    type: 'TOGGLE_CART_DROPDOWN_VISIBILITY',
})

export const addToCart = (id) => ({
    type: 'ADD_TO_CART',
    payload: id
})