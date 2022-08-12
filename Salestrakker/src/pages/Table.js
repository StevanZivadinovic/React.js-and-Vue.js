import React, { useContext, useEffect, useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import { UserContext } from '../Context/UserContext';

const Table = ({setVisibleHomePageCallback}) => {
  const { income, type, currentTextButton } = useContext(UserContext);
  const [weeklyIncome, setWeeklyIncome] = useState(0);
  const [forthnightlyIncome, setForthnightlyIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [annualyIncome, setAnnualyIncome] = useState(0);

  const [weeklyTax, setWeeklyTax] = useState(0);
  const [forthnightlyTax, setForthnightlyTax] = useState(0);
  const [monthlyTax, setMonthlyTax] = useState(0);
  const [annualyTax, setAnnualyTax] = useState(0);

  const [finallyWeeklyRavenue, setFinallyWeeklyRavenue] = useState(0);
  const [finallyForthnightlyRavenue, setFinallyForthnightlyRavenue] = useState(0);
  const [finallyMonthlyRavenue, setFinallyMonthlyRavenue] = useState(0);
  const [finallyAnnualyRavenue, setFinallyAnnualyRavenue] = useState(0);
  let parsedIncome=parseInt(income);

  const [incomeTitle, setIncomeTitle]=useState(parsedIncome)
  useEffect(() => {
  
    switch (currentTextButton) {
      case 'Weekly':
        setWeeklyIncome(parsedIncome);
        setForthnightlyIncome(parsedIncome * 2);
        setMonthlyIncome(parsedIncome * 4);
        setAnnualyIncome(parsedIncome * 52);

        break;

      case 'Forthnightly':
        setWeeklyIncome(parsedIncome / 2);
        setForthnightlyIncome(parsedIncome);
        setMonthlyIncome(parsedIncome * 2);
        setAnnualyIncome(parsedIncome * 24);
        break;

      case 'Monthly':
        setWeeklyIncome(parsedIncome / 4);
        setForthnightlyIncome(parsedIncome / 2);
        setMonthlyIncome(parsedIncome);
        setAnnualyIncome(parsedIncome * 12);
        break;

      case 'Annualy':
        setWeeklyIncome(parsedIncome / 52);
        setForthnightlyIncome(parsedIncome / 24);
        setMonthlyIncome(parsedIncome / 12);
        setAnnualyIncome(parsedIncome);
        break;

      default:
        break;
    }
  }, [parsedIncome, currentTextButton]);

  //We suppose that tax is 20%;
  useEffect(() => {
    switch (type) {
      case 'gross':
        setWeeklyTax(weeklyIncome * 0.2);
        setForthnightlyTax(forthnightlyIncome * 0.2);
        setMonthlyTax(monthlyIncome * 0.2);
        setAnnualyTax(annualyIncome * 0.2);

        break;
      case 'neto':
        setWeeklyTax(weeklyIncome / 4);
        setForthnightlyTax(forthnightlyIncome / 4);
        setMonthlyTax(monthlyIncome / 4);
        setAnnualyTax(annualyIncome / 4);
        break;

      default:
        break;
    }
  }, [type, income, weeklyIncome]);

  useEffect(() => {
    switch (type) {
      case 'gross':
        
    setFinallyWeeklyRavenue(weeklyIncome-weeklyTax);
    setFinallyForthnightlyRavenue(forthnightlyIncome-forthnightlyTax);
    setFinallyMonthlyRavenue(monthlyIncome-monthlyTax);
    setFinallyAnnualyRavenue(annualyIncome-annualyTax);
        break;

      case 'neto':
        
        setFinallyWeeklyRavenue(weeklyIncome+weeklyTax);
        setFinallyForthnightlyRavenue(forthnightlyIncome+forthnightlyTax);
        setFinallyMonthlyRavenue(monthlyIncome+monthlyTax);
        setFinallyAnnualyRavenue(annualyIncome+annualyTax);
        break;

      default:
        break;
    }

  }, [weeklyTax, type]);

  let handleBack=()=>{
    setVisibleHomePageCallback(true);
  }

  // useEffect(() => {
  //   switch (currentTextButton) {
  //     case 'Weekly':
  //       setIncomeTitle(weeklyIncome)
  //       break;
  //       case 'Forthnightly':
  //       setIncomeTitle(forthnightlyIncome)
  //       break;
  //       case 'Monthly':
  //       setIncomeTitle(monthlyIncome)
  //       break;
  //       case 'Annualy':
  //       setIncomeTitle(annualyIncome)
  //       break;
    
  //     default:
  //       break;
  //   }
  //   console.log(currentTextButton)
  // }, [currentTextButton, weeklyIncome])
  
  

  return (
    <div className="z-[1000] rounded p-6 w-1/2 m-auto flex flex-col justify-between mt-[20%] bg-purple-500 relative shadow-2xl shadow-red-700">
      <h1 className="text-3xl text-blue-100 mb-4">Income tax calculator</h1>
      <button onClick={handleBack} className='font-bold w-[1rem] h-[1rem] absolute right-5 bg-red-300 p-8 flex justify-center items-center rounded-[50%]'><span>&#8592;</span>  Back</button>
      <div>
        <div className="flex justify-around">
          <p className="text-center flex  items-center">${parsedIncome}</p>
          <div className="w-1/2">
            Your net
            <span className="relative">
              <DropdownMenu handleFrecuency={()=>{}} currentTextTable={currentTextButton}></DropdownMenu>
            </span>
            income
          </div>
        </div>
      </div>
      <table className="w-full border-collapse mt-8">
        <tbody>
          <tr className="border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300">
            <th className="border-[1px] border-solid border-red-300 text-left py-2">Frequency</th>
            {type == 'gross' ? (
              <th className="border-[1px] border-solid border-red-300 text-left py-2">
                Gross income
              </th>
            ) : (
              <th className="border-[1px] border-solid border-red-300 text-left py-2">
                Net income
              </th>
            )}
            <th className="border-[1px] border-solid border-red-300 text-left py-2">Tax</th>
            {type == 'neto' ? (
              <th className="border-[1px] border-solid border-red-300 text-left py-2">
                Gross income
              </th>
            ) : (
              <th className="border-[1px] border-solid border-red-300 text-left py-2">
                Net income
              </th>
            )}
          </tr>
          <tr className="border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300">
            <td className="border-[1px] border-solid border-red-300 text-left py-2">Weekly</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {weeklyIncome}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">{weeklyTax}</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {finallyWeeklyRavenue}
            </td>
          </tr>

          <tr className="border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300">
            <td className="border-[1px] border-solid border-red-300 text-left py-2">Forthightly</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {forthnightlyIncome}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {forthnightlyTax}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {finallyForthnightlyRavenue}
            </td>
          </tr>

          <tr className="border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300">
            <td className="border-[1px] border-solid border-red-300 text-left py-2">Monthly</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {monthlyIncome}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {monthlyTax}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {finallyMonthlyRavenue}
            </td>
          </tr>

          <tr className="border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300">
            <td className="border-[1px] border-solid border-red-300 text-left py-2">Annualy</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {annualyIncome}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {annualyTax}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {finallyAnnualyRavenue}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
