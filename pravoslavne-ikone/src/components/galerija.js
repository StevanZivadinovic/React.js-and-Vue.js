import React from 'react';
import './../style/galerija.scss';
import Footer from './footer';
import GalerijaPrvaStrana from './galerijaPrvaStrana';
import GalerijaDrugaStrana from './galerijaDrugaStrana';
import GalerijaTrecaStrana from './galerijaTrecaStrana';
import GalerijaCetvrtaStrana from './galerijaCetvrtaStrana';
import GalerijaPetaStrana from './galerijaPetaStrana';
import GalerijaSestaStrana from './galerijaSestaStrana';
import { useTranslation } from 'react-i18next';

export const Galerija =()=> {
  const { t } = useTranslation();
    return (
      <div className="mainGalerija">
        <h1 className="text-middle mt-4">{t('galerija')}</h1>
        <GalerijaPrvaStrana />
        <GalerijaDrugaStrana />
        <GalerijaTrecaStrana />
        <GalerijaCetvrtaStrana />
        <GalerijaPetaStrana />
        <GalerijaSestaStrana />
        <Footer></Footer>
      </div>
    );
  
}
export default Galerija;
