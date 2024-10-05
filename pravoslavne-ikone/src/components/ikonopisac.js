import React from 'react';
import './../style/ikonpisac.scss';
import ikonopisac from './../assets/ikonopisac.jpg';
import Footer from './footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function Ikonopisac() {
  const { t } = useTranslation();
  return (
    <div className="mainM">
      <Helmet>
        <title>Ikonopisac - Pravoslavne ikone - Nis</title>
        <meta name="description" content="Биографија иконописца са благословом, Драгана Живадиновић" />
        <meta name="keywords" content="иконописац, православне иконе, православне иконе продаја, православне иконе ниш" />
      </Helmet>
      <div className="main1">
        <img alt="иконописац, биографија" id="ikonopisac" src={ikonopisac}></img>
        <div lang='sr-Cyrl' className="textIkonopisac">
          <p lang='sr-Cyrl'>
            {t('o_ikonopiscu_deo_prvi')}
          </p>
          <p lang='sr-Cyrl'>
            {t('o_ikonopiscu_deo_drugi')}
          </p>{' '}
          <p lang='sr-Cyrl'>
            {t('o_ikonopiscu_deo_treci')}
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
