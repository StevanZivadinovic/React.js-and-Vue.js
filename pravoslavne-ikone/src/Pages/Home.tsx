import React from 'react';
import './../style/Home.scss';
import daska from './../assets/daska.jpg';
import daska1 from './../assets/daska1.jpg';
import daska2 from './../assets/daska2.jpg';
import zlatni_listici from './../assets/zlatni_listici.jpg';
import pigment from './../assets/pigment.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="mainHome w-full bg-[#282c34] flex flex-col justify-center items-center">
      <Helmet>
        <title>Pocetna - Pravoslavne ikone - Nis</title>
        <meta
          name="description"
          content="Израда православних икона користећи традиционалну технику јајчане темпере и златне листиће, по канонима и са благословом. Контактирајте нас за ручно израђене иконе."
        />
        <meta
          name="keywords"
          content="иконописац, православне иконе, православне иконе продаја, јајчана темпера, златни листићи, израда икона"
        />
      </Helmet>
      <div className="uvod w-[90%] bg-cover bg-no-repeat bg-[50%_15%]">
        {' '}
        <h1 className='z-100 pt-[30px] !opacity-100 text-black font-extralight text-[3.5rem] font-pacifico' lang="sr-Cyrl">{t('izrada_pravoslavnih_ikona')}</h1>
        <p lang="sr-Cyrl" className="podtekst font-pacifico text-black text-[2rem]">
          -{t('po_narudzbini')}-
        </p>
        <div className="opis mt-[40px] flex !bg-[#3232324d] justify-around text-[#323232]">
          <div className="liste text-black">
            <ul className="lista">
              <li className='list-style-none pt-[30px] flex flex-col justify-around text-[2rem]'>
                <a className='hover:border-0 hover:border-b-[1px] hover:border-solid hover:border-black hover:font-bold hover:scale-110 transform transition-transform decoration-transparent font-extrabold text-black' lang="sr-Cyrl" href="#vizantijskiStil">
                  {t('vizantijski_stil')}
                </a>
              </li>
              <li className='list-style-none pt-[30px] flex flex-col justify-around text-[2rem]'>
                <a className='hover:border-0 hover:border-b-[1px] hover:border-solid hover:border-black hover:font-bold hover:scale-110 transform transition-transform decoration-transparent font-extrabold text-black' lang="sr-Cyrl" href="#daska">
                  {t('tradicionalno_obradjena_lipova_daska')}
                </a>
              </li>
            </ul>
          </div>
          <div className="liste">
            <ul className="lista">
              <li className='list-style-none pt-[30px] flex flex-col justify-around text-[2rem]'>
                <a className='hover:border-0 hover:border-b-[1px] hover:border-solid hover:border-black hover:font-bold hover:scale-110 transform transition-transform decoration-transparent font-extrabold text-black' lang="sr-Cyrl" href="#tehnika">
                  {t('tehnika_izrade_jajcana_tempera')}
                </a>
              </li>
              <li className='list-style-none pt-[30px] flex flex-col justify-around text-[2rem]'>
                <a className='hover:border-0 hover:border-b-[1px] hover:border-solid hover:border-black hover:font-bold hover:scale-110 transform transition-transform decoration-transparent font-extrabold text-black' lang="sr-Cyrl" href="#tehnika">
                  {t('izrada_ikona_sa_zlatom_ili_slag_metalom')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="">
        <div id="vizantijskiStil" className='w-[90%] my-0 mx-auto'>
          <h2 className='font-pacifico text-[2.7rem]'>{t('vizantijski_stil')}</h2>
          <div className="text flex mt-[30px] justify-between">
            <p className='text-justify font-cormorant m-[30px] text-[1.5rem]' lang="sr-Cyrl">{t('vizantijski_stil_prvi_deo')}</p>

            <p className='text-justify font-cormorant m-[30px] text-[1.5rem]' lang="sr-Cyrl">{t('vizantijski_stil_drugi_deo')}</p>
          </div>
        </div>
        <div id="daska">
          <h2 lang="sr-Cyrl">{t('tradicionalno_obradjena_lipova_daska')}</h2>
          <div className="textDaska">
            <img
              alt="daska, materijal, ikonopis"
              id="slikaDaska"
              src={daska}
            ></img>
            <img
              alt="daska, materijal,ikonopis"
              id="slikaDaska"
              src={daska1}
            ></img>
            <img
              alt="daska, materijal,ikonopis"
              id="slikaDaska"
              src={daska2}
            ></img>
          </div>
          <p>{t('daska_opis')}</p>
        </div>
        <div id="tehnika">
          <h2 lang="sr-Cyrl">{t('tehnika_izrade')}</h2>
          <div className="slikeTehnika">
            <img
              alt="tehnika, jajcana tempera, ikonopis"
              className="tehnika1"
              src={pigment}
            ></img>

            <img
              alt="tehnika, jajcana tempera, ikonopis"
              className="tehnika1"
              src={zlatni_listici}
            ></img>
          </div>
          <p lang="sr-Cyrl" className="lastPasus">
            {t('pigmenti_zlato_opis')}
          </p>
        </div>
      </div>
    </div>
  );
}
