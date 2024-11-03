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
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    console.log(click);
    setClick(false);
  };
  return (
    <>
      <nav className="navbar relative">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="navbar-logo-text" onClick={closeMobileMenu}>
              {t('pravoslavne_ikone_nis')}
            </Link>
            <div>
              <img alt="krst" id="krst" src={krst}></img>
            </div>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={!click ? 'sideBarWrapper' : 'sideBarWrapper active'}>
            <div className="menu-icon-side-navbar" onClick={closeMobileMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className="navmenuList">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  {t('pocetna')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ikonopisac"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {t('o_ikonopiscu')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/galerija"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {t('galerija')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/kontakt"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {t('kontakt')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={localStorage.getItem('i18nextLng')}
          className="absolute languageSelect"
        >
          <option value="sr-Cyrl">Српски</option>
          <option value="en">English</option>
        </select>
      </nav>
    </>
  );
}
