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
        <title>Иконописац - Православне иконе - Ниш</title>
        <meta name="description" content="Биографија иконописца са благословом, Драгана Живадиновић" />
        <meta name="keywords" content="иконописац, православне иконе, православне иконе продаја, православне иконе ниш" />
      </Helmet>
      <div className="main1">
        <img alt="иконописац, биографија" id="majka" src={majka}></img>
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
