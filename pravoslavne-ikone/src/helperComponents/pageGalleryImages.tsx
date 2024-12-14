import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { pageGalleryLight } from '../types/types';

const PageGalleryImages = ({ images, textHeader, textFooter, setIsOpen, setPhotoIndex }: pageGalleryLight) => {
  const { t } = useTranslation();
  return (
    <div className="mobile:flex-col mobile:w-full mobile:mb-[8rem] flex justify-around flex-wrap w-[70%] m-[0_auto] mb-[10rem]">
      {images.map((image, index) => (
        <div className="" key={index}>
          <div className="flex flex-col justify-center items-center mb-[2rem]">
            <LazyLoad height={200} offset={100} className='-mb-[1rem] flex justify-center relative group'>
            <div className="hidden absolute top-0 left-0 bottom-0 right-0 bg-opacity-50 group-hover:flex justify-center items-center">
            <img width="48" height="48" src="https://img.icons8.com/color/48/filled-plus-2-math.png" alt="filled-plus-2-math"/>
            </div>
              <img
                alt={`икона pravoslavne ikone`}
                className="group-hover:opacity-40 mobile:m-[2rem_auto_0_auto] hover:cursor-pointer w-[300px] mobile:w-[60%] m-[10px_20px] rounded-t-[5px] max-h-[400px] object-contain"
                width={200}
                src={image}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
              />
            </LazyLoad>
            <p lang='sr-Cyrl' className="underline font-pacifico w-[300px] bg-white text-[18px] text-[#808080] text-center">{textHeader[index]}</p>
            <p lang='sr-Cyrl' className="w-[300px] bg-white text-[18px] text-[#808080] rounded-b-[0.5rem] text-center">
              {t('dimenzije')} {textFooter[index]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageGalleryImages;
