// reducers/userReducer.js

const initialState = {
    // Define your initial state here
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    // Handle actions and update state accordingly
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  