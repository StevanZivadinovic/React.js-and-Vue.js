import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';



export const GalerijaCetvrtaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    imagesCloudinaryHosted[26],
    imagesCloudinaryHosted[27],
    imagesCloudinaryHosted[28],
    imagesCloudinaryHosted[29],
    imagesCloudinaryHosted[30],
    imagesCloudinaryHosted[31],
    imagesCloudinaryHosted[32],
    imagesCloudinaryHosted[33],
    imagesCloudinaryHosted[34],
  ];
  
  const textHeader = [
    t('casni_krst'),
    t('sv_arhangel_mihail'),
    t('sv_sava'),
    t('sv_velikomucenik_dimitrije'),
    t('sv_prorok_ilija'),
    t('sv_vasilije_ostroski'),
    t('sv_jovan_krstitelj'),
    t('sv_prepodobna_mati_paraskeva'),
    t('sv_velikomucenik_georgije'),
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
  return (
 
      <div>
      <div className="row1">
        {images.map((image, index) => (
          <div className="col1" key={index}>
            <div className="sektor">
              <LazyLoad height={200} offset={100} className='lazyLoadClass'>
                <img
                  alt={`ikona`}
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

export default GalerijaCetvrtaStrana;
