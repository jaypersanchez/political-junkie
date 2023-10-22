import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Update the path to your rootReducer

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, devtools, etc. here if needed
});

export default store;
