import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import Button from '../components/Button';
import DropdownMenu from '../components/DropdownMenu';
// export const AuthContext = createContext(income, type, currentTextButton);
// export const AuthContextProvider=({children})=>{
//   return <AuthContext.Provider value={{income, type, currentTextButton}}>{children}</AuthContext.Provider>
// }
const Home = ({ setVisibleHomePageCallback }) => {
  const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  const [currentTextButton, setCurrentTextButton] = useState('Monthly');
  const [visibleHomePage, setVisibleHomePage] = useState(true);
  const [income, setIncome] = useState(0);
  const [type, setType] = useState('');
  const [clicked, setClicked] = useState(false);
  const buttons = useRef(null)


  
  
  

  let toggle = ()=>{
   
    
    let buttonsArray = buttons.current.children
     Array.from(buttonsArray).forEach(a => {
      a.addEventListener('click',e=>{
        e.stopPropagation()
          Array.from(buttonsArray).forEach((a) => {
            a.classList.remove('bg-purple-800');
          });
     
        if(!a.classList.contains('bg-purple-800')){
          a.classList.add('bg-purple-800');
        }else{
          a.classList.remove('bg-purple-800');
        }
      })
    });
  }


  let handleVisible = (e) => {
    e.preventDefault();
    setVisibleHomePage(!visibleHomePage);
    console.log('calculate', visibleHomePage);
    console.log(income, type, currentTextButton);
  };

  let handleGross = () => {
    setType('gross');
    setClicked(!clicked);
    toggle()
  
  };
  let handleNeto = () => {
    setType('neto');
    setClicked(!clicked);
    toggle()
   
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
          onChange={(e) => {
            setIncome(e.target.value);
          }}
        />
        <DropdownMenu
          handleFrecuency={(text) => {
            setCurrentTextButton(text);
          }}
        />
      </div>

      <div className=" flex flex-col justify-center items-center my-[5rem]">
        <h3 className="text-2xl text-blue-100 my-8">Please choose the income type:</h3>
        <div ref={buttons}  className="w-full flex justify-around">
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

