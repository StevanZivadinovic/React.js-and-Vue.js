import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase';
import listsOfImage from '../helperFunc/images';

export const Bag = () => {
    const [productToBuy, setProductToBuy] = useState([1,2,3]);


    let q = query(collection(db, `bug`));

  useEffect(() => {

    const controller = new AbortController();
   
    setProductToBuy([]);
    onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        setProductToBuy((productToBuy) => [...productToBuy, doc.data()]);
      });
    });

    return (()=>{
      controller.abort();
    })
  }, []);

  return (
    <div>
        <h1>Bag</h1>

        <div className=''>
        {productToBuy.map((a, i) => {
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
    </div>
  )
}
