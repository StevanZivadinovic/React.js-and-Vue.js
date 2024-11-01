import React from 'react'
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';

const PageGalleryImages = ({images, textHeader, textFooter, setIsOpen, setPhotoIndex }) => {
    const { t } = useTranslation();
  return (
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
              <p lang='sr-Cyrl' className="titleGalerija">{textHeader[index]}</p>
              <p lang='sr-Cyrl' className="dimension">
                {t('dimenzije')} {textFooter[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default PageGalleryImages;
