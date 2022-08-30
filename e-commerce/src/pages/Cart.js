import React from "react";
import "./../style/cart.scss";
import cart1 from './../img/cart.jpg'

const Cart = () => {
  return (
    <div className="mainCart">
      <div className="wrapper">
        <h1>Your bag</h1>
        <div className="top">
          <button className="topButton">Continue shoping</button>
          <div className="topTexts">
            <span className="topText">Shopping Bag(2)</span>
            <span className="topText">Your Wishlist</span>
          </div>
          <button className="topButton">Checkout now</button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="productDetail">
                <img src={cart1} alt="" />
                <div className="details">
                  <div className="productName">
                    <b>Product:</b> Jessie thunder name
                  </div>
                <span className="productId">
                  <b>ID:</b> 38246823642
                </span>
                <div className="productColor"></div>
                <span className="productSize"> <b>Size:</b> 37.5</span>
                </div>
              </div>
              <div className="priceDetail">$10</div>
            </div>
          </div>
          <div className="summary">summary</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
