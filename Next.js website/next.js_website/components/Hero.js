import React from "react";

const Hero = () => {
  return (
    <div
      className="h-screen flex justify-center align-center items-center custom-bg
    bg-center bg-cover bg-no-repeat
    "
    >
      {/* Overlay */}
      <div className="bg-black/70 absolute top-0 left-0 right-0 bottom-0"/>
      <div className="text-white z-[2] ml-[-10rem] mt-[-10rem]">
        <h2 className="text-5xl">Heading</h2>
        <p className="text-2xl py-5">Message</p>
        <button className="border-[2px] py-2 px-8 border-gray-200 border-solid z-[2]">Book</button>
      </div>
    </div>
  );
};

export default Hero;
