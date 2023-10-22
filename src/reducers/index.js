// reducers/index.js

import { combineReducers } from 'redux';
import userReducer from '../slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers here if needed
});

export default rootReducer;
