import React, { useState } from 'react';

const Table = ({ income, typeOfIncome, periodOfIncome }) => {


  
  const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  const [currentTextButton, setCurrentTextButton] = useState('Monthly');
  let textForButton = ['Weekly', 'Forthnightly', 'Monthly', 'Annualy'];

  return (
    <div className="z-[1000] rounded p-6 w-1/2 m-auto flex flex-col justify-between mt-[20%] bg-purple-500">
      <h1 className="text-3xl text-blue-100 mb-4">Income tax calculator</h1>
      <div>
        <div className='flex justify-around'>
          <p>$93847392</p>
          <div>
            your net
            <span>
              <button
                onClick={() => {
                  setDisplayDropdownMenu(!displayDropdownMenu);
                }}
                className="hover:cursor-pointer hover:bg-red-300 hover:text-purple-800 text-2xl bg-transparent text-blue-100 border-2 border-gray-300 rounded outline-none p-[6px] w-[25%]">
                {currentTextButton}
              </button>
              <ul
                className={`absolute right-0 hover:cursor-pointer text-2xl bg-transparent text-blue-100  border-gray-300 w-[25%] ${
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
            </span>
            income
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
