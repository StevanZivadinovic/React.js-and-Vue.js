import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import PageGalleryLightbox from '../helperComponents/pageGalleryLightbox';
import PageGalleryImages from '../helperComponents/pageGalleryImages';

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
  // }
};

export default GalerijaSestaStrana;
