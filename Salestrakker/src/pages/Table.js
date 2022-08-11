import React, { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';

const Table = ({ income, typeOfIncome, periodOfIncome }) => {
  const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  const [currentTextButton, setCurrentTextButton] = useState('Monthly');
  let textForButton = ['Weekly', 'Forthnightly', 'Monthly', 'Annualy'];


  

  return (
    <div className="z-[1000] rounded p-6 w-1/2 m-auto flex flex-col justify-between mt-[20%] bg-purple-500">
      <h1 className="text-3xl text-blue-100 mb-4">Income tax calculator</h1>
      <div>
        <div className="flex justify-around">
          <p className="text-center flex  items-center">$93847392</p>
          <div className="w-1/2">
            Your net
            <span className="relative">
              <DropdownMenu handleFrecuency={()=>{}}></DropdownMenu>
            </span>
            income
          </div>
        </div>
      </div>
      <table className='w-full border-collapse mt-8'>
        <tbody>
          <tr className='border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300'>
            <th className='border-[1px] border-solid border-red-300 text-left py-2' >Frequency</th>
            {true ? <th className='border-[1px] border-solid border-red-300 text-left py-2'>Gross income</th> : <th className='border-[1px] border-solid border-red-300 text-left py-2'>Net income</th>}
            <th className='border-[1px] border-solid border-red-300 text-left py-2'>Tax</th>
            {true ? <th className='border-[1px] border-solid border-red-300 text-left py-2'>Net income</th> : <th className='border-[1px] border-solid border-red-300 text-left py-2'>Gross income</th>}

          </tr >
          <tr className='border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300'>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>Weekly</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>

          </tr>
          <tr className='border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300'>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>Forthightly</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>

          </tr>
          <tr className='border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300'>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>Monthly</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>

          </tr>
          <tr className='border-[1px] border-solid border-red-300 text-left py-2 even:bg-gray-300'>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>Annualy</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>
            <td className='border-[1px] border-solid border-red-300 text-left py-2'>{}</td>

          </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default Table;
