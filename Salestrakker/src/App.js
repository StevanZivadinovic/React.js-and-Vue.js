import React, { useState, createContext, useContext } from 'react';




import {UserContext} from './Context/UserContext';
import Home from './pages/Home';
import Table from './pages/Table';
import './styles.css';
const App = () => {

  const [visibleHomePage, setVisibleHomePage] = useState(true);
  const [income, setIncome] = useState(null);
  const [type, setType] = useState(null);
  const [currentTextButton, setCurrentTextButton] = useState('Monthly');
  const [styleMode, setStyleMode] = useState(true);
   
  return (
    <div className={`h-screen flex justify-center align-center flex-col ${styleMode?'bg-dark-mode-mainBg':'bg-gray-100'}`}>
          
      <button onClick={()=>{setStyleMode(!styleMode)}} className={`mt-10 text-2xl ${styleMode ?'text-gray-100':'text-yellow-500'} cursor-pointer`}>
        {styleMode ? <span><i className="fa-solid fa-sun"></i> Light mode</span> : <span><i className="fa-solid fa-moon"></i> Dark  Mode</span>}</button>
    <UserContext.Provider value={{income, type, currentTextButton, styleMode}}>
      {visibleHomePage ? (
        <Home
          setCurrentTextButtonContext={(value) => {
            setCurrentTextButton(value);
          }}
          setTypeContext={(value) => setType(value)}
          setIncomeContext={(value) => setIncome(value)}
          setVisibleHomePageCallback={(boolean) => {
            setVisibleHomePage(boolean);
          }}
        />
      ) : (
        <Table setVisibleHomePageCallback={(boolean) => {
          setVisibleHomePage(boolean)}} />
      )}
      </UserContext.Provider>
    </div>
  );
};

export default App;
