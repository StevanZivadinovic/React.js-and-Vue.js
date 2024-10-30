import React from 'react';
import './../style/Home.scss';
import daska from './../assets/daska.jpg';
import daska1 from './../assets/daska1.jpg';
import daska2 from './../assets/daska2.jpg';
import zlatni_listici from './../assets/zlatni_listici.jpg';
import pigment from './../assets/pigment.jpg';
import Footer from '../components/footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="main">
      <Helmet>
        <title>Pocetna - Pravoslavne ikone - Nis</title>
        <meta 
          name="description" 
          content="Израда православних икона користећи традиционалну технику јајчане темпере и златне листиће, по канонима и са благословом. Контактирајте нас за персонализоване иконе." 
        />
        <meta 
          name="keywords" 
          content="иконописац, православне иконе, православне иконе продаја, јајчана темпера, златни листићи, израда икона" 
        />
      </Helmet>
      <div className="uvod">
        {' '}
        <h1 lang='sr-Cyrl'>{t('izrada_pravoslavnih_ikona')}</h1>
        <p lang='sr-Cyrl' className="podtekst">-{t('po_narudzbini')}-</p>
        <div className="opis">
          <div className="liste">
            <ul className="lista">
              <li>
                <a lang='sr-Cyrl' href="#vizantijskiStil">{t('vizantijski_stil')}</a>
              </li>
              <li>
                <a lang='sr-Cyrl' href="#daska">{t('tradicionalno_obradjena_lipova_daska')}</a>
              </li>
            </ul>
          </div>
          <div className="liste">
            <ul className="lista">
              <li>
                <a lang='sr-Cyrl' href="#tehnika">{t('tehnika_izrade_jajcana_tempera')}</a>
              </li>
              <li>
                <a lang='sr-Cyrl' href="#tehnika">{t('izrada_ikona_sa_zlatom_ili_slag_metalom')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mainNovi">
        <div id="vizantijskiStil">
          <h2>{t('vizantijski_stil')}</h2>
          <div className="text">
            <p lang='sr-Cyrl'>
              {t('vizantijski_stil_prvi_deo')}
            </p>

            <p lang='sr-Cyrl'>
              {t('vizantijski_stil_drugi_deo')}
            </p>
          </div>
        </div>
        <div id="daska">
          <h2 lang='sr-Cyrl'>{t('tradicionalno_obradjena_lipova_daska')}</h2>
          <div className="textDaska">
            <img alt="daska, materijal, ikonopis" id="slikaDaska" src={daska}></img>
            <img alt="daska, materijal,ikonopis" id="slikaDaska" src={daska1}></img>
            <img alt="daska, materijal,ikonopis" id="slikaDaska" src={daska2}></img>
          </div>
          <p>
            {t('daska_opis')}
          </p>
        </div>
        <div id="tehnika">
          <h2 lang='sr-Cyrl'>{t('tehnika_izrade')}</h2>
          <div className="slikeTehnika">
            <img alt="tehnika, jajcana tempera, ikonopis" id="tehnika1" src={pigment}></img>

            <img alt="tehnika, jajcana tempera, ikonopis" id="tehnika1" src={zlatni_listici}></img>
          </div>
          <p lang='sr-Cyrl' className="lastPasus">
            {t('pigmenti_zlato_opis')}
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
