import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import LazyLoad from 'react-lazyload';
import PageGalleryLightbox from '../helperComponents/pageGalleryLightbox';
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
      <PageGalleryLightbox
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        images={images}
        textHeader={textHeader}
        textFooter={textFooter}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
    </div>
  );
};
export default GalerijaOsmaStrana;
