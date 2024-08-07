import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';

export const GalerijaPrvaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    imagesCloudinaryHosted[0],
    imagesCloudinaryHosted[1],
    imagesCloudinaryHosted[2],
    imagesCloudinaryHosted[3],
    imagesCloudinaryHosted[4],
    imagesCloudinaryHosted[5],
    imagesCloudinaryHosted[6],
    imagesCloudinaryHosted[7],
    imagesCloudinaryHosted[8],
  ]

  const textHeader = [
    t('sv_vukasin_klepacki'),
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
        {images.map((image, index) => (
            <div className="sektor" key={index}>
              <LazyLoad height={200} offset={100} className='lazyLoadClass'>
                <img
                  alt={`икона`}
                  className="slika"
                  width={200}
                  src={image}
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(index);
                  }}
                />
              </LazyLoad>
              <p lang='sr-Cyrl' className="title">{textHeader[index]}</p>
              <p lang='sr-Cyrl' className="dimension">{t('dimenzije')} {textFooter[index]}</p>
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

export default GalerijaPrvaStrana;
