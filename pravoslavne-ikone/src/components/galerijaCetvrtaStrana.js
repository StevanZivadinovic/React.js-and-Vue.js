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
  'Часни крст',
  'Св Архангел Михаил',
  'Св Сава',
  'Св Великомученик Димитрије',
  'Св Пророк Илија',
  'Св Василије Острошки',
  'Св Јован Крститељ',
  'Св Петка',
  'Св Великомученик Георгије',
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

export const GalerijaCetvrtaStrana = () => {
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
              src={ikona28}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(0);
              }}
            />
            <p className="title"> Часни крст</p>
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
            <p className="title">Св Архангел Михаил</p>
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
            <p className="title">Св Сава</p>
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
            <p className="title">Св Великомученик Димитрије</p>
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
            <p className="title">Св Пророк Илија</p>
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
            <p className="title">Св Василије Острошки</p>
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
            <p className="title">Св Јован Крститељ</p>
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
            <p className="title">Св Петка</p>
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
            <p className="title">Св Великомученик Георгије</p>
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
