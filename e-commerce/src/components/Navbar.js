import React from 'react'
import './../style/navbar.scss'
import {
    useNavigate
  } from "react-router-dom";
import { User } from './AuthContext/AuthContext';
export default function Navbar() {

    const navigate = useNavigate();
    const {user,logOut}=User()

    let handleNavigateRegister = ()=>{
        navigate('/register');
    }

    let handleNavigateLogin = ()=>{
        navigate('/login');
    }

    let handleLogout = ()=>{
        try{

            navigate('/login');
            logOut(user.email);
            console.log('logout')
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className='mainNavbar'>
            <div className='first'>EN<span><input type='search'></input><i className="fas fa-search"></i></span></div>
            <div className='second'>LAMA.</div>
            <div className='third'>
                <div>
                {user?.email && <span className='logoutButton' onClick={handleLogout}>LOGOUT</span>}
                {!user?.email && <span className='registerButton' onClick={handleNavigateRegister}>REGISTER</span>}
                {!user?.email && <span onClick={handleNavigateLogin}>SIGN IN</span>}
                <span><i className="fas fa-shopping-cart"></i></span>
                </div>

            </div>
    
        </div>
    )
}
