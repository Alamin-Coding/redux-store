import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist: (state, action)=> {
            const isHaveItem = state.find((item) => item.id === action.payload.id)
            
            if (!isHaveItem) {
                state.push(action.payload)
            }
        },
        removeWishlist: (state, action) => state.filter(item => item.id !== action.payload)
    }
})
export const {addToWishlist, removeWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer