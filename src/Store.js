import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Features/Cart/CartSlice";
export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
