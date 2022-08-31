import React, { useEffect, useState } from "react";
import "./../style/cart.scss";
import listsOfImage from './../helperFunc/images'
import { db } from "../config/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

const Cart = () => {

  const [products, setProducts] = useState([]);
  

  let q= query(collection(db, 'proizvodi'))
  useEffect(() => {
    setProducts([]);
    onSnapshot(q,(snapshot)=>{
      snapshot.docs.map(doc=>{
        console.log(doc.data())
        setProducts(products=>[...products, doc.data()])
      })
    })
  }, [])
  console.log(products)
  
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
            {
              products.map((a,i)=>{

                return(
            <div className="product" key={a.id}>
              <div className="productDetail">
                <img src={listsOfImage[i]} alt="" />
                <div className="details">
                  <div className="productName">
                    <b>Product:</b> {a.productName}
                  </div>
                <span className="productId">
                  <b>ID:</b> {a.id}
                </span>
                <div className="productColor" style={{backgroundColor:`${a.color}`}}></div>
                <span className="productSize"> <b>Size: </b>{ a.size}</span>
                </div>
              </div>
              <div className="priceDetail">${a.price}</div>
            </div>
                )
              })

            }
            </div>
            <div className="summaryContainer">

            {
              products.map(a=>{{

                return <div className="summary" key={a.id}>{a.summary}</div>
              }})
            }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
