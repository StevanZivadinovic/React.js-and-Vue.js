import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories.js'
import Products from '../components/Products'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'




function ShopingCategoryPage(prop) {

    return (
        <div className='mainHome'>
            <Navbar/>
            <Announcement/>
           
            <Products/>
            <Newsletter/>
            <Footer/>
            
        </div>
    )
}

export default ShopingCategoryPage;
