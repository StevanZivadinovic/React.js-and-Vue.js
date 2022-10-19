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

import ikona19 from "./../assets/ikona19.jpg";
import ikona20 from "./../assets/ikona20.jpg";
import ikona21 from "./../assets/ikona21.jpg";
import ikona22 from "./../assets/ikona22.jpg";
import ikona23 from "./../assets/ikona23.jpg";
import ikona24 from "./../assets/ikona24.jpg";
import ikona25 from "./../assets/ikona25.jpg";
import ikona26 from "./../assets/ikona26.jpg";
import ikona27 from "./../assets/ikona27.jpg";

import ikona28 from "./../assets/ikona28.jpg";
import ikona29 from "./../assets/ikona29.jpg";
import ikona30 from "./../assets/ikona30.jpg";
import ikona31 from "./../assets/ikona31.jpg";
import ikona32 from "./../assets/ikona32.jpg";
import ikona33 from "./../assets/ikona33.jpg";
import ikona34 from "./../assets/ikona34.jpg";
import ikona35 from "./../assets/ikona35.jpg";
import ikona36 from "./../assets/ikona36.jpg";

import ikona37 from "./../assets/ikona37.JPG";
import ikona38 from "./../assets/ikona38.JPG";
import ikona39 from "./../assets/ikona39.JPG";
// import ikona40 from "./../assets/ikona40.JPG";
// import ikona41 from "./../assets/ikona41.jpg";
// import ikona42 from "./../assets/ikona42.jpg";
// import ikona43 from "./../assets/ikona43.jpg";
// import ikona44 from "./../assets/ikona44.jpg";
// import ikona45 from "./../assets/ikona45.jpg";
// import fb from "./../assets/facebook.svg";

import "./../style/galerija.scss";
import Footer from './footer'
import  GalerijaPrvaStrana  from "./galerijaPrvaStrana";
import GalerijaDrugaStrana  from "./galerijaDrugaStrana";
import GalerijaTrecaStrana  from "./galerijaTrecaStrana";
import GalerijaCetvrtaStrana from './galerijaCetvrtaStrana';
import GalerijaPetaStrana from './galerijaPetaStrana';



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
  ikona19,
  ikona20,
  ikona21,
  ikona22,
  ikona23,
  ikona24,
  ikona25,
  ikona26,
  ikona27,
  ikona28,
  ikona29,
  ikona30,
  ikona31,
  ikona32,
  ikona33,
  ikona34,
  ikona35,
  ikona36,
  ikona37,
  ikona38,
  ikona39
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
        <GalerijaTrecaStrana/>
        <GalerijaCetvrtaStrana/>
        <GalerijaPetaStrana/>
          <Footer></Footer>

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
