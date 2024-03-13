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
  'Господ Исус Христос',
  'Св Симеон Нови Богослов',
  'Св Григорије Палама',
  'Мајка Божија Атонска',
  'Св Архангел Михаил',
  'Св Архангел Рафаил',
  'Св Архангел Варахил',
  'Св Архангел Урил',
  'Св Архангел Салатил',
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

export const GalerijaTrecaStrana = () => {
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
              src={ikona19}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(0);
              }}
            />
            <p className="title"> Господ Исус Христос</p>
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
            <p className="title">Св Симеон Нови Богослов</p>
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
            <p className="title">Св Григорије Палама</p>
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
            <p className="title">Икона Мајке Божије Атонске</p>
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
            <p className="title">Икона Св Архангела Михаила</p>
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
            <p className="title">Икона Св Архангела Рафаила</p>
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
            <p className="title">Св Архангела Варахила</p>
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
            <p className="title">Св Архангел Урил</p>
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
            <p className="title">Св Архангел Салатил</p>
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
