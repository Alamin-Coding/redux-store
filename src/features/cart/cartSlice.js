// src/redux/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartList")) || [],
  savedItems: JSON.parse(localStorage.getItem("savedList")) || []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (!existingItem) {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
        localStorage.setItem("cartList", JSON.stringify(state.cartItems))
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartList", JSON.stringify(state.cartItems))
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity === 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        const item = state.cartItems.find((i) => i.id === id);
        if (item) item.quantity = quantity;
      }
      localStorage.setItem("cartList", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.appliedPromo = null;
      localStorage.setItem("cartList", JSON.stringify(state.cartItems));
    },

    saveForLater: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item) {
        // Remove from cart
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
        // Add to saved items if not already there
        const existingSavedItem = state.savedItems.find((i) => i.id === itemId);
        if (!existingSavedItem) {
          state.savedItems.push(item);
        }
        localStorage.setItem("cartList", JSON.stringify(state.cartItems));
        localStorage.setItem("savedList", JSON.stringify(state.savedItems));
      }
    },

    moveToCart: (state, action) => {
      const itemId = action.payload;
      const item = state.savedItems.find((i) => i.id === itemId);
      if (item) {
        // Remove from saved items
        state.savedItems = state.savedItems.filter((i) => i.id !== itemId);
        // Add to cart if not already there
        const existingCartItem = state.cartItems.find((i) => i.id === itemId);
        if (!existingCartItem) {
          state.cartItems.push(item);
        }
        localStorage.setItem("cartList", JSON.stringify(state.cartItems));
        localStorage.setItem("savedList", JSON.stringify(state.savedItems));
      }
    },

    removeFromSaved: (state, action) => {
      state.savedItems = state.savedItems.filter((item) => item.id !== action.payload);
      localStorage.setItem("savedList", JSON.stringify(state.savedItems));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  saveForLater,
  moveToCart,
  removeFromSaved,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.carts.cartItems;
export const selectSavedItems = (state) => state.carts.savedItems;
export const selectAppliedPromo = (state) => state.carts.appliedPromo;

// Derived totals
export const selectSubtotal = (state) =>
  state.carts.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const selectDiscount = (state) => {
  const subtotal = selectSubtotal(state);
  return state.carts.appliedPromo ? subtotal * state.carts.appliedPromo.discount : 0;
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
