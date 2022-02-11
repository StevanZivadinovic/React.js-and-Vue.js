import React, { useState, useEffect }  from "react";
import { Link } from 'react-router-dom';
// import  Button  from './button';
import './../style/navbar.scss'
import krst from './../assets/krst_beli.png'
// Za slike sa font awesoma, uzimas cdn kod sa njihovog sajta koji se nalazi na tvom profilu,
//i kopiras ga u index.html, u public folderu!!!!!!!!!!!!!!!!!

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'  
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>

    <nav className='navbar'>
      <div className='navbar-container'>
     
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Православне иконе - Ниш 
          
        </Link>
        <div>
          <img id='krst'  src={krst}></img>
        </div>
        {/* <i class="fa-solid fa-bars"></i> */}
        
        <div className='menu-icon' onClick={handleClick}>
        <FontAwesomeIcon icon={click ?  faTimes :faBars} />
          {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
          
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Почетна
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/ikonopisac'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              О иконописцу
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/galerija'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Галерија
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/kontakt'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Контакт
            </Link>
          </li>
          
        </ul>
     
      </div>
    </nav>
  </>
  );
}
