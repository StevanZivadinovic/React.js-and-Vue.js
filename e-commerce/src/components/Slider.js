import React from "react";
import "./../style/slider.scss";
import fashion1 from "./../img/fashion1.png";
import fashion2 from "./../img/fashion2.png";
import fashion3 from "./../img/fashion3.png";
import { useState } from "react";

const Slider = () => {
  const [a, setA] = useState(0);
  const handleLeft = () => {
    if (a > 0) {
      setA(a - 1);
    } else {
      setA(2);
    }
    document.querySelector(".wrapper").style.transform = `translateX(${
      a * -100
    }vw)`;
    console.log("levo");
  };

  const handleRight = () => {
    if (a < 2) {
    document.querySelector(".wrapper").style.transform = `translateX(${ 1 * -100}vw)`;

      setA(a + 1);
    } else {
      setA(0);
    }
    document.querySelector(".wrapper").style.transform = `translateX(${a * -100}vw)`;
    console.log(a, "desno");
  };

  return (
    <div className="mainSlider">
      <div className="arrows">
        <span
          className="arrow left"
          onClick={() => {
            handleLeft();
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </span>
        <div className="wrapper">
          <div className="slide">
            <div className="imageContainer">
              <img src={fashion1} />
            </div>
            <div className="infoContainer">
              <div className="title">summer sale</div>
              <div className="textInfo">Some random text...</div>
              <button className="button">Show now</button>
            </div>
          </div>

          <div className="slide third">
            <div className="imageContainer">
              <img src={fashion2} />
            </div>
            <div className="infoContainer">
              <div className="title">autumn sale</div>
              <div className="textInfo">Some random text...</div>
              <button className="button">Show now</button>
            </div>
          </div>

          <div className="slide second">
            <div className="imageContainer">
              <img src={fashion3} />
            </div>
            <div className="infoContainer">
              <div className="title">winter summer</div>
              <div className="textInfo">Some random text...</div>
              <button className="button">Show now</button>
            </div>
          </div>
        </div>
        <span
          className="arrow right"
          onClick={handleRight}
        >
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
};

export default Slider;
