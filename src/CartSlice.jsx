import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // each item: { name, image, cost, quantity }
  },
  reducers: {
    // ✅ Add new item or increase quantity
    addItem: (state, action) => {
      const plant = action.payload;
      const existing = state.items.find(item => item.name === plant.name);

      if (existing) {
        existing.quantity += 1; // increase if already exists
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    // ✅ Remove item completely
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },

    // ✅ Update quantity directly
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate && quantity > 0) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
