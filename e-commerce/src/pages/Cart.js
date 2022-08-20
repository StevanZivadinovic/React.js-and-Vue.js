import React from "react";
import "./../style/cart.scss";

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
                <img src="https://www.freepik.com/psd/plain-t-shirt" alt="" />
                <div className="details">
                  <div className="productName">
                    <b>Product:</b> Jessie thunder name
                  </div>
                </div>
                <span className="productId">
                  <b>ID:</b> 382468236428
                </span>
                <div className="productColor"></div>
                <span className="productSize"> <b>Size:</b> 37.5</span>
              </div>
              <div className="priceDetail">price</div>
            </div>
          </div>
          <div className="summary">summary</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
