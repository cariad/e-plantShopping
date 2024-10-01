import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Added by @cariad 2024-10-01
      const plant = action.payload;
      const existing = state.items.find((item) => item.name === plant.name);

      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      // Added by @cariad 2024-10-01
      const { name } = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },

    updateQuantity: (state, action) => {
      // Added by @cariad 2024-10-01
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) itemToUpdate.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
