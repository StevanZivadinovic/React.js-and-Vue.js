import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import Button from '../components/Button';
import DropdownMenu from '../components/DropdownMenu';
import { UserContext } from '../Context/UserContext';

const Home = ({
  setVisibleHomePageCallback,
  setIncomeContext,
  setTypeContext,
  setCurrentTextButtonContext
}) => {
  const { styleMode } = useContext(UserContext);
  const [currentTextButton, setCurrentTextButton] = useState('Monthly');
  const [visibleHomePage, setVisibleHomePage] = useState(true);
  const [income, setIncome] = useState(0);
  const [type, setType] = useState('neto');
  const [clicked, setClicked] = useState(false);
  const buttons = useRef(null);

  let handleVisible = (e) => {
    e.preventDefault();
    setVisibleHomePage(!visibleHomePage);
    console.log('calculate', visibleHomePage);
    setIncomeContext(income);
    setTypeContext(type);
    setCurrentTextButtonContext(currentTextButton);
    console.log(income, type, currentTextButton);
  };

  function handleGross(e) {
    setType('gross');
    setClicked(true);
  }
  function handleNeto(e) {
    setType('neto');
    setClicked(false);
  }
  useEffect(() => {
    setVisibleHomePageCallback(visibleHomePage);
  }, [visibleHomePage]);

  return (
    <div
      className={`z-[1000] rounded p-6 w-1/2 m-auto flex flex-col justify-between  ${
        styleMode ? 'bg-transparent' : 'bg-yellow-500'
      } shadow-2xl ${styleMode ? 'shadow-yellow-500' : 'shadow-dark-mode-mainBg'} `}>
      <h1 className={`${styleMode ? 'text-yellow-500' : 'text-dark-mode-mainBg'} text-3xl mb-4`}>
        Income tax calculator
      </h1>
      <p
        className={`text-2xl text-gray-100 pb-2 ${
          styleMode ? 'text-yellow-500' : 'text-dark-mode-mainBg'
        }`}>
        Enter your income:
      </p>
      <div className="relative">
        <input
          className={`focus:bg-gray-300  font-bold ${
            styleMode ? 'text-yellow-500' : 'text-dark-mode-mainBg'
          } font-sans border text-2xl border-gray-300 rounded outline-none p-2 w-[70%] bg-transparent`}
          type="number"
          onChange={(e) => {
            setIncome(e.target.value);
          }}
        />
        <DropdownMenu
          align={'left-[70%]'}
          handleFrecuency={(text) => {
            setCurrentTextButton(text);
          }}
        />
      </div>

      <div className=" flex flex-col justify-center items-center my-[5rem]">
        <h3
          className={`text-2xl text-gray-100 my-8 ${
            styleMode ? 'text-yellow-500' : 'text-dark-mode-mainBg'
          }`}>
          Please choose the income type:
        </h3>
        <div ref={buttons} className="w-full flex justify-around">
          <Button
            clicked={clicked}
            handle={(e) => {
              handleGross(e);
            }}
            textOfButton={`Gross`}
            width={`w-80`}></Button>
          <Button
            clicked={!clicked}
            handle={(e) => {
              handleNeto(e);
            }}
            textOfButton={`Neto`}
            width={`w-80`}></Button>
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
