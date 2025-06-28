import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSingleProducts = createAsyncThunk("products/single-product", async (URL) => {
  const response = await fetch(URL);
  return response.json();
});

const initialState = {
    item: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
}

const singleProductSlice = createSlice({
  name: "single-product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSingleProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(getSingleProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },    
});
export default singleProductSlice.reducer;
