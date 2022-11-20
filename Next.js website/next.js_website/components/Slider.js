import Image from 'next/image'
import React, { useState } from 'react'
import { SliderData } from './Slider.data'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
const Slider = () => {
    const [current, setCurrent]=useState(0);

    const nextSlide = ()=>{
        console.log('next');
    }

    const previousSlide = ()=>{
        console.log('previous');
    }
  return (

    <div>
        <h1>Gallery</h1>
        <div className="gallery">
            <div className="">
            <FaArrowCircleLeft 
            onClick={previousSlide}
            size={50}
            />
            {SliderData.map((img, i)=>{
              return <Image src={img.image} width='1440' height='600' key={i} style={{objectFit:'cover', marginTop:'1rem', opacity:`${current===i ? 1 :0}`}} alt='image'/>
            })}
            <FaArrowCircleRight 
            onClick={nextSlide}
            size={50}
            />
            </div>
        </div>
    </div>
  )
}

export default Slider