import { changeLanguage } from 'i18next';
import { languageNavType } from '../types/types';

export const LanguageNav = ({ cssClass, width }: languageNavType) => {
  return (
    <ul className={cssClass}>
      <li onClick={() => changeLanguage('sr-Cyrl')}>
        <img
          className='hover:opacity-80 m-0 cursor-pointer'
          width={width}
          height=""
          src="https://img.icons8.com/color/48/sernia-circular.png"
          alt="Serbian"
        />
      </li>
      <li>
        <span>|</span>
      </li>
      <li onClick={() => changeLanguage('en')}>
        <img
          className='hover:opacity-80 m-0 cursor-pointer'
          width={width}
          height=""
          src="https://img.icons8.com/color/48/great-britain-circular.png"
          alt="English"
        />
      </li>
      <li>
        <span>|</span>
      </li>
      <li onClick={() => changeLanguage('ru')}>
        <img
          className='hover:opacity-80 m-0 cursor-pointer'
          width={width}
          src="https://img.icons8.com/color/48/russian-federation-circular.png"
          alt="russian-federation-circular"
        />
      </li>
    </ul>
  );
};
