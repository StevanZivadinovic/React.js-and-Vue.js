import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'react-image-lightbox';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import LazyLoad from 'react-lazyload';
const GalerijaOsmaStrana = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [
    imagesCloudinaryHosted[61],
    imagesCloudinaryHosted[62],
  ];

  const textHeader = [
    t('sv_arhangel_mihail'),
    t('sv_jovan_krstitelj'),
  ];

  const textFooter = [
    '18x40cm',
    '30x40cm',
  ];
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
              <p lang="sr-Cyrl" className="title">
                {textHeader[index]}
              </p>
              <p lang="sr-Cyrl" className="dimension">
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
export default GalerijaOsmaStrana;
