import React, { useState } from 'react';
import ikona48 from './../assets/ikona48.png';
import ikona49 from './../assets/ikona49.png';
import ikona50 from './../assets/ikona50.png';
import ikona51 from './../assets/ikona51.png';
import ikona52 from './../assets/ikona52.png';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';

export const GalerijaSestaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    imagesCloudinaryHosted[43],
    imagesCloudinaryHosted[44],
    imagesCloudinaryHosted[45],
    imagesCloudinaryHosted[46],
    imagesCloudinaryHosted[47],
  ];
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
        {images.map((image, index) => (
          <div className="col1" key={index}>
            <div className="sektor">
              <LazyLoad height={200} offset={100} className='lazyLoadClass'>
                <img
                  alt=""
                  className="slika"
                  width={200}
                  src={image}
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(index);
                  }}
                />
              </LazyLoad>
              <p className="title">{textHeader[index]}</p>
              <p className="dimension">
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
  // }
};

export default GalerijaSestaStrana;
