import React, {Component} from 'react'
import ikona37 from "./../assets/ikona37.JPG";
import ikona38 from "./../assets/ikona38.JPG";
import ikona39 from "./../assets/ikona39.JPG";
import ikona40 from "./../assets/ikona40.JPG";
import ikona41 from "./../assets/ikona41.jpg";
import ikona42 from "./../assets/ikona42.png";
import ikona43 from "./../assets/ikona43.png";
import ikona44 from "./../assets/ikona44.png";
import ikona45 from "./../assets/ikona45.png";
import Lightbox from "react-image-lightbox";
const images = [
  ikona37,
  ikona38,
  ikona39,
  ikona40,
  ikona41,
  ikona42,
  ikona43,
  ikona44,
  ikona45,

];

const textHeader = [
  "Св Николај Мирликијски",
  "Св Кнез Лазар",
  "Св Архиђакон Стефан",
  "Св Великомученик Пантелејмон",
  "Св Мученик Трифун",
  "Пресвета Богородица",
  "Благовести",
  "Св Великомученик Прокопије",
  "Св Петар и Февронија",
];

const textFooter = [
  "21x30cm",
  "21x30cm",
  "21x30cm",
  "21х30cm",
  "26x61cm",
  "30x40cm",
  "2х(18x40)cm",
  "30x40cm",
  "30x40cm",
];




export default class GalerijaCetvrtaStrana extends Component {

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
      src={ikona37}
      onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
    />
    <p className="title"> Св Николај Мирликијски</p>
    <p className='dimension'>Димензије 21х30cm</p>
    {/* <p className="last">Цена са златом 110е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona38}
      onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
    />
    <p className="title">Св Кнез Лазар</p>
    <p className='dimension'>Димензије 21х30cm</p>
    {/* <p className="last">Цена са златом 170е</p> */}
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona39}
      onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
    />
    <p className="title">Св Архиђакон Стефан</p>
    <p className='dimension'>Димензије 21х30cm</p>
    {/* <p className="last">Цена са златом 110е</p> */}
  </div>
</div>

<div className="col1">
  <div className="sektor">
    <img
      imageTitle="slika"
      className="slika"
      src={ikona40}
      onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
    />
    <p className="title">Св Великомученик Пантелејмон</p>
    <p className='dimension'>Димензије 21х30cm</p>
   
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona41}
      onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
    />
    <p className="title">Св Мученик Трифун</p>
    <p className='dimension'>Димензије 26х61cm</p>
   
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona42}
      onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
    />
    <p className="title">Пресвета Богородица</p>
    <p className='dimension'>Димензије 30х40cm</p>
    
  </div>
</div>

<div className="col1">
  <div className="sektor">
    <img
      imageTitle="slika"
      className="slika"
      src={ikona43}
      onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
    />
    <p className="title">Благовести</p>
    <p className='dimension'>Димензије 2х(18х40)cm</p>
    
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona44}
      onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
    />
    <p className="title">Св Великомученик Прокопије</p>
    <p className='dimension'>Димензије 30х40cm</p>
    
  </div>

  <div className="sektor">
    <img
      className="slika"
      src={ikona45}
      onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
    />
    <p className="title">Св Петар и Февронија</p>
    <p className='dimension'>Димензије 30х40cm</p>
    
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