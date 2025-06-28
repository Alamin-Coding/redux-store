import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice.js";
import wishlistSlice from "../features/wishlist/wishlistSlice.js";
import cartSlice from "../features/cart/cartSlice.js";
import singleProductSlice from "../features/product/singleProductSlice.js"
const store = configureStore({
  reducer: {
    products: productSlice,
    wishlist: wishlistSlice,
    carts: cartSlice,
    singleProduct: singleProductSlice
  },
});

export default store;