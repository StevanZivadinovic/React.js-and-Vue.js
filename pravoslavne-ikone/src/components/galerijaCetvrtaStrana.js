import React, { useState } from 'react';
import ikona28 from './../assets/ikona28.jpg';
import ikona29 from './../assets/ikona29.jpg';
import ikona30 from './../assets/ikona30.jpg';
import ikona31 from './../assets/ikona31.jpg';
import ikona32 from './../assets/ikona32.jpg';
import ikona33 from './../assets/ikona33.jpg';
import ikona34 from './../assets/ikona34.jpg';
import ikona35 from './../assets/ikona35.jpg';
import ikona36 from './../assets/ikona36.jpg';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';



export const GalerijaCetvrtaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    ikona28,
    ikona29,
    ikona30,
    ikona31,
    ikona32,
    ikona33,
    ikona34,
    ikona35,
    ikona36,
  ];
  
  const textHeader = [
    t('casni_krst'),
    t('sv_arhangel_mihail'),
    t('sv_sava'),
    t('sv_velikomucenik_dimitrije'),
    t('sv_prorok_ilija'),
    t('sv_vasilije_ostroski'),
    t('sv_jovan_krstitelj'),
    t('sv_prepodobna_mati_paraskeva'),
    t('sv_velikomucenik_georgije'),
  ];
  
  const textFooter = [
    '21x29cm',
    '21x30cm',
    '21x30cm',
    '21х30cm',
    '21x30cm',
    '21x30cm',
    '21x30cm',
    '21x30cm',
    '21x30cm',
  ];
  return (
    <div>
      <div className="row1">
        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona28}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(0);
              }}
            />
            <p className="title">{t('casni_krst')}</p>
            <p className="dimension">{t('dimenzije')} 21х29cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona29}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(1);
              }}
            />
            <p className="title">{t('sv_arhangel_mihail')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona30}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(2);
              }}
            />
            <p className="title">{t('sv_sava')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona31}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(3);
              }}
            />
            <p className="title">{t('sv_velikomucenik_dimitrije')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona32}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(4);
              }}
            />
            <p className="title">{t('sv_prorok_ilija')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona33}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(5);
              }}
            />
            <p className="title">{t('sv_vasilije_ostroski')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona34}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(6);
              }}
            />
            <p className="title">{t('sv_jovan_krstitelj')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona35}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(7);
              }}
            />
            <p className="title">{t('sv_prepodobna_mati_paraskeva')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona36}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(8);
              }}
            />
            <p className="title">{t('sv_velikomucenik_georgije')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
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

export default GalerijaCetvrtaStrana;
