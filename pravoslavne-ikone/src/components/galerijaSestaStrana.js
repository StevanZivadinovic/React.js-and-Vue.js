import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';

const GalerijaSestaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    imagesCloudinaryHosted[43],
    imagesCloudinaryHosted[44],
    imagesCloudinaryHosted[45],
    imagesCloudinaryHosted[46],
    imagesCloudinaryHosted[47],
    imagesCloudinaryHosted[48],
    imagesCloudinaryHosted[49],
    imagesCloudinaryHosted[50],
    imagesCloudinaryHosted[51],



  ];
  const textHeader = [
    t('sv_ksenija_petrogradska'),
    t('sv_arhangel_mihail'),
    t('zitije_svetog_proroka_ilije'),
    t('sv_prepodobna_mati_paraskeva'),
    t('sv_velikomucenik_knez_lazar'),
    t('gospod_isus_hristos'),
    t('sv_arhangel_mihail'),
    t('sv_arhangel_mihail'),
    t('majka_bozija')


  ];
  const textFooter = ['30x40cm', '25x50cm', '45х60cm', '18x40cm', '30x40cm','30x40cm','30x40cm','30x40cm', '21x30cm'];
  return (
    <div>
      <div className="row1">
        {images.map((image, index) => (
          <div className="col1" key={index}>
            <div className="sektor">
              <LazyLoad height={200} offset={100} className="lazyLoadClass">
                <img
                  alt={`икона pravoslavne ikone`}
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
  // }
};

export default GalerijaSestaStrana;
