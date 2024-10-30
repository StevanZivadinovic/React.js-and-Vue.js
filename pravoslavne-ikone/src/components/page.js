import React, { useState } from 'react';
import PageGalleryLightbox from '../helperComponents/pageGalleryLightbox';
import PageGalleryImages from '../helperComponents/pageGalleryImages';


const Page = ({content}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);


  return (
    <div>
       <PageGalleryImages
        images={content?.images}
        textHeader={content?.textHeader}
        textFooter={content?.textFooter}
        setIsOpen={setIsOpen}
        setPhotoIndex={setPhotoIndex}
      />
      <PageGalleryLightbox
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        images={content?.images}
        textHeader={content?.textHeader}
        textFooter={content?.textFooter}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
    </div>
  );
};

export default Page;