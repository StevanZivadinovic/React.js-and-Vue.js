import React, { useState } from 'react';
import ikona1 from './../assets/ikona1.png';
import ikona2 from './../assets/ikona2.png';
import ikona3 from './../assets/ikona3.png';
import ikona4 from './../assets/ikona4.png';
import ikona5 from './../assets/ikona5.png';
import ikona6 from './../assets/ikona6.png';
import ikona7 from './../assets/ikona7.png';
import ikona8 from './../assets/ikona8.png';
import ikona9 from './../assets/ikona9.png';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const images = [
  ikona1,
  ikona2,
  ikona3,
  ikona4,
  ikona5,
  ikona6,
  ikona7,
  ikona8,
  ikona9,
];

const textHeader = [
  i18next.t('sv_vukasin_klepacki'),
  i18next.t('sv_jovan_krstitelj'),
  i18next.t('sv_velikomucenik_dimitrije'),
  i18next.t('sv_knez_lazar'),
  i18next.t('majka_bozija_decanska'),
  i18next.t('majka_bozija'),
  i18next.t('sv_mucenik_justin_filosof'),
  i18next.t('sv_nektarije_eginski'),
  i18next.t('sv_arhangel_mihail'),
];

const textFooter = [
  '21x30cm',
  '30x40cm',
  '18x40cm',
  '30x40cm',
  '30x40cm',
  '30x40cm',
  '30x40cm',
  '30x40cm',
  '26x61cm',
];

export const GalerijaPrvaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div>
      <div className="row1">
        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona1}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(0);
              }}
            />
            <p className="title"> {t('sv_vukasin_klepacki')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona2}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(1);
              }}
            />
            <p className="title">{t('sv_jovan_krstitelj')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona3}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(2);
              }}
            />
            <p className="title">{t('sv_velikomucenik_dimitrije')}</p>
            <p className="dimension">{t('dimenzije')} 18х40cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona4}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(3);
              }}
            />
            <p className="title">{t('sv_knez_lazar')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona5}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(4);
              }}
            />
            <p className="title">{t('majka_bozija_decanska')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona6}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(5);
              }}
            />
            <p className="title">{t('majka_bozija')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona7}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(6);
              }}
            />
            <p className="title">{t('sv_mucenik_justin_filosof')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona8}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(7);
              }}
            />
            <p className="title">{t('sv_nektarije_eginski')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona9}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(8);
              }}
            />
            <p className="title">{t('sv_arhangel_mihail')}</p>
            <p className="dimension">{t('dimenzije')} 26х61cm</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          imageTitle={textHeader[photoIndex]}
          imageCaption={textFooter[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};
