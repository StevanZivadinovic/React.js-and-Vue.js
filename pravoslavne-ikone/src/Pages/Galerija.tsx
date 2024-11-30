import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { usePageData } from '../consts/imageConstsByPage';
import Page from '../components/page';

export const Galerija = () => {
  const { t } = useTranslation();
  const {
    pageOneData,
    pageTwoData,
    pageThreeData,
    pageFourData,
    pageFiveData,
    pageSixData,
    pageSevenData,
    pageEightData
  } = usePageData();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page content={pageOneData} />;
      case 2:
        return <Page content={pageTwoData} />;
      case 3:
        return <Page content={pageThreeData} />;
      case 4:
        return <Page content={pageFourData} />;
      case 5:
        return <Page content={pageFiveData} />;
      case 6:
        return <Page content={pageSixData} />;
      case 7:
        return <Page content={pageSevenData} />;
      case 8:
        return <Page content={pageEightData} />;
      default:
        return <Page content={pageOneData} />;
    }
  };

  const paginate = (pageNumber:number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleContextMenu = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="mobile:relative mobile:h-[100%] w-full relative height-[100%] bg-[#282c34]">
      <Helmet>
        <title>Galerija - Pravoslavne ikone - Nis</title>
        <meta
          name="description"
          content="Галерија православних икона, Светитељи, Композиције, Диптих, Триптих"
        />
        <meta
          name="keywords"
          content="галерија, православне иконе са благословом"
        />
      </Helmet>
      <h1 content="galerija, naslov, title" className="mobile:text-[2.5rem] text-middle text-[3.5rem] text-center">
        {t('galerija')}
      </h1>
      {renderPage()}
      <div className="text-center">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            className="p-[1rem] mb-[10rem] -mt-[5rem] text-[#808080] cursor-pointer"
            key={number}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Galerija;
