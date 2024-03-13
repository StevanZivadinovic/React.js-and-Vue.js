import React, { useState } from 'react';
import ikona19 from './../assets/ikona19.png';
import ikona20 from './../assets/ikona20.png';
import ikona21 from './../assets/ikona21.png';
import ikona22 from './../assets/ikona22.png';
import ikona23 from './../assets/ikona23.png';
import ikona24 from './../assets/ikona24.png';
import ikona25 from './../assets/ikona25.png';
import ikona26 from './../assets/ikona26.png';
import ikona27 from './../assets/ikona27.png';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';


export const GalerijaTrecaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    ikona19,
    ikona20,
    ikona21,
    ikona22,
    ikona23,
    ikona24,
    ikona25,
    ikona26,
    ikona27,
  ];
  
  const textHeader = [
    t('gospod_isus_hristos'),
    t('sv_simeon_novi_bogoslov'),
    t('sv_georgije_palama'),
    t('majka_bozija_atonska'),
    t('sv_arhangel_mihail'),
    t('sv_arhangel_rafail'),
    t('sv_arhangel_varahil'),
    t('sv_arhangel_uril'),
    t('sv_arhangel_salatil'),
  ];
  
  const textFooter = [
    '18x40cm',
    '15x20cm',
    '15x20cm',
    '25х50cm',
    '18x40cm',
    '18x40cm',
    '18x40cm',
    '18x40cm',
    '18x40cm',
  ];
  return (
    <div>
      <div className="row1">
        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona19}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(0);
              }}
            />
            <p className="title">{t('gospod_isus_hristos')}</p>
            <p className="dimension">{t('dimenzije')} 18х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona20}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(1);
              }}
            />
            <p className="title">{t('sv_simeon_novi_bogoslov')}</p>
            <p className="dimension">{t('dimenzije')} 15х20cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona21}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(2);
              }}
            />
            <p className="title">{t('sv_georgije_palama')}</p>
            <p className="dimension">{t('dimenzije')} 15х20cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona22}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(3);
              }}
            />
            <p className="title">{t('majka_bozija_atonska')}</p>
            <p className="dimension">{t('dimenzije')} 25х50cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona23}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(4);
              }}
            />
            <p className="title">{t('sv_arhangel_mihail')}</p>
            <p className="dimension">{t('dimenzije')} 18х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona24}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(5);
              }}
            />
            <p className="title">{t('sv_arhangel_rafail')}</p>
            <p className="dimension">{t('dimenzije')} 18х40cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona25}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(6);
              }}
            />
            <p className="title">{t('sv_arhangel_varahil')}</p>
            <p className="dimension">{t('dimenzije')} 18х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona26}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(7);
              }}
            />
            <p className="title">{t('sv_arhangel_uril')}</p>
            <p className="dimension">{t('dimenzije')} 18х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona27}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(8);
              }}
            />
            <p className="title">{t('sv_arhangel_salatil')}</p>
            <p className="dimension">{t('dimenzije')} 18х40cm</p>
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

export default GalerijaTrecaStrana;