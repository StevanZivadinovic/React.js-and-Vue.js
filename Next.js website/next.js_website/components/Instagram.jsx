import Image from 'next/image'
import React from 'react'
import Img1 from './../public/ig-img-1.jpeg'
import { InstagramImg } from './InstagramImg'
const Instagram = () => {
  return (
    <div>
        <div className="">
            <h2 className='text-3xl font-bold text-center my-1'>Follow me on instagram</h2>
            <p className='text-xl text-center'>@Captur</p>
            <div className="photos grid grid-cols-3 gap-2 mx-[2rem] my-8">
            <InstagramImg img={Img1} />
            <InstagramImg img={Img1} />
            <InstagramImg img={Img1} />
            <InstagramImg img={Img1} />
            <InstagramImg img={Img1} />
            <InstagramImg img={Img1} />
            </div>
        </div>
    </div>
  )
}

export default Instagram