import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import ikona43 from './../assets/ikona43.png';

export const GalerijaPetaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();
  const images = [
    imagesCloudinaryHosted[35],
    imagesCloudinaryHosted[36],
    imagesCloudinaryHosted[37],
    imagesCloudinaryHosted[38],
    imagesCloudinaryHosted[39],
    imagesCloudinaryHosted[40],
    ikona43,
    imagesCloudinaryHosted[41],
    imagesCloudinaryHosted[42],
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
      {images.map((image, index) => (
        <div className="col1" key={index}>
          <div className="sektor">
            <LazyLoad height={200} offset={100} className='lazyLoadClass'>
              <img
                alt={`икона`}
                className="slika"
                src={image}
                width={200}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
              />
            </LazyLoad>
            <p lang='sr-Cyrl'  className="title">{textHeader[index]}</p>
            <p lang='sr-Cyrl' className="dimension">
              {t('dimenzije')} {textFooter[index]}
            </p>
          </div>
        </div>
      ))}
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
