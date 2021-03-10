const INITIAL_STATE = {
    currentUser: "not set",
};

const userReducer = (state = INITIAL_STATE, action) =>
    action.type === 'SET_CURRENT_USER' ?
        { ...state, currentUser: action.payload } : state

export default userReducer