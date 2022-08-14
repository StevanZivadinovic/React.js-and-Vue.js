import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Row } from './Row';

export const TableComponent = ({
  weeklyIncome,
  weeklyTax,
  finallyWeeklyRavenue,
  forthnightlyIncome,
  forthnightlyTax,
  finallyForthnightlyRavenue,
  monthlyIncome,
  monthlyTax,
  finallyMonthlyRavenue,
  annualyIncome,
  annualyTax,
  finallyAnnualyRavenue
}) => {
  const { type, styleMode } = useContext(UserContext);
  return (
    <table className="w-full  mt-8">
      <tbody className="text-base sm:text-2xl">
        <tr className="text-center  py-2 even:bg-gray-100">
          <th
            className={`text-center ${styleMode ? 'text-gray-100' : 'text-dark-mode-mainBg'} py-2`}>
            Frequency
          </th>
          {type == 'gross' ? (
            <th
              className={`text-center ${
                styleMode ? 'text-gray-100' : 'text-dark-mode-mainBg'
              } py-2`}>
              Gross income
            </th>
          ) : (
            <th
              className={`text-center ${
                styleMode ? 'text-gray-100' : 'text-dark-mode-mainBg'
              } py-2`}>
              Net income
            </th>
          )}
          <th
            className={`text-center ${styleMode ? 'text-gray-100' : 'text-dark-mode-mainBg'} py-2`}>
            Tax
          </th>
          {type == 'neto' ? (
            <th
              className={`text-center ${
                styleMode ? 'text-gray-100' : 'text-dark-mode-mainBg'
              } py-2`}>
              Gross income
            </th>
          ) : (
            <th
              className={`text-center ${
                styleMode ? 'text-gray-100' : 'text-dark-mode-mainBg'
              } py-2`}>
              Net income
            </th>
          )}
        </tr>

        <Row
          textColor={'text-yellow-500'}
          frequency={'Weekly'}
          income={weeklyIncome}
          tax={weeklyTax}
          finallyRavenue={finallyWeeklyRavenue}
        />
        <Row
          textColor={'text-dark-mode-mainBg'}
          frequency={'Forthightly'}
          income={forthnightlyIncome}
          tax={forthnightlyTax}
          finallyRavenue={finallyForthnightlyRavenue}
        />
        <Row
          textColor={'text-yellow-500'}
          frequency={'Monthly'}
          income={monthlyIncome}
          tax={monthlyTax}
          finallyRavenue={finallyMonthlyRavenue}
        />
        <Row
          textColor={'text-dark-mode-mainBg'}
          frequency={'Annualy'}
          income={annualyIncome}
          tax={annualyTax}
          finallyRavenue={finallyAnnualyRavenue}
        />
      </tbody>
    </table>
  );
};
