import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../style/navbar.scss';
import krst from './../assets/krst_beli.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { LanguageNav } from './languageNav';
import { SideBarNavList } from './sideBarNavList';

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
           <LanguageNav cssClass={'language-select-ul-navbar'} width={40}/>
            </div>
            <div className="menu-icon-side-navbar" onClick={closeMobileMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <SideBarNavList closeMobileMenu={closeMobileMenu}/>
          </div>
        </div>
        <LanguageNav cssClass={'language-select-ul'} width={24}/>
      </nav>
    </>
  );
}
