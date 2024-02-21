import { useState } from "react";
import { useGlobalContext } from "../../Context/CartContext";
import { updatedCartCountGetter } from "../../Features/Cart/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  yourLists,
  yourAccount,
  langOptions,
  navItems,
  quantity,
} from "../../Shared/Constants";
import Navbar from "../Nav/Navbar";
import SubNav from "../Nav/SubNav";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {
  /*let {
    shoppedProducts,
    updatedCartCountGetter,
    subTotal,
    cartCount,
    deleteItem,
  } = useGlobalContext();*/
  const dispatch = useDispatch();
  const { cartCount, shoppedProducts, subTotal } = useSelector(
    (state) => state.cart
  );

  const [isSelectClicked, setIsSelectClicked] = useState(false);

  function handleSelectChange(e, id) {
    let totalCartCount = 0;
    shoppedProducts.map((shoppedProduct) => {
      if (id == shoppedProduct.id) {
        shoppedProduct.amount = Number(e.target.value);
        if (shoppedProduct.amount === 0) {
          // deleteItem(shoppedProduct);//
        }
      }
      totalCartCount = totalCartCount + Number(shoppedProduct.amount);
    });
    console.log(totalCartCount);
    dispatch(updatedCartCountGetter(totalCartCount));
  }

  function handleSelectClick() {
    setIsSelectClicked(true);
  }

  return (
    <>
      <Navbar
        yourLists={yourLists}
        yourAccount={yourAccount}
        langOptions={langOptions}
        cartCount={props.cartCount}
        inpFocus={props.inpFocus}
      />
      <SubNav navItems={navItems} />
      {shoppedProducts.length === 0 ? (
        <div className="empty-cart-container">
          <div className="empty-cart">
            <h1>Your Shopping Cart is Empty</h1>
          </div>
        </div>
      ) : (
        <div className="shopping-main-container">
          <div className="shopping-details-container">
            <div className="heading-price">
              <h1 className="shopping-h1">Shopping Cart</h1>

              <span id="price_Text">Price</span>
            </div>
            {shoppedProducts.map((shoppedProduct) => (
              <div className="item_Cart_Data">
                <div>
                  <img
                    src={shoppedProduct.img}
                    style={{ width: "210px", marginRight: "30px" }}
                  />
                </div>
                <div style={{ width: "615px" }}>
                  <h4 id="item_Heading">
                    {shoppedProduct.heading.slice(0, 130)}
                  </h4>
                  <br />
                  <br></br>
                  <p style={{ color: "green", fontSize: "15px" }}>In stock</p>

                  <span id="cart_Small_Text">
                    Sold By:
                    <a href="#" id="cart_Links">
                      NHAM Apparels
                    </a>
                  </span>
                  <br />
                  <span id="cart_Small_Text">
                    Gift options not available.
                    <a href="#" id="cart_Links">
                      Learn more
                    </a>
                  </span>
                  <br />
                  <span id="cart_Small_Text">Eligible for free delivery</span>
                  <br />
                  <span id="cart_Small_Text">Color: Blue</span>
                  <br />
                  <select
                    onClick={handleSelectClick}
                    value={
                      shoppedProduct.amount > 1 ? shoppedProduct.amount : 1
                    }
                    className="shop_cart"
                    onChange={(e) => {
                      handleSelectChange(e, shoppedProduct.id);
                    }}
                  >
                    {!isSelectClicked ? (
                      <option>
                        {shoppedProduct.amount > 1 ? shoppedProduct.amount : 1}
                      </option>
                    ) : (
                      <>
                        {quantity.map((quantityNow) => {
                          return <option>{quantityNow}</option>;
                        })}
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <span id="item_Rate">
                    {shoppedProduct.rupee}
                    {shoppedProduct.item_Price}.00
                  </span>
                </div>
                <br />
              </div>
            ))}
          </div>
          <div className="cart_Sub_Total">
            <h4>
              Subtotal ({cartCount}
              {cartCount > 1 ? "Items" : "Item"}):
              <span style={{ color: "black", fontWeight: "bolder" }}>
                {shoppedProducts[0].rupee}
                {subTotal}.00
              </span>
            </h4>
            <h3>Your order is eligigible for free delivery</h3>
          </div>
        </div>
      )}
    </>
  );
}
