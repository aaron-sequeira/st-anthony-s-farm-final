import React, { useContext } from "react";
import { ShopContext } from "../Context/Shop-Context";
import "./CartItem.css";
const CartItem = (props) => {
  const {
    id,
    rname,
    imgdata,
    address,
    delimg,
    somedata,
    price,
    rating,
    arrimg,
  } = props.data;

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
  } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={imgdata} />
      <div className="discription">
        <p>
          <b>{rname}</b>
        </p>
        <p>{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
// ₹
