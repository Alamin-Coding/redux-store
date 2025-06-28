import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products/getProducts", async (URL) => {
  const response = await fetch(URL || "https://dummyjson.com/products");
  return response.json();
});

const initialState = {
    products: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },    
});
export default productSlice.reducer;
