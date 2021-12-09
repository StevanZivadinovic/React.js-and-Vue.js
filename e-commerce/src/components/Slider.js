import React from "react";
import './../style/slider.scss'
const Slider = () => {
  return (
    <div className="mainSlider">
      <div className="arrows">
        <span className="arrow">
          <i class="fas fa-arrow-left"></i>
        </span>
        <span className="arrow">
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
};

export default Slider;
