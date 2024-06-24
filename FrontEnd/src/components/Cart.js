import React, { useContext } from "react";
import FoodData from "./FoodData";
import { ShopContext } from "../Context/Shop-Context";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {FoodData.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ₹{totalAmount}</p>

          <button onClick={() => navigate("/Services")}>
            Continue Shopping
          </button>
          <button type="submit" onClick={() => {}}>
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};
