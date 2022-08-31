import React from 'react'
import './../style/navbar.scss'
import {
    useNavigate
  } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();

    let handleNavigateRegister = ()=>{
        navigate('/register')
    }

    let handleNavigateLogin = ()=>{
        navigate('/login')
    }
    return (
        <div className='mainNavbar'>
            <div className='first'>EN<span><input type='search'></input><i className="fas fa-search"></i></span></div>
            <div className='second'>LAMA.</div>
            <div className='third'>
                <div>

                <span className='registerButton' onClick={handleNavigateRegister}>REGISTER</span>
                <span onClick={handleNavigateLogin}>SIGN IN</span>
                <span><i className="fas fa-shopping-cart"></i></span>
                </div>

            </div>
    
        </div>
    )
}
