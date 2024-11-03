import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

export const SideBarNavList = ({closeMobileMenu}) => {
    const { t } = useTranslation();
  return (
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
  )
}
