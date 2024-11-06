import { changeLanguage } from 'i18next'
import { languageNavType } from '../types/types'


export const LanguageNav = ({cssClass, width}:languageNavType) => {
  return (
    <ul className={cssClass}>
    <li onClick={() => changeLanguage('sr-Cyrl')}>
      <img
        style={{ margin: '0px', cursor: 'pointer' }}
        width={width}
        height=""
        src="https://img.icons8.com/color/48/sernia-circular.png"
        alt="Serbian"
      />
    </li>
    <li><span>|</span></li>
    <li onClick={() => changeLanguage('en')}>
      <img
        style={{ margin: '0px', cursor: 'pointer' }}
        width={width}
        height=""
        src="https://img.icons8.com/color/48/great-britain-circular.png"
        alt="English"
      />
    </li>
  </ul>
  )
}
