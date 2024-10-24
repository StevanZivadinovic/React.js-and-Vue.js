import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import LazyLoad from 'react-lazyload';
import PageGalleryLightbox from '../helperComponents/pageGalleryLightbox';
const GalerijaSedmaStrana = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [
    imagesCloudinaryHosted[52],
    imagesCloudinaryHosted[53],
    imagesCloudinaryHosted[54],
    imagesCloudinaryHosted[55],
    imagesCloudinaryHosted[56],
    imagesCloudinaryHosted[57],
    imagesCloudinaryHosted[58],
    imagesCloudinaryHosted[59],
    imagesCloudinaryHosted[60],
  ];

  const textHeader = [
    t('sv_ravnoapostolna_marija_magdalina'),
    t('sv_apostoli_petar_i_pavle'),
    t('sv_prepodobna_mati_paraskeva'),
    t('sv_apostol_pavle'),
    t('sv_velikomucenik_georgije'),
    t('sv_nikolaj_mirlikijski'),
    t('sv_velikomucenik_dimitrije'),
    t('sv_prepodobna_mati_paraskeva_srbska'),
    t('sv_pravedni_melhisedek'),
  ];

  const textFooter = [
    '18x40cm',
    '30x40cm',
    '30x40cm',
    '18x24cm',
    '21x30cm',
    '30x40cm',
    '23x50cm',
    '18x40cm',
    '23x50cm',
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
export default GalerijaSedmaStrana;
