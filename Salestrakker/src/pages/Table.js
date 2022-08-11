import React, { useContext, useEffect, useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import { UserContext } from '../Context/UserContext';

const Table = () => {
  // const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  // const [currentTextButton, setCurrentTextButton] = useState('Monthly');
  // let textForButton = ['Weekly', 'Forthnightly', 'Monthly', 'Annualy'];
  const { income, type, currentTextButton } = useContext(UserContext);
  const [weeklyIncome, setWeeklyIncome] = useState(0);
  const [forthnightlyIncome, setForthnightlyIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [annualyIncome, setAnnualyIncome] = useState(0);

  useEffect(() => {
    switch (currentTextButton) {
      case 'Weekly':
        setWeeklyIncome(income);
        setForthnightlyIncome(income * 2);
        setMonthlyIncome(income * 4);
        setAnnualyIncome(income * 52);

        break;

      case 'Forthnightly':
        setWeeklyIncome(income / 2);
        setForthnightlyIncome(income);
        setMonthlyIncome(income * 2);
        setAnnualyIncome(income * 24);
        break;

      case 'Monthly':
        setWeeklyIncome(income / 4);
        setForthnightlyIncome(income / 2);
        setMonthlyIncome(income);
        setAnnualyIncome(income * 12);
        break;

      case 'Annualy':
        setWeeklyIncome(income / 52);
        setForthnightlyIncome(income / 24);
        setMonthlyIncome(income / 12);
        setAnnualyIncome(income);
        break;

      default:
        break;
    }
    console.log(income, type, currentTextButton);
  }, [income, currentTextButton]);

  useEffect(() => {
    switch (type) {
      case 'gross':
        break;
      case 'neto':
        break;

      default:
        break;
    }
  }, [type]);

  return (
    <div className="z-[1000] rounded p-6 w-1/2 m-auto flex flex-col justify-between mt-[20%] bg-purple-500">
      <h1 className="text-3xl text-blue-100 mb-4">Income tax calculator</h1>
      <div>
        <div className="flex justify-around">
          <p className="text-center flex  items-center">${income}</p>
          <div className="w-1/2">
            Your net
            <span className="relative">
              <DropdownMenu handleFrecuency={() => {}}></DropdownMenu>
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
            <td className="border-[1px] border-solid border-red-300 text-left py-2">{}</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">{}</td>
          </tr>

          <tr className="border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300">
            <td className="border-[1px] border-solid border-red-300 text-left py-2">Forthightly</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {forthnightlyIncome}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">{}</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">{}</td>
          </tr>

          <tr className="border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300">
            <td className="border-[1px] border-solid border-red-300 text-left py-2">Monthly</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {monthlyIncome}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">{}</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">{}</td>
          </tr>
          
          <tr className="border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300">
            <td className="border-[1px] border-solid border-red-300 text-left py-2">Annualy</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">
              {annualyIncome}
            </td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">{}</td>
            <td className="border-[1px] border-solid border-red-300 text-left py-2">{}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
