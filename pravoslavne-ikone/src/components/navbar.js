import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../style/navbar.scss';
import krst from './../assets/krst_beli.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
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
            <div className='menu-language-side-bar'>
            <ul className="language-select-ul-navbar">
              <li onClick={() => changeLanguage('sr-Cyrl')}>
                <img
                  style={{ margin: '0px', cursor: 'pointer' }}
                  width="40"
                  height=""
                  src="https://img.icons8.com/color/48/sernia-circular.png"
                  alt="Serbian"
                />
              </li>
              <li><span>|</span></li>
              <li onClick={() => changeLanguage('en')}>
                <img
                  style={{ margin: '0px', cursor: 'pointer' }}
                  width="40"
                  height=""
                  src="https://img.icons8.com/color/48/great-britain-circular.png"
                  alt="English"
                />
              </li>
            </ul>
            </div>
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
        <ul className="language-select-ul">
              <li onClick={() => changeLanguage('sr-Cyrl')}>
                <img
                  style={{ margin: '0px', cursor: 'pointer' }}
                  width="24"
                  height="24"
                  src="https://img.icons8.com/color/48/sernia-circular.png"
                  alt="Serbian"
                />
              </li>
              <li><span>|</span></li>
              <li onClick={() => changeLanguage('en')}>
                <img
                  style={{ margin: '0px', cursor: 'pointer' }}
                  width="24"
                  height="24"
                  src="https://img.icons8.com/color/48/great-britain-circular.png"
                  alt="English"
                />
              </li>
            </ul>
      </nav>
    </>
  );
}
