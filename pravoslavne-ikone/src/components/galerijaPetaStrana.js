import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import ikona43 from './../assets/ikona43.png';
import PageGalleryLightbox from '../helperComponents/pageGalleryLightbox';
import PageGalleryImages from '../helperComponents/pageGalleryImages';

const GalerijaPetaStrana = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();
  const images = [
    imagesCloudinaryHosted[35],
    imagesCloudinaryHosted[36],
    imagesCloudinaryHosted[37],
    imagesCloudinaryHosted[38],
    imagesCloudinaryHosted[39],
    imagesCloudinaryHosted[40],
    ikona43,
    imagesCloudinaryHosted[41],
    imagesCloudinaryHosted[42],
  ];

  const textHeader = [
    t('sv_nikolaj_mirlikijski'),
    t('sv_velikomucenik_knez_lazar'),
    t('sv_arhidjakon_stefan'),
    t('sv_velikomucenik_pantelejmon'),
    t('sv_mucenik_trifun'),
    t('presveta_bogorodica'),
    t('blagovesti'),
    t('sv_velikomucenik_prokopije'),
    t('sv_petar_i_fevronija'),
  ];

  const textFooter = [
    '21x30cm',
    '21x30cm',
    '21x30cm',
    '21х30cm',
    '26x61cm',
    '30x40cm',
    '2х(18x40)cm',
    '30x40cm',
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

export default GalerijaPetaStrana;
