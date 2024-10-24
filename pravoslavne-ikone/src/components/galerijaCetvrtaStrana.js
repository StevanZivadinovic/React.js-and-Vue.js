import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from '../consts/imagesCloudinaryHosted';
import PageGalleryLightbox from '../helperComponents/pageGalleryLightbox';
import PageGalleryImages from '../helperComponents/pageGalleryImages';



const GalerijaCetvrtaStrana = () => {
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

export default GalerijaCetvrtaStrana;
