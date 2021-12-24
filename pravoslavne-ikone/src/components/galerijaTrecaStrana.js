import React, {Component} from 'react'
import ikona19 from "./../assets/ikona19.jpg";
import ikona20 from "./../assets/ikona20.jpg";
import ikona21 from "./../assets/ikona21.jpg";
import ikona22 from "./../assets/ikona22.jpg";
import ikona23 from "./../assets/ikona23.jpg";
import ikona24 from "./../assets/ikona24.jpg";
import ikona25 from "./../assets/ikona25.jpg";
import ikona26 from "./../assets/ikona26.jpg";
import ikona27 from "./../assets/ikona27.jpg";
import Lightbox from "react-image-lightbox";
const images = [
  ikona19,
  ikona20,
  ikona21,
  ikona22,
  ikona23,
  ikona24,
  ikona25,
  ikona26,
  ikona27,

];

const textHeader = [
  "Икона Господња",
  "Св Симеон Нови Богослов",
  "Св Григорије Палама",
  "Икона Мајке Божије Атонске",
  "Св Архангел Михаил",
  "Св Архангел Рафаил",
  "Св Архангел Варахил",
  "Св Архангел Урил",
  "Св Архангел Салатил",
];

const textFooter = [
  "18x40cm",
  "15x20cm",
  "15x20cm",
  "25х50cm",
  "18x40cm",
  "18x40cm",
  "18x40cm",
  "18x40cm",
  "18x40cm",
];




export default class GalerijaTrecaStrana extends Component {

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
      src={ikona19}
      onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
    />
    <p className="title"> Икона Господња</p>
    <p className='dimension'>Димензије 18х40cm</p>
    {/* <p className="last">Цена са златом 110е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona20}
      onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
    />
    <p className="title">Св Симеон Нови Богослов</p>
    <p className='dimension'>Димензије 15х20cm</p>
    {/* <p className="last">Цена са златом 170е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona21}
      onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
    />
    <p className="title">Св Григорије Палама</p>
    <p className='dimension'>Димензије 15х20cm</p>
    {/* <p className="last">Цена са златом 110е</p> */}
  </div>
</div>

<div className="col1">
  <div className="sektor">
    <img
      imageTitle="slika"
      className="slika"
      src={ikona22}
      onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
    />
    <p className="title">Икона Мајке Божије Атонске</p>
    <p className='dimension'>Димензије 25х50cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona23}
      onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
    />
    <p className="title">Икона Св Архангела Михаила</p>
    <p className='dimension'>Димензије 18х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona24}
      onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
    />
    <p className="title">Икона Св Архангела Рафаила</p>
    <p className='dimension'>Димензије 18х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>
</div>

<div className="col1">
  <div className="sektor">
    <img
      imageTitle="slika"
      className="slika"
      src={ikona25}
      onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
    />
    <p className="title">Св Архангела Варахила</p>
    <p className='dimension'>Димензије 18х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona26}
      onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
    />
    <p className="title">Св Архангел Урил</p>
    <p className='dimension'>Димензије 18х40cm</p>
    {/* <p className="last">Цена са златом 150е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona27}
      onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
    />
    <p className="title">Св Архангел Салатил</p>
    <p className='dimension'>Димензије 18х40cm</p>
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