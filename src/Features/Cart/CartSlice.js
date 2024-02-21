import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  shoppedProducts: [],
  cartCount: 0,
  subTotal: 0,
  itemSelectedAgain: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let productAlreadyExists = state.shoppedProducts.find(
        (product) => product.id === action.payload.id
      );
      if (productAlreadyExists) {
        productAlreadyExists.amount++;
      } else {
        state.shoppedProducts.push(action.payload);
      }
    },
    updatedCartCountGetter: (state, action) => {
      console.log(action.payload);
      state.cartCount = action.payload;
    },
  },
});
export const { addItemToCart, updatedCartCountGetter } = cartSlice.actions;
export default cartSlice.reducer;
