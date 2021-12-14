import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories.js'

function Home() {

   
    return (
        <div className='mainHome'>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
        </div>
    )
}

export default Home
