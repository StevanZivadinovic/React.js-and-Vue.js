import React, { useState } from 'react';
import ikona48 from './../assets/ikona48.png';
import ikona49 from './../assets/ikona49.png';
import ikona50 from './../assets/ikona50.png';
import ikona51 from './../assets/ikona51.png';
import ikona52 from './../assets/ikona52.png';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';

export const GalerijaSestaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const images = [ikona48, ikona49, ikona50, ikona51, ikona52];
  const textHeader = [
    t('sv_ksenija_petrogradska'),
    t('sv_arhangel_mihail'),
    t('zitije_svetog_proroka_ilije'),
    t('sv_prepodobna_mati_paraskeva'),
    t('sv_velikomucenik_knez_lazar'),
  ];
  const textFooter = ['30x40cm', '25x50cm', '45х60cm', '18x40cm', '30x40cm'];
  return (
    <div>
      <div className="row1">
        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona48}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(0);
              }}
            />
            <p className="title">{t('sv_ksenija_petrogradska')}</p>
            <p className="dimension">{t('dimenzije')} 30х40cm</p>
          </div>

          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona49}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(1);
              }}
            />
            <p className="title">{t('sv_arhangel_mihail')}</p>
            <p className="dimension">{t('dimenzije')} 25х50cm</p>
          </div>
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona50}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(2);
              }}
            />
            <p className="title">{t('zitije_svetog_proroka_ilije')}</p>
            <p className="dimension">{t('dimenzije')} 45х60cm</p>
          </div>
        </div>
        <div className="col1">
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona51}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(3);
              }}
            />
            <p className="title">{t('sv_prepodobna_mati_paraskeva')}</p>
            <p className="dimension">{t('dimenzije')} 18х40cm</p>
          </div>
          <div className="sektor">
            <img
              alt=""
              className="slika"
              src={ikona52}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(4);
              }}
            />
            <p className="title">{t('sv_velikomucenik_knez_lazar')}</p>
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
  // }
};

export default GalerijaSestaStrana;
