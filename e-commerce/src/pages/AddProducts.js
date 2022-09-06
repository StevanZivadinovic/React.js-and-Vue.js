import React, { useRef, useState } from 'react';
import './../style/addProducts.scss';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../config/firebase';

export const AddProducts = () => {

  const [id, setId] = useState('');
  const [productName, setProductName] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [summary, setSummary] = useState('');
  const handleResetForm=(e)=>{
    e.target.reset()
  }


   

  const handleSubmit = (e) =>{
    e.preventDefault();

    setDoc(doc(db, `${localStorage.getItem('seasson')}Collection`, `${(Math.random()*10000000).toFixed(0)}`), {
      id: id,
      productName: productName,
      color: color,
      size:size,
      price:price,
      summary:summary
    }).then(()=>{
      console.log('product added');
      

    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='mainAddProducts'>
        <h1>Add product</h1>
        <form action="" className='formAddProducts' onSubmit={(e)=>handleResetForm(e)}>
            <label htmlFor="">ID:</label><input type='text' onChange={(e)=>setId(e.target.value)}></input>
            <label htmlFor="">Product name:</label><input type='text' onChange={(e)=>setProductName(e.target.value)}></input>
            <label htmlFor="">Color:</label><input type='text' onChange={(e)=>setColor(e.target.value)}></input>
            <label htmlFor="">Size:</label><input type='text' onChange={(e)=>setSize(e.target.value)}></input>
            <label htmlFor="">Price:</label><input type='number' onChange={(e)=>setPrice(e.target.value)}></input>
            <label htmlFor="">Summary:</label><input type='text' onChange={(e)=>setSummary(e.target.value)}></input>
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Add product</button>
        </form>
    </div>
  )
}
