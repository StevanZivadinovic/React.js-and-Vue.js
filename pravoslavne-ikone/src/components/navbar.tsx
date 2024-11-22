import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <nav className="navbar bg-gradient-to-b from-customRed to-customGray h-[80px] flex justify-center items-center
      text-[1.2rem] w-full sticky top-0 z-[101]">
        <div className="mobile:w-full mobile:flex mobile:justify-between mobile:items-center flex justify-center items-center h-[80px]">
          <div className="mobile:text-left mobile:w-[80%] mobile:text-[20px] mobile:justify-left flex items-left">
            <Link to="/" className="mobile:text-[1.2rem] text-white justify-start self-center ml-[20px]
            cursor-pointer text-[2rem] no-underline" onClick={closeMobileMenu}>
              {t('pravoslavne_ikone_nis')}
            </Link>
            <div>
              <img alt="krst" className='mobile:hidden w-[50px] text-white' src={krst}></img>
            </div>
          </div>

          <div className="mobile:flex mobile:text-[1.8rem] mobile:mr-[1.5rem] cursor-pointer hidden" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={!click ? 'mobile:hidden' : ' mobile:z-[100] mobile:fixed mobile:left-0 mobile:top-0 mobile:h-[100vh] mobile:w-full mobile:flex-col mobile:justify-center mobile:items-center mobile:bg-[#242424fa]'}>
            <div className='hidden mobile:absolute mobile:flex mobile:top-0 mobile:left-0 mobile:m-[1.5rem]
            text-[2rem] w-[30%]'>
           <LanguageNav cssClass={'mobile:flex mobile:list-none mobile:w-full'} width={40}/>
            </div>
            <div className="mobile:absolute mobile:flex mobile:top-0 mobile:right-0 mobile:m-[1.5rem] mobile:text-[2rem] mobile:cursor-pointer hidden" onClick={closeMobileMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <SideBarNavList closeMobileMenu={closeMobileMenu}/>
          </div>
        </div>
        <LanguageNav cssClass={'mobile:hidden flex list-none'} width={24}/>
      </nav>
    </>
  );
}
