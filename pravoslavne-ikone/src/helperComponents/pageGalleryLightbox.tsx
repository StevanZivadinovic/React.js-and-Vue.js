import Lightbox from 'react-image-lightbox';
import { PageGalleryLightboxType } from '../types/types';

const PageGalleryLightbox = ({
  isOpen,
  setIsOpen,
  images,
  textHeader,
  textFooter,
  photoIndex,
  setPhotoIndex,
}: PageGalleryLightboxType): JSX.Element | null => {
  if (!isOpen) return null;
  return (
    isOpen && (
      <Lightbox
        mainSrc={images?.[photoIndex]}
        imageTitle={textHeader?.[photoIndex]}
        imageCaption={textFooter?.[photoIndex]}
        nextSrc={images?.[(photoIndex + 1) % images?.length]}
        prevSrc={images?.[(photoIndex + images?.length - 1) % images?.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images?.length - 1) % images?.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images?.length)
        }
      />
    )
  );
};

export default PageGalleryLightbox;
