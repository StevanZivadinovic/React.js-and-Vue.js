import React, { useEffect, useState } from 'react';
import Button from '../components/Button';

const Home = ({ setVisibleHomePageCallback }) => {
  const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  const [currentTextButton, setCurrentTextButton] = useState('Monthly');
  const [visibleHomePage, setVisibleHomePage] = useState(true);
  let textForButton = ['Weekly', 'Forthnightly', 'Monthly', 'Annualy'];

  let handleVisible = (e) => {
    e.preventDefault();
    setVisibleHomePage(!visibleHomePage);
    console.log('calculate', visibleHomePage);
  };

  let handleGross = () => {
    console.log('gross');
  };
  let handleNeto = () => {
    console.log('neto');
  };
  useEffect(() => {
    setVisibleHomePageCallback(visibleHomePage);
  }, [visibleHomePage]);

  return (
    <div className="z-[1000] rounded p-6 w-1/2 m-auto flex flex-col justify-between mt-[20%] bg-purple-500">
      <h1 className="text-3xl text-blue-100 mb-4">Income tax calculator</h1>
      <p className="text-2xl text-blue-100">Enter your income:</p>
      <div className="relative">
        <input
          className="focus:bg-blue-300 font-bold text-blue-600 border text-2xl border-gray-300 rounded outline-none p-2 w-[75%] bg-transparent"
          type="number"
        />
        <button
          onClick={() => {
            setDisplayDropdownMenu(!displayDropdownMenu);
          }}
          className="hover:cursor-pointer hover:bg-red-300 hover:text-purple-800 text-2xl bg-transparent text-blue-100 border-2 border-gray-300 rounded outline-none p-[6px] w-[25%]">
          {currentTextButton}
        </button>
        <ul
          name=""
          id="periodOfIncome"
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
                className="p-1 hover:cursor-pointer hover:bg-blue-300 text-[1.2rem] bg-blue-600 "
                value="weekly">
                {a}
              </li>
            );
          })}
        </ul>
      </div>

      <div className=" flex flex-col justify-center items-center my-[5rem]">
        <h3 className="text-2xl text-blue-100 my-8">Please choose the income type:</h3>
        <div className="w-full flex justify-around">
          <Button handle={handleGross} textOfButton={`Gross`} width={`w-80`}></Button>
          <Button handle={handleNeto} textOfButton={`Neto`} width={`w-80`}></Button>
        </div>
        <Button
          handle={handleVisible}
          className="w-full"
          textOfButton={`Calculate`}
          width={`w-full`}></Button>
      </div>
    </div>
  );
};

export default Home;
