import React, { Component, useState } from "react";
import ikona48 from "./../assets/ikona48.png";
import ikona49 from "./../assets/ikona49.png";

import Lightbox from "react-image-lightbox";
const images = [ikona48, ikona49];
const textHeader = ["Св Ксенија Петроградска", "Св Архангел Михаил"];
const textFooter = ["30x40cm", "25x50cm"];


export  const GalerijaSestaStrana=() => {
const [isOpen, setIsOpen] = useState(false);
const [photoIndex, setPhotoIndex] = useState(0)

    return (
      <div>
        <div className="row1">
          <div className="col1">
            <div className="sektor">
              <img
                imageTitle="slika"
                className="slika"
                src={ikona48}
                onClick={() =>{setIsOpen(true); setPhotoIndex(0)}}
              />
              <p className="title"> Св Ксенија Петроградска</p>
              <p className="dimension">Димензије 30х40cm</p>
            </div>

            <div className="sektor">
              <img
                imageTitle="slika"
                className="slika"
                src={ikona49}
                onClick={() =>{setIsOpen(true); setPhotoIndex(1)}}
              />
              <p className="title"> Св Архангел Михаил</p>
              <p className="dimension">Димензије 25х50cm</p>
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            imageTitle={textHeader[photoIndex]}
            imageCaption={textFooter[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
      </div>
    );
  // }
}

export default GalerijaSestaStrana
