import { collection, onSnapshot, query } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import listsOfImage from "../helperFunc/images";
import "./../style/bug.scss";

export const Bag = () => {
  const [productToBuy, setProductToBuy] = useState([]);
  const [noDataText, setnoDataText] = useState("The bag is empty!");
  const productListDiv = useRef();
  const navigate = useNavigate()

  let q = query(collection(db, `bag`));

  useEffect(() => {
    const controller = new AbortController();

   
    onSnapshot(q, (snapshot) => {
      setProductToBuy([]);
      snapshot.docs.map((doc) => {
        let c = doc.data();
        c["docID"] = doc.id;
        setProductToBuy((productToBuy) => [...productToBuy, c]);
      });
    });

    return () => {
      controller.abort();
    };
  }, []);

  const handleDeleteProductFromBag = (docBag) => {
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((docFromBagDB) => {
        if (docFromBagDB.doc.id === docBag.docID) {
          console.log(docFromBagDB.doc.id, docBag.docID);
          deleteDoc(doc(db, "bag", docFromBagDB.doc.id))
            .then(() => {
              console.log("data is deleted");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("There is no sach product");
        }
      });
    });
  };

  const handleBackToCart = ()=>{
    navigate('/cart');
  }

  return (
    <div className="mainBug">
      <h1 className="mainBugTitle">Bag</h1>
      <h2 className="emptyBagTitle">
        {productToBuy.length == 0 ? noDataText : ""}
      </h2>
      <div className="topButtons">
      <button className="topButton" onClick={handleBackToCart}>Continue shoping</button>
      <button className="topButton">Checkout now</button>
      </div>
      <div className="mainBugContent">
        <div className="">
          {productToBuy.map((a, i) => {
            return (
              <div
                data-id={a.docID}
                className="product"
                key={i}
                ref={productListDiv}
              >
                <div className="productDetail">
                  <img src={listsOfImage[i]} alt="" />
                  <div className="details">
                    <div className="productName">
                      <b>Product:</b> {a.productName}
                    </div>
                    <span className="productId">
                      <b>ID:</b> {a.id}
                    </span>
                    <div style={{ fontSize: "2rem" }} className="colorDiv">
                      Color:{" "}
                      <span
                        className="productColor"
                        style={{ backgroundColor: `${a.color}` }}
                      ></span>
                    </div>
                    <span className="productSize">
                      {" "}
                      <b>Size: </b>
                      {a.size}
                    </span>
                  </div>
                </div>
                <div className="priceDetail">${a.price}</div>
              </div>
            );
          })}
        </div>
        <div className="summaryContainer">
          {productToBuy.map((a, i) => {
            {
              return (
                <div data-id={a.docID} className="summary" key={i}>
                  {a.summary}
                  <span>
                    <button onClick={(e) => handleDeleteProductFromBag(a)}>
                      Delete
                    </button>
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
