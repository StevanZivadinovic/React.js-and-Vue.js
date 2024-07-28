import React from 'react';
import './../style/ikonpisac.scss';
import majka from './../assets/majka.jpg';
import Footer from './footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function Ikonopisac() {
  const { t } = useTranslation();
  return (
    <div className="mainM">
      <Helmet>
        <title>Ikonopisac - Pravoslavne ikone - Nis</title>
        <meta name="description" content="Biografija ikonipisca sa blagoslovom, Dragana Zivadinovic" />
        <meta name="keywords" content="ikonopisac, pravoslavne ikone" />
      </Helmet>
      <div className="main1">
        <img alt="ikonopisac, biografija" id="majka" src={majka}></img>
        <div className="textIkonopisac">
          <p>
            {t('o_ikonopiscu_deo_prvi')}
          </p>
          <p>
            {t('o_ikonopiscu_deo_drugi')}
          </p>{' '}
          <p>
            {t('o_ikonopiscu_deo_treci')}
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
