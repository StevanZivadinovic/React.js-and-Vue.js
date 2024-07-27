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
import LazyLoad from 'react-lazyload';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';


export const GalerijaTrecaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    ikona19,
    imagesCloudinaryHosted[18],  
    imagesCloudinaryHosted[19],
    imagesCloudinaryHosted[20],
    imagesCloudinaryHosted[21],
    imagesCloudinaryHosted[22],
    imagesCloudinaryHosted[23],
    imagesCloudinaryHosted[24],
    imagesCloudinaryHosted[25],

  ];
  
  const textHeader = [
    t('gospod_isus_hristos'),
    t('sv_simeon_novi_bogoslov'),
    t('sv_georgije_palama'),
    t('majka_bozija_atonska'),
    t('sv_arhangel_mihail'),
    t('sv_arhangel_rafail'),
    t('sv_arhangel_varahil'),
    t('sv_arhangel_uril'),
    t('sv_arhangel_salatil'),
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
};

export default GalerijaTrecaStrana;