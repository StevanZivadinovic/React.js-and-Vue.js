import React, {Component} from "react";
import ikona1 from "./../assets/ikona1.jpg";
import ikona2 from "./../assets/ikona2.jpg";
import ikona3 from "./../assets/ikona3.jpg";
import ikona4 from "./../assets/ikona4.jpg";
import ikona5 from "./../assets/ikona5.jpg";
import ikona6 from "./../assets/ikona6.jpg";
import ikona7 from "./../assets/ikona7.jpg";
import ikona8 from "./../assets/ikona8.jpg";
import ikona9 from "./../assets/ikona9.jpg";
import Lightbox from "react-image-lightbox";


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




export default class galerijaPrvaStrana extends Component {

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
      
<div>
<div className="row1">
<div className="col1">
  <div className="sektor">
    <img
      imageTitle="slika"
      className="slika"
      src={ikona1}
      onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
    />
    <p className="title"> Св Вукашин Клепачки</p>
    <p>Димензије 21х30cm</p>
    {/* <p className="last">Цена са златом 110е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona2}
      onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
    />
    <p className="title">Св Јован Крститељ</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 170е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona3}
      onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
    />
    <p className="title">Св Великомученик Димитрије</p>
    <p>Димензије 18х40cm</p>
    {/* <p className="last">Цена са златом 110е</p> */}
  </div>
</div>

<div className="col1">
  <div className="sektor">
    <img
      imageTitle="slika"
      className="slika"
      src={ikona4}
      onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
    />
    <p className="title">Св Кнез Лазар</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona5}
      onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
    />
    <p className="title">Мајка Божија - Дечанска</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona6}
      onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
    />
    <p className="title">Икона Мајке Божије</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>
</div>

<div className="col1">
  <div className="sektor">
    <img
      imageTitle="slika"
      className="slika"
      src={ikona7}
      onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
    />
    <p className="title">Св Муч Јустин Философ</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona8}
      onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
    />
    <p className="title">Св Нектарије Егински</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona9}
      onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
    />
    <p className="title">Св Архангел Михаил</p>
    <p>Димензије 26х61cm</p>
    {/* <p className="last">Цена са златом 200е</p> */}
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


    )
  }
}














