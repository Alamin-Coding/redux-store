// src/redux/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
        console.log("OK");
        
      return state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity === 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        const item = state.cartItems.find((i) => i.id === id);
        if (item) item.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.appliedPromo = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectAppliedPromo = (state) => state.cart.appliedPromo;

// Derived totals
export const selectSubtotal = (state) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const selectDiscount = (state) => {
  const subtotal = selectSubtotal(state);
  return state.cart.appliedPromo ? subtotal * state.cart.appliedPromo.discount : 0;
};

export const selectShipping = (state) => {
  const subtotal = selectSubtotal(state);
  return subtotal > 500 ? 0 : 2;
};

export const selectTax = (state) => {
  const subtotal = selectSubtotal(state);
  const discount = selectDiscount(state);
  return (subtotal - discount) * 0.05;
};

export const selectTotal = (state) => {
  const subtotal = selectSubtotal(state);
  const discount = selectDiscount(state);
  const shipping = selectShipping(state);
  const tax = selectTax(state);
  return subtotal - discount + shipping + tax;
};
