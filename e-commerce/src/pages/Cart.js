import React, { useEffect, useState } from "react";
import "./../style/cart.scss";
import listsOfImage from "./../helperFunc/images";
import { db } from "../config/firebase";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { Pagination } from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import { User } from "../components/AuthContext/AuthContext";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const [categoryOfProduct, setCategoryOfProduct] = useState("proizvodi");
  const [numberOfProductsInBug, setNumberOfProductsInBug] = useState([]);
  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

 const {user} = User()

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let q = query(collection(db, `${localStorage.getItem("seasson")}Collection`));
  let qBug = query(collection(db, `bag`));

  const funcGetProductsFromBag = () => {
    onSnapshot(qBug, (snapshot) => {
      setNumberOfProductsInBug([]);
      snapshot.docs.map((doc) => {
        setNumberOfProductsInBug((numberOfProductsInBug) => [
          ...numberOfProductsInBug,
          doc.data(),
        ]);
      });
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    setProducts([]);
    onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        setProducts((products) => [...products, doc.data()]);
      });
    });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    funcGetProductsFromBag();

    return () => {
      controller.abort();
    };
  }, []);

  const handleBackButton = (e) => {
    navigate("/");
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleAddProduct = (e) => {
    navigate("/addProducts");
  };

  const handleAddProductToBag = (productToBuy) => {
    setDoc(doc(db, `bag`, `${(Math.random() * 10000000).toFixed(0)}`), {
      id: productToBuy.id,
      productName: productToBuy.productName,
      color: productToBuy.color,
      size: productToBuy.size,
      price: productToBuy.price,
      summary: productToBuy.summary,
    })
      .then(() => {
        console.log("product added to bug");

        funcGetProductsFromBag();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mainCart">
      <div className="buttonsCartTop">
        <button className="backButton" onClick={(e) => handleBackButton(e)}>
          Back1
        </button>
        {user ? <button
          className="addButton"
          onClick={(e) => {
            handleAddProduct(e);
          }}
        >
          Add Product
        </button> : ''}
      </div>
      <div className="wrapper">
        <h1>Your shop</h1>
        <div className="top">
         
          <div className="topTexts">
            <span
              className="topText"
              onClick={() => {
                navigate("/bag");
              }}
            >
              Shopping Bag({numberOfProductsInBug.length})
            </span>
            <span className="topText">Your Wishlist</span>
          </div>
          
        </div>
        <div className="bottom">
          <div className="info">
            {currentPosts.map((a, i) => {
              return (
                <div className="product" key={i}>
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
            {currentPosts.map((a) => {
              {
                return (
                  <div className="summary" key={a.id}>
                    {a.summary}
                    <span>
                      <button onClick={(e) => handleAddProductToBag(a)}>
                        Buy!
                      </button>
                    </span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <Pagination
        paginate={paginate}
        postPerPage={postPerPage}
        totalPosts={products}
        handleCurrentPage={(page) => handleCurrentPage(page)}
      ></Pagination>
    </div>
  );
};

export default Cart;
