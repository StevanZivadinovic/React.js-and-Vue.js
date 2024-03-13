import React, { useState } from 'react';
import ikona37 from './../assets/ikona37.JPG';
import ikona38 from './../assets/ikona38.JPG';
import ikona39 from './../assets/ikona39.JPG';
import ikona40 from './../assets/ikona40.JPG';
import ikona41 from './../assets/ikona41.jpg';
import ikona42 from './../assets/ikona42.png';
import ikona43 from './../assets/ikona43.png';
import ikona44 from './../assets/ikona44.png';
import ikona45 from './../assets/ikona45.png';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';

export const GalerijaPetaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();
  const images = [
    ikona37,
    ikona38,
    ikona39,
    ikona40,
    ikona41,
    ikona42,
    ikona43,
    ikona44,
    ikona45,
  ];

  const textHeader = [
    t('sv_nikolaj_mirlikijski'),
    t('sv_velikomucenik_knez_lazar'),
    t('sv_arhidjakon_stefan'),
    t('sv_velikomucenik_pantelejmon'),
    t('sv_mucenik_trifun'),
    t('presveta_bogorodica'),
    t('blagovesti'),
    t('sv_velikomucenik_prokopije'),
    t('sv_petar_i_fevronija'),
  ];

  const textFooter = [
    '21x30cm',
    '21x30cm',
    '21x30cm',
    '21х30cm',
    '26x61cm',
    '30x40cm',
    '2х(18x40)cm',
    '30x40cm',
    '30x40cm',
  ];
  return (
    <div>
      <div className="row1">
        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona37}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(0);
              }}
            />
            <p className="title">{t('sv_nikolaj_mirlikijski')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona38}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(1);
              }}
            />
            <p className="title">{t('sv_velikomucenik_knez_lazar')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona39}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(2);
              }}
            />
            <p className="title">{t('sv_arhidjakon_stefan')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona40}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(3);
              }}
            />
            <p className="title">{t('sv_velikomucenik_pantelejmon')}</p>
            <p className="dimension">{t('dimenzije')} 21х30cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona41}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(4);
              }}
            />
            <p className="title">{t('sv_mucenik_trifun')}</p>
            <p className="dimension">{t('dimenzije')} 26х61cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona42}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(5);
              }}
            />
            <p className="title">{t('presveta_bogorodica')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>
        </div>

        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona43}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(6);
              }}
            />
            <p className="title">{t('blagovesti')}</p>
            <p className="dimension">{t('dimenzije')} 2х(18х40)cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona44}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(7);
              }}
            />
            <p className="title">{t('sv_velikomucenik_prokopije')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona45}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(8);
              }}
            />
            <p className="title">{t('sv_petar_i_fevronija')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
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

export default GalerijaPetaStrana;
