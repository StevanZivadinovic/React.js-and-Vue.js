import React from 'react'
import './../style/categories.scss';
import { categoriesData } from './../data/data.js'
import {useState, useEffect} from 'react';
// import image from './../img/categories1.jpg'
import Item from './../components/Item'



function Categories() {

    const [nizSrc, setNizSrc] = useState([])

    useEffect(() => {
       
        categoriesData.forEach(cat=>{
            setNizSrc([...nizSrc, cat])
        })
        
    }, [])
    console.log(nizSrc)
    return (
        <div className='mainCategories'>
            {categoriesData.map(categorie=>{
                
               return <Item key={categorie.id} categorie={categorie}/>
                // return  <div className='categorie' ><img alt='image' src={categorie.img}></img></div>
                      
                
            })}
        </div>
    )
}

export default Categories
