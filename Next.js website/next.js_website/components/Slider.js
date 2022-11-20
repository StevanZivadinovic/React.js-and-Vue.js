import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./Slider.data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(SliderData.length - 1 === current ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
  };
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((img, i) => {
          return (
            <div
              className={
                i === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
              key={i}
            >
              <FaArrowCircleLeft
                onClick={previousSlide}
                size={50}
                className="absolute top-[50%] left-[30px] cursor-pointer text-white/70 select-none z-[2] "
              />
              {i === current && (
                <Image
                  src={img.image}
                  width="1440"
                  height="600"
                  alt="image"
                  style={{ objectFit: "cover" }}
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={50}
                className="absolute top-[50%] right-[30px] cursor-pointer text-white/70 select-none z-[2]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
