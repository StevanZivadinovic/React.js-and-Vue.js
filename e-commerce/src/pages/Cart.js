import React, { useEffect, useState } from "react";
import "./../style/cart.scss";
import listsOfImage from "./../helperFunc/images";
import { db } from "../config/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Pagination } from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const [categoryOfProduct, setCategoryOfProduct]=useState('proizvodi')
  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);


  
  
  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let q = query(collection(db, `${localStorage.getItem('seasson')}Collection`));

  useEffect(() => {
   
    setProducts([]);
    onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        setProducts((products) => [...products, doc.data()]);
      });
    });
  }, []);

  const handleBackButton = (e) => {
    navigate("/");
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };

  return (
    <div className="mainCart">
      <div className="buttonsCartTop">
      <button className="backButton" onClick={(e) => handleBackButton(e)}>
        Back1
      </button>
      <button className="addButton" >
        Add Product
      </button>
      </div>
      <div className="wrapper">
        <h1>Your bag</h1>
        <div className="top">
          <button className="topButton">Continue shoping</button>
          <div className="topTexts">
            <span className="topText">Shopping Bag(0)</span>
            <span className="topText">Your Wishlist</span>
          </div>
          <button className="topButton">Checkout now</button>
        </div>
        <div className="bottom">
          <div className="info">
            {currentPosts.map((a, i) => {
              return (
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
                      <div style={{fontSize:'2rem'}} className='colorDiv'
                        
                      >Color: <span className="productColor"
                      style={{ backgroundColor: `${a.color}` }}></span></div>
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
