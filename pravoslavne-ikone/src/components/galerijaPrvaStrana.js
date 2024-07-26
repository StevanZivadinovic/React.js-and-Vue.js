import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';

export const GalerijaPrvaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    imagesCloudinaryHosted[0].imgURL,
    imagesCloudinaryHosted[1].imgURL,
    imagesCloudinaryHosted[2].imgURL,
    imagesCloudinaryHosted[3].imgURL,
    imagesCloudinaryHosted[4].imgURL,
    imagesCloudinaryHosted[5].imgURL,
    imagesCloudinaryHosted[6].imgURL,
    imagesCloudinaryHosted[7].imgURL,
    imagesCloudinaryHosted[8].imgURL,
  ];
  
  const textHeader = [
    // t('sv_vukasin_klepacki'),
    t('sv_jovan_krstitelj'),
    t('sv_velikomucenik_dimitrije'),
    t('sv_velikomucenik_knez_lazar'),
    t('majka_bozija_decanska'),
    t('majka_bozija'),
    t('sv_mucenik_justin_filosof'),
    t('sv_nektarije_eginski'),
    t('sv_arhangel_mihail'),
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
  return (
    <div>
      <div className="row1">
        <div className="col1">
          <div className="sektor">
          <img
              alt=""
              className="slika"
              src={imagesCloudinaryHosted[0].imgURL}
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
              src={imagesCloudinaryHosted[1].imgURL}
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
              src={imagesCloudinaryHosted[2].imgURL}
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
              src={imagesCloudinaryHosted[3].imgURL}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(3);
              }}
            />
            <p className="title">{t('sv_velikomucenik_knez_lazar')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={imagesCloudinaryHosted[4].imgURL}
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
              src={imagesCloudinaryHosted[5].imgURL}
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
              src={imagesCloudinaryHosted[6].imgURL}
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
              src={imagesCloudinaryHosted[7].imgURL}
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
              src={imagesCloudinaryHosted[8].imgURL}
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
export default GalerijaPrvaStrana;