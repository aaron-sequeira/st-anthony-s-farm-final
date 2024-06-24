import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ShopContext } from "../Context/Shop-Context";

export const Cards = (props) => {
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

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <>
      <Card style={{ width: "22rem", border: "none" }} className="hove mb-4">
        <Card.Img variant="top" className="cd" src={imgdata} />
        <div className="card_body">
          <div className="upper_data d-flex justify-content-between align-items-center">
            <h4 className="mt-2">{rname}</h4>
            <span>{rating}&nbsp;★</span>
          </div>

          <div className="lower_data d-flex  justify-content-between">
            <h5>{address}</h5>
            <span>{price}</span>
          </div>

          <div className="extra"></div>

          <div className="last_data">
            <img src={arrimg} className="limg" alt="" />
            <p>{somedata}</p>
            <img src={delimg} className="laimg" alt="" />
          </div>
        </div>
        <button onClick={() => addToCart(id)} className="add-to-cart">
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </Card>
    </>
  );
};
