import React, {Component} from 'react'
import ikona10 from "./../assets/ikona10.jpg";
import ikona11 from "./../assets/ikona11.jpg";
import ikona12 from "./../assets/ikona12.jpg";
import ikona13 from "./../assets/ikona13.jpg";
import ikona14 from "./../assets/ikona14.jpg";
import ikona15 from "./../assets/ikona15.jpg";
import ikona16 from "./../assets/ikona16.jpg";
import ikona17 from "./../assets/ikona17.jpg";
import ikona18 from "./../assets/ikona18.jpg";
import Lightbox from "react-image-lightbox";
const images = [
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




export default class GalerijaDrugaStrana extends Component {

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
      src={ikona10}
      onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
    />
    <p className="title"> Св Арханђел Гаврил - Бели Анђео</p>
    <p>Димензије 21х30cm</p>
    {/* <p className="last">Цена са златом 110е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona11}
      onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
    />
    <p className="title">Св Великомученик Георгије</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 170е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona12}
      onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
    />
    <p className="title">Св Јован Крститељ</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 110е</p> */}
  </div>
</div>

<div className="col1">
  <div className="sektor">
    <img
      imageTitle="slika"
      className="slika"
      src={ikona13}
      onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
    />
    <p className="title">Св Апостол Марко</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona14}
      onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
    />
    <p className="title">Икона Пресвете Тројице</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona15}
      onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
    />
    <p className="title">Св Максим Исповедник</p>
    <p>Димензије 18х24cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>
</div>

<div className="col1">
  <div className="sektor">
    <img
      imageTitle="slika"
      className="slika"
      src={ikona16}
      onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
    />
    <p className="title">Св Јосиф Исихаста</p>
    <p>Димензије 15х20cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona17}
      onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
    />
    <p className="title">Св Херувима и Св Петка</p>
    <p>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona18}
      onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
    />
    <p className="title">Св Василије Острошки</p>
    <p>Димензије 20х30cm</p>
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