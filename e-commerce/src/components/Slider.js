import React from "react";
import './../style/slider.scss'
import fashion1 from './../img/fashion1.png'
const Slider = () => {
  return (
    <div className="mainSlider">
      <div className="arrows">
        <span className="arrow left">
          <i className="fas fa-arrow-left"></i>
        </span>
       {/* <div className="wrapper">
          <div className="slide">
            <div className="imageContainer">
              <img src={fashion1}/>
            </div>
            <div className="infoContainer">
             <div className="title">Naslov</div>
             <div className="textInfo">Some random text...</div>
             <button className="button">Show now</button>

            </div>
          </div>
       

          <div className="slide">
            <div className="imageContainer">
              <img src={fashion1}/>
            </div>
            <div className="infoContainer">
             <div className="title">Naslov</div>
             <div className="textInfo">Some random text...</div>
             <button className="button">Show now</button>

            </div>
          </div>


          <div className="slide">
            <div className="imageContainer">
              <img src={fashion1}/>
            </div>
            <div className="infoContainer">
             <div className="title">Naslov</div>
             <div className="textInfo">Some random text...</div>
             <button className="button">Show now</button>

            </div>
          </div>

          </div> */}
        <span className="arrow right">
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
};

export default Slider;
