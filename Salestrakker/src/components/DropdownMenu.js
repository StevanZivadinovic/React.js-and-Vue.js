import React, { useEffect, useState } from 'react';

const DropdownMenu = ({ handleFrecuency, currentTextTable }) => {
  const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  const [currentTextButton, setCurrentTextButton] = useState(
    currentTextTable ? currentTextTable : 'Monthly'
  );
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
        className="hover:cursor-pointer hover:bg-red-300 hover:text-purple-800 text-2xl bg-transparent text-blue-100 border-2 border-gray-300 rounded outline-none p-[6px] mx-2">
        {currentTextButton}
      </button>
      <ul
        name=""
        id="periodOfIncome"
        className={`absolute left-0 hover:cursor-pointer text-2xl bg-transparent text-blue-100  border-gray-300 w-[25%] ${
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
              className="p-1 hover:cursor-pointer hover:bg-blue-300 text-[1.2rem] bg-blue-600 ">
              {a}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownMenu;
