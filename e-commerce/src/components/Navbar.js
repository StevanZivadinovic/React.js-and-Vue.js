import React from 'react'
import './../style/navbar.scss'
export default function Navbar() {
    return (
        <div className='mainNavbar'>
            <div className='first'>EN<span><input type='search'></input><i class="fas fa-search"></i></span></div>
            <div className='second'>LAMA.</div>
            <div className='third'>
                <div>

                <span>REGISTER</span>
                <span>SIGN IN</span>
                <span><i className="fas fa-shopping-cart"></i></span>
                </div>

            </div>
    
        </div>
    )
}
