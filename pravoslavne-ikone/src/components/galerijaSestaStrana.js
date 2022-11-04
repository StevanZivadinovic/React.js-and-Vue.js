import React, {Component} from 'react'
import ikona48 from "./../assets/ikona48.png";

import Lightbox from "react-image-lightbox";
const images = [
    ikona48,
 

];

const textHeader = [
  "Св Ксенија Петроградска",

];

const textFooter = [
  "30x40cm",
  "21x30cm",
  "21x30cm",
  "21х30cm",
  "26x61cm",
  "30x40cm",
  "2х(18x40)cm",
  "30x40cm",
  "30x40cm",
];




export default class GalerijaSestaStrana extends Component {

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
      src={ikona48}
      onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
    />
    <p className="title"> Св Ксенија Петроградска</p>
    <p className='dimension'>Димензије 30х40cm</p>
    {/* <p className="last">Цена са златом 110е</p> */}
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