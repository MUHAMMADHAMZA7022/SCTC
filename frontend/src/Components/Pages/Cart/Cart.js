import React, { Fragment } from "react";
import "./Cart.css";
import CartItem from "./cartitem";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeItemsFromCart } from "../../../redux/action/cartaction";
import { Link, useNavigate } from "react-router-dom";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
function Cart() {


  const history = useNavigate();

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history("/checkout");
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartOutlinedIcon />
          <Typography>No Course in Your Cart</Typography>
          <Link className="btn_primary" to="/courses">
            View Course
          </Link>
        </div>
      ) : (
        <Fragment>
          <div className="cart">
            <h1>Shopping Cart</h1>

            {cartItems &&
              cartItems.map((item, key) => (
                <CartItem
                  item={item}
                  deleteCartItems={deleteCartItems}
                  key={key}
                />
              ))}

            <div className="cart_checkout">
              <span className="crs_total">Total:</span>
              <span className="checkout_price">
                <span>PKR</span>
                {`${cartItems.reduce((acc, item) => acc + item.price, 0)}`}
              </span>
              <button className="btn_primary" onClick={checkoutHandler}>
                Checkout
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Cart;
