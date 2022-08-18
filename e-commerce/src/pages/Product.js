import React from "react";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import "./../style/product.scss";

export const Product = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Announcement></Announcement>
      <div className="mainProduct">
        <img
          src={
            "https:images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
          }
        ></img>
        <div className="contentProduct">
          <h2>Denim Jumpsuit</h2>
          <p>
            Vix regione volutpat an. Ut nonumes scriptorem vituperatoribus nec,
            altera quaerendum voluptatibus mea eu. Tota velit sea in. Cum in
            justo velit tractatos, malis fabulas sea ex. No sed eros eripuit
            euripidis, brute pertinax te eam, cu has iudico partem cetero. Aeque
            suavitate euripidis has id.
          </p>
          <div className="price">$ 20</div>
          <div className="colorSize">
            <div className="color">
              <span>Color</span>
              <div className="colors">
                <div className="color1"></div>
                <div className="color2"></div>
                <div className="color3"></div>
              </div>
            </div>
            <div className="size">
              <span>Size</span>
              <select>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
          <div className="plusMinusAndButton">
            <div className="plusMinus">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};
