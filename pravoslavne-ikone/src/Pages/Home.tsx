import React from 'react';
import './../style/Home.scss';
import daska from './../assets/daska.jpg';
import daska1 from './../assets/daska1.jpg';
import daska2 from './../assets/daska2.jpg';
import zlatni_listici from './../assets/zlatni_listici.jpg';
import pigment from './../assets/pigment.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { navList } from '../consts/global';
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="mobile:w-full w-full bg-[#282c34] flex flex-col justify-center items-center">
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
      <div className="uvod mobile:h-[100vh] mobile:w-full w-[90%] bg-cover bg-no-repeat bg-[50%_15%]">
        {' '}
        <h1
          className="mobile:text-[2.5rem] z-100 pt-[30px] !opacity-100 text-black font-extralight text-[3.5rem] font-pacifico"
          lang="sr-Cyrl"
        >
          {t('izrada_pravoslavnih_ikona')}
        </h1>
        <p
          lang="sr-Cyrl"
          className="mobile:text-[1.2rem] mob font-pacifico text-black text-[2rem]"
        >
          -{t('po_narudzbini')}-
        </p>
        <div className="mobile:flex-col mobile:flex-wrap mobile:w-full mobile:mt-[30px] mobile:bg-[#f5e7e74d] mt-[40px] flex !bg-[#3232324d] justify-around text-[#323232]">
          <ul className="mobile:pt-0 flex mobile:flex-col flex-wrap w-[70%] mobile:w-full">
            {
              navList?.map((a,i)=>{
                return(
            <li className="mobile:m-0 mobile:p-0 mobile:text-[18px]  list-style-none pt-[30px] flex flex-col justify-around text-[2rem] mobile:w-full w-[50%]">
              <a
                className="mobile:p-[10px_0] hover:text-white hover:decoration-transparent mobile:hover:bg-[#1f1d1d75] hover:cursor-pointer  hover:font-bold hover:scale-110 transform transition-transform decoration-transparent font-extrabold text-black"
                lang="sr-Cyrl"
                href={a?.href}
              >
                {t(a?.text)}
              </a>
            </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="">
        <div className="w-[90%] my-0 mx-auto mobile:mt-[50px] mobile:h-[100%] mobile:w-full">
          <h2 className="mobile:text-[1.8rem] font-pacifico text-[2.7rem] font-thin">
            {t('vizantijski_stil')}
          </h2>
          <div className="text mobile:flex-col flex mt-[30px] justify-between">
            <p
              className="mobile:text-[1rem] text-justify font-cormorant m-[30px] text-[1.5rem]"
              lang="sr-Cyrl"
            >
              {t('vizantijski_stil_prvi_deo')}
            </p>

            <p
              className="mobile:text-[1rem] text-justify font-cormorant m-[30px] text-[1.5rem]"
              lang="sr-Cyrl"
            >
              {t('vizantijski_stil_drugi_deo')}
            </p>
          </div>
        </div>
        <div
          id="daska"
          className="mobile:h-[100%] mobile:w-full bg-no-repeat bg-cover w-[90%] m-[0_auto]"
        >
          <h2
            className="mobile:text-[1.8rem] mobile:pt-[2rem] text-white font-thin font-pacifico mb-[2rem] text-[2.7rem]"
            lang="sr-Cyrl"
          >
            {t('tradicionalno_obradjena_lipova_daska')}
          </h2>
          <div className="textDaska flex justify-around mobile:flex-col mobile:m-[0_auto] mobile:w-[90%]">
            <img
              alt="daska, materijal, ikonopis"
              className="mobile:self-center w-[300px] rounded-[30px] mobile:mb-[1rem] max-w-[60%]"
              src={daska}
            ></img>
            <img
              alt="daska, materijal,ikonopis"
              className="mobile:self-center w-[300px] rounded-[30px] mobile:mb-[1rem] max-w-[60%]"
              src={daska1}
            ></img>
            <img
              alt="daska, materijal,ikonopis"
              className="mobile:self-center w-[300px] rounded-[30px] mobile:mb-[1rem] max-w-[60%]"
              src={daska2}
            ></img>
          </div>
          <p className="mobile:m-[0_auto] mobile:text-justify mobile:text-[1rem] w-[90%] m-[2rem_auto_0.5rem_auto] pb-[2rem] text-[1.5rem]
           font-cormorant">
            {t('daska_opis')}
          </p>
        </div>
        <div
          id="tehnika"
          className="flex flex-col w-[90%] m-[0_auto] mobile:w-full mobile:mt-[0.3rem]"
        >
          <h2
            className="mobile:pt-[1rem] mobile:text-[1.8rem] font-thin font-pacifico mb-[2rem] pt-[2rem] text-[2.7rem]"
            lang="sr-Cyrl"
          >
            {t('tehnika_izrade')}
          </h2>
          <div className="slikeTehnika flex justify-around mobile:flex-col mobile:justify-around mobile:items-center">
            <img
              alt="tehnika, jajcana tempera, ikonopis"
              className="tehnika1 w-[20rem] h-auto rounded-[50px] mobile:mb-[1rem] max-w-[60%]"
              src={pigment}
            ></img>

            <img
              alt="tehnika, jajcana tempera, ikonopis"
              className="tehnika1 w-[20rem] h-auto rounded-[50px] max-w-[60%]"
              src={zlatni_listici}
            ></img>
          </div>
          <p
            lang="sr-Cyrl"
            className="mobile:mt-[1rem] mobile:text-justify mobile:text-[1rem] w-[90%] m-[2rem_auto_0.5rem_auto] pb-[2rem] text-[1.5rem] font-cormorant"
          >
            {t('pigmenti_zlato_opis')}
          </p>
        </div>
      </div>
    </div>
  );
}
