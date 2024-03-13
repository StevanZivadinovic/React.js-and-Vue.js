import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../style/navbar.scss';
import krst from './../assets/krst_beli.png';
// Za slike sa font awesoma, uzimas cdn kod sa njihovog sajta koji se nalazi na tvom profilu,
//i kopiras ga u index.html, u public folderu!!!!!!!!!!!!!!!!!

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { changeLanguage } from 'i18next';

export default function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Православне иконе - Ниш
          </Link>
          <div>
            <img alt="" id="krst" src={krst}></img>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Почетна
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ikonopisac"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                О иконописцу
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/galerija"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Галерија
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/kontakt"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Контакт
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" onClick={() => changeLanguage('sr-Cyrl')}>
                ср
              </button>
              <button type="button" onClick={() => changeLanguage('en')}>
                en
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
