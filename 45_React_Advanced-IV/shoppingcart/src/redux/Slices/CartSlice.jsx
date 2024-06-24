import { createSlice } from "@reduxjs/toolkit";


// 1:- Create Slice
export const CartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers: {
        add:() => {},
        remove:() => {},
    }
});


// 2:- Export functions and reducers
export const { add , remove } = CartSlice.actions;
export default CartSlice.reducer;