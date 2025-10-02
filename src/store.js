// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the reducer from CartSlice
import cartReducer from './CartSlice';

// ✅ Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
  // Root reducer object
  reducer: {
    // 'cart' is the name of the slice in the store, and it's managed by cartReducer
    cart: cartReducer,
  },
});

// ✅ Export the store so it can be used in <Provider store={store}>
export default store;
