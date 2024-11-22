import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { sideBarNavListType } from '../types/types';

export const SideBarNavList = ({closeMobileMenu}:sideBarNavListType) => {
    const { t } = useTranslation();
  return (
    <ul className="mobile:justify-center mobile:h-full mobile:self-center mobile:flex mobile:flex-col mobile:items-center mobile:p-0 mobile:m-0 mobile:w-full flex flex-1 list-none text-center w-[60vw] justify-end mr-8">
              <li className='mobile:w-full'>
                <Link to="/" className="mobile:hover:rounded-none mobile:hover:text-[#242424] mobile:hover:bg-white mobile:text-center mobile:p-[2rem_0rem] mobile:w-full mobile:table text-white flex items-center 
                no-underline p-[0rem_1rem] h-[100%] relative t-0 border-none border-0 hover:border-b-[2px] 
                hover:border-solid hover:border-b-white" onClick={closeMobileMenu}>
                  {t('pocetna')}
                </Link>
              </li>
              <li className='mobile:w-full'>
                <Link
                  to="/ikonopisac"
                  className="mobile:hover:rounded-none mobile:hover:text-[#242424] mobile:hover:bg-white mobile:text-center mobile:p-[2rem_0rem] mobile:w-full mobile:table text-white flex items-center 
                no-underline p-[0rem_1rem] h-[100%] relative t-0 border-none border-0 hover:border-b-[2px] 
                hover:border-solid hover:border-b-white"
                  onClick={closeMobileMenu}
                >
                  {t('o_ikonopiscu')}
                </Link>
              </li>
              <li className='mobile:w-full'>
                <Link
                  to="/galerija"
                  className="mobile:hover:rounded-none mobile:hover:text-[#242424] mobile:hover:bg-white mobile:text-center mobile:p-[2rem_0rem] mobile:w-full mobile:table text-white flex items-center 
                  no-underline p-[0rem_1rem] h-[100%] relative t-0 border-none border-0 hover:border-b-[2px] 
                  hover:border-solid hover:border-b-white"
                  onClick={closeMobileMenu}
                >
                  {t('galerija')}
                </Link>
              </li>
              <li className='h-[80px] mobile:w-full'>
                <Link
                  to="/kontakt"
                  className="mobile:hover:rounded-none mobile:hover:text-[#242424] mobile:hover:bg-white mobile:text-center mobile:p-[2rem_0rem] mobile:w-full mobile:table text-white flex items-center 
                no-underline p-[0rem_1rem] h-[100%] relative t-0 border-none border-0 hover:border-b-[2px] 
                hover:border-solid hover:border-b-white"
                  onClick={closeMobileMenu}
                >
                  {t('kontakt')}
                </Link>
              </li>
            </ul>
  )
}
