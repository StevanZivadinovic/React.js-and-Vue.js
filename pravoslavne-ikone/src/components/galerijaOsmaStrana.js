import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import PageGalleryLightbox from '../helperComponents/pageGalleryLightbox';
import PageGalleryImages from '../helperComponents/pageGalleryImages';
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
      <PageGalleryImages
        images={images}
        textHeader={textHeader}
        textFooter={textFooter}
        setIsOpen={setIsOpen}
        setPhotoIndex={setPhotoIndex}
      />
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
