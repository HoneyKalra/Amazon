import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootComponent from "./RootComponent";
import SignIn from "./Components/Account/SignIn";
import ProductsDetialsItem from "./Components/ProductsInfo/ProductsDetialsItem";
import Checkout from "./Components/ProductsInfo/CheckOut";
import ShoppingCart from "./Components/Shopping Cart/ShoppingCart";

function App(props) {
  const [inpFocus, setInpFocus] = useState(false);

  function outsideInputclickHandler(event) {
    event.target.name === "input-search"
      ? setInpFocus(true)
      : setInpFocus(false);
  }

  return (
    <div
      className="App"
      name="App-container"
      onClick={outsideInputclickHandler}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<RootComponent inpFocus={inpFocus} />}
          ></Route>
          <Route
            path="/SignIn"
            element={<SignIn inpFocus={inpFocus} />}
          ></Route>
          <Route
            path="/ProductsDetialsItem/:id"
            element={<ProductsDetialsItem inpFocus={inpFocus} />}
          ></Route>
          <Route path="/CheckOut" element={<Checkout />}></Route>
          <Route
            path="/ShoppingCart"
            element={<ShoppingCart inpFocus={inpFocus} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
