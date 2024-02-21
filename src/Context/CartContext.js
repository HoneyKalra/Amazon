/*import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useRef,
  useEffect,
} from "react";
import { reducer } from "../Components/Reducer/Reducer";
import { quantity } from "../Shared/Constants";
const cartContext = createContext();
export function useGlobalContext() {
  return useContext(cartContext);
}

function CartContext(props) {
  const initialState = {
    itemSelectedAgain: false,
    cartCount: localStorage.getItem("cartCount")
      ? JSON.parse(localStorage.getItem("cartCount"))
      : 0,
    shoppedProducts: localStorage.getItem("shoppedProducts")
      ? JSON.parse(localStorage.getItem("shoppedProducts"))
      : [],
    subTotal: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem(
      "shoppedProducts",
      JSON.stringify(state.shoppedProducts)
    );
    localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
  }, [state.shoppedProducts]);

  function fetchProduct(productDetails) {
    dispatch({
      type: "PRODUCT_FETCHED_CART_UPDATED",
      payload: productDetails,
    });
    dispatch({ type: "CART_COUNT_UPDATED" });
  }

  function updatedCartCountGetter(updatedCartCount) {
    dispatch({ type: "QUANTITY_SELECTED_BY_USER", payload: updatedCartCount });
  }
  function deleteItem(itemToDelete) {
    console.log(itemToDelete);
    dispatch({ type: "REMOVE_PRODUCT", payload: itemToDelete });
  }

  return (
    <cartContext.Provider
      value={{
        ...state,
        fetchProduct,
        updatedCartCountGetter,
        deleteItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
export default CartContext;
*/
