import React from 'react';
import './../style/addProducts.scss'

export const AddProducts = () => {
  return (
    <div className='mainAddProducts'>
        <h1>Add product</h1>
        <form action="" className='formAddProducts'>
            <label htmlFor="">ID:</label><input type='text'></input>
            <label htmlFor="">Product name:</label><input type='text'></input>
            <label htmlFor="">Color:</label><input type='text'></input>
            <label htmlFor="">Size:</label><input type='text'></input>
            <label htmlFor="">Price:</label><input type='text'></input>
            <label htmlFor="">Summary:</label><input type='text'></input>
            <button type="submit">Add product</button>
        </form>
    </div>
  )
}
