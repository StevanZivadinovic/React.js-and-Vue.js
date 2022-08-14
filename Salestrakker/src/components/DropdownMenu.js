import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';

const DropdownMenu = ({ handleFrecuency, currentTextTable, width, top, topMobile }) => {
  const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  const [currentTextButton, setCurrentTextButton] = useState(
    currentTextTable ? currentTextTable : 'Monthly'
  );
  const { styleMode } = useContext(UserContext);
  let textForButton = ['Weekly', 'Forthnightly', 'Monthly', 'Annualy'];

  useEffect(() => {
    handleFrecuency(currentTextButton);
  }, [currentTextButton]);

  return (
    <>
      <button
        onClick={() => {
          setDisplayDropdownMenu(!displayDropdownMenu);
        }}
        className={`hover:cursor-pointer ${
          styleMode
            ? 'hover:bg-gray-300 hover:text-yellow-500'
            : 'hover:bg-dark-mode-mainBg hover:text-yellow-500'
        } text-xl  sm:text-2xl bg-transparent ${
          styleMode ? 'text-yellow-500' : 'text-dark-mode-mainBg'
        } border-2 border-gray-300 rounded outline-none p-[6px] sm:mx-2 mt-2 sm:mt-0
        w-full sm:w-auto`}>
        {currentTextButton}
      </button>
      <ul
        name=""
        id="periodOfIncome"
        className={`rounded absolute ${topMobile} ${top}  sm:right-0 hover:cursor-pointer text-2xl  'bg-transparent' text-gray-100  border-gray-300 w-full sm:w-${width} ${
          !displayDropdownMenu ? 'hidden' : 'block'
        }`}>
        {textForButton.map((a, i) => {
          return (
            <li
              onClick={() => {
                setDisplayDropdownMenu(false);
                setCurrentTextButton(a);
              }}
              key={i}
              className="last:rounded-b-xl first:rounded-t-xl hover:cursor-pointer hover:bg-dark-mode-mainBg hover:text-yellow-500 text-[1.2rem] bg-gray-300 w-full">
              {a}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownMenu;
