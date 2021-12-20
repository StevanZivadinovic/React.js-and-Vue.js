import React from "react";
import Lightbox from "react-image-lightbox";
import ikona1 from "./../assets/ikona1.jpg";
import ikona2 from "./../assets/ikona2.jpg";
import ikona3 from "./../assets/ikona3.jpg";
import ikona4 from "./../assets/ikona4.jpg";
import ikona5 from "./../assets/ikona5.jpg";
import ikona6 from "./../assets/ikona6.jpg";
import ikona7 from "./../assets/ikona7.jpg";
import ikona8 from "./../assets/ikona8.jpg";
import ikona9 from "./../assets/ikona9.jpg";

import ikona10 from "./../assets/ikona10.jpg";
import ikona11 from "./../assets/ikona11.jpg";
import ikona12 from "./../assets/ikona12.jpg";
import ikona13 from "./../assets/ikona13.jpg";
import ikona14 from "./../assets/ikona14.jpg";
import ikona15 from "./../assets/ikona15.jpg";
import ikona16 from "./../assets/ikona16.jpg";
import ikona17 from "./../assets/ikona17.jpg";
import ikona18 from "./../assets/ikona18.jpg";
import fb from "./../assets/facebook.svg";

import "./../style/galerija.scss";
import  GalerijaPrvaStrana  from "./galerijaPrvaStrana";
import GalerijaDrugaStrana  from "./galerijaDrugaStrana";

const images = [
  ikona1,
  ikona2,
  ikona3,
  ikona4,
  ikona5,
  ikona6,
  ikona7,
  ikona8,
  ikona9,
  ikona10,
  ikona11,
  ikona12,
  ikona13,
  ikona14,
  ikona15,
  ikona16,
  ikona17,
  ikona18,
];

const textHeader = [
  "Св Вукашин Клепачки",
  "Св Јован Крститељ",
  "Св Великомученик Димитрије",
  "Св Кнез Лазар",
  "Мајка Божија - Дечанска",
  "Икона Мајке Божије",
  "Св Муч Јустин Философ",
  "Св Нектарије Егински",
  "Св Архангел Михаил",
];

const textFooter = [
  "21x30cm",
  "30x40cm",
  "18x40cm",
  "30x40cm",
  "30x40cm",
  "30x40cm",
  "30x40cm",
  "30x40cm",
  "26x61cm",
];

export default class Galerija extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="mainGalerija">
        <h1 className="text-middle mt-4">Галерија</h1>
        <GalerijaPrvaStrana />
        <GalerijaDrugaStrana/>
           <div className="contactDetails1">
            <p>gagaikone@live.com</p>
            <p>061/321-60-87</p>
            <p>
              <a
                target="_blank"
                href="https://www.facebook.com/Pravoslavne-ikone-Nis-1691948927791453"
              >
                <img id="fb" src={fb}></img>
              </a>
            </p>
          </div>

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              imageTitle={textHeader[photoIndex]}
              imageCaption={textFooter[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
      </div>
    );
  }
}
