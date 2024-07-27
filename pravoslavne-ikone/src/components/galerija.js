import React, { useState } from 'react';
import './../style/galerija.scss';
import Footer from './footer';
import GalerijaPrvaStrana from './galerijaPrvaStrana';
import GalerijaDrugaStrana from './galerijaDrugaStrana';
import GalerijaTrecaStrana from './galerijaTrecaStrana';
import GalerijaCetvrtaStrana from './galerijaCetvrtaStrana';
import GalerijaPetaStrana from './galerijaPetaStrana';
import GalerijaSestaStrana from './galerijaSestaStrana';
import { useTranslation } from 'react-i18next';

export const Galerija = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <GalerijaPrvaStrana />;
      case 2:
        return <GalerijaDrugaStrana />;
      case 3:
        return <GalerijaTrecaStrana />;
      case 4:
        return <GalerijaCetvrtaStrana />;
      case 5:
        return <GalerijaPetaStrana />;
      case 6:
        return <GalerijaSestaStrana />;
      default:
        return <GalerijaPrvaStrana />;
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mainGalerija">
      <h1 className="text-middle mt-4">{t('galerija')}</h1>
      {renderPage()}
      <div className="pagination">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            className="paginationBtns"
            key={number}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </button>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};
export default Galerija;
