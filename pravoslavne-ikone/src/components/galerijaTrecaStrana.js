import React, { useState } from 'react';
import ikona19 from './../assets/ikona19.png';
import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import PageGalleryLightbox from '../helperComponents/pageGalleryLightbox';
import PageGalleryImages from '../helperComponents/pageGalleryImages';


const GalerijaTrecaStrana = () => {
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

export default GalerijaTrecaStrana;