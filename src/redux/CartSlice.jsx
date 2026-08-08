
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    // ==========================================
    // ADD ITEM
    // ==========================================

    addItem: (state, action) => {
      const plant = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },


    // ==========================================
    // REMOVE ITEM
    // ==========================================

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },


    // ==========================================
    // UPDATE QUANTITY
    // ==========================================

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (item) => item.id === id
      );

      if (!item) {
        return;
      }

      if (quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.id !== id
        );
      } else {
        item.quantity = quantity;
      }
    },


    // ==========================================
    // CLEAR CART
    // ==========================================

    clearCart: (state) => {
      state.items = [];
    },

  },
});


export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions;


export default cartSlice.reducer;
