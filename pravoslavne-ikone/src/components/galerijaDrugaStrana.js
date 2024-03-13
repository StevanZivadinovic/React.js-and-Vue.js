import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ikona10 from './../assets/ikona10.png';
import ikona11 from './../assets/ikona11.png';
import ikona12 from './../assets/ikona12.png';
import ikona13 from './../assets/ikona13.png';
import ikona14 from './../assets/ikona14.png';
import ikona15 from './../assets/ikona15.png';
import ikona16 from './../assets/ikona16.png';
import ikona17 from './../assets/ikona17.png';
import ikona18 from './../assets/ikona18.png';
import Lightbox from 'react-image-lightbox';
const images = [
  ikona10,
  ikona11,
  ikona12,
  ikona13,
  ikona14,
  ikona15,
  ikona16,
  ikona17,
  ikona18,
];

const textHeader = [
  'Св Арханђел Гаврил - Бели Анђео',
  'Св Великомученик Георгије',
  'Св Јован Крститељ',
  'Св Апостол Марко',
  'Пресвете Тројица',
  'Св Максим Исповедник',
  'Св Јосиф Исихаста',
  'Св Херувима и Св Петка',
  'Св Василије Острошки',
];

const textFooter = [
  '21x30cm',
  '30x40cm',
  '30x40cm',
  '30x40cm',
  '30x40cm',
  '18x24cm',
  '15x20cm',
  '30x40cm',
  '20x30cm',
];

export const GalerijaDrugaStrana = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div>
      <div className="row1">
        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona10}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(0);
              }}
            />
            <p className="title"> Св Арханђел Гаврил - Бели Анђео</p>
            <p className="dimension">{t('dimenzije')} 21x30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona11}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(1);
              }}
            />
            <p className="title">Св Великомученик Георгије</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona12}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(2);
              }}
            />
            <p className="title">Св Јован Крститељ</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona13}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(3);
              }}
            />
            <p className="title">Св Апостол Марко</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona14}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(4);
              }}
            />
            <p className="title"> Пресвета Тројица</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona15}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(5);
              }}
            />
            <p className="title">Св Максим Исповедник</p>
            <p className="dimension">{t('dimenzije')} 18х24cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona16}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(6);
              }}
            />
            <p className="title">Св Јосиф Исихаста</p>
            <p className="dimension">{t('dimenzije')} 15х20cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona17}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(7);
              }}
            />
            <p className="title">Св Херувима и Св Петка</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona18}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(8);
              }}
            />
            <p className="title">Св Василије Острошки</p>
            <p className="dimension">{t('dimenzije')} 20х30cm</p>
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
