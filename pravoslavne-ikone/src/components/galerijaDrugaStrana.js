import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import LazyLoad from 'react-lazyload';
import PageGalleryLightbox from '../helperComponents/pageGalleryLightbox';

const GalerijaDrugaStrana = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [
    imagesCloudinaryHosted[9],
    imagesCloudinaryHosted[10],
    imagesCloudinaryHosted[11],
    imagesCloudinaryHosted[12],
    imagesCloudinaryHosted[13],
    imagesCloudinaryHosted[14],
    imagesCloudinaryHosted[15],
    imagesCloudinaryHosted[16],
    imagesCloudinaryHosted[17],
  ];

  const textHeader = [
    t('sv_arhandjel_gavril_beli_andjeo'),
    t('sv_velikomucenik_georgije'),
    t('sv_jovan_krstitelj'),
    t('sv_apostol_marko'),
    t('presveta_trojica'),
    t('sv_maksim_ispovednik'),
    t('sv_josif_isihasta'),
    t('sv_heruvima_sveta_petka'),
    t('sv_vasilije_ostroski'),
  ];

  const textFooter = [
    '21x30cm',
    '30x40cm',
    '30x40cm',
    '30x40cm',
    '30x40cm',
    '18x24cm',
    '15x20cm',
    '30x40cm',
    '20x30cm',
  ];
  return (
    <div>
      <div className="row1">
        {images.map((image, index) => (
          <div className="col1" key={index}>
            <div className="sektor">
              <LazyLoad height={200} offset={100} className='lazyLoadClass'>
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
export default GalerijaDrugaStrana;
