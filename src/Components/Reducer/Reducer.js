import { quantity } from "../../Shared/Constants";

export function reducer(state, action) {
  if (action.type === "PRODUCT_FETCHED_CART_UPDATED") {
    let productSelectedAgain = state.shoppedProducts.find(
      (product) => product.id === action.payload.id
    );
    if (productSelectedAgain) {
      state.itemSelectedAgain = true;
      productSelectedAgain.amount += 1;
    } else {
      return {
        ...state,
        shoppedProducts: [...state.shoppedProducts, action.payload],
      };
    }
  }

  if (action.type === "CART_COUNT_UPDATED") {
    let productsCount = 0;
    let amountToPay = 0;
    state.shoppedProducts.forEach((product) => {
      productsCount = productsCount + product.amount;
      amountToPay = product.amount * product.item_Price;
    });

    return { ...state, cartCount: productsCount, subTotal: amountToPay };
  }

  if (action.type == "QUANTITY_SELECTED_BY_USER") {
    return {
      ...state,
      cartCount: action.payload,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    let filteredProducts = state.shoppedProducts.filter(
      (product) => product.id !== action.payload.id
    );

    return { ...state, shoppedProducts: filteredProducts };
  }

  /*  localStorage.setItem(
    "shoppedProducts",
    JSON.stringify(state.shoppedProducts)
  );
  localStorage.setItem("cartCount", JSON.stringify(state.cartCount));*/

  return state;
}
