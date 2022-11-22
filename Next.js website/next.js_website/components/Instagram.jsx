import Image from 'next/image'
import React from 'react'
import Img1 from './../public/ig-img-1.jpeg'
import Img2 from './../public/ig-img-2.jpeg'
import Img3 from './../public/ig-img-3.jpeg'
import Img4 from './../public/ig-img-4.jpeg'
import Img5 from './../public/ig-img-5.jpeg'
import Img6 from './../public/ig-img-6.jpeg'

import { InstagramImg } from './InstagramImg'
const Instagram = () => {
  return (
    <div>
        <div className="">
            <h2 className='text-3xl font-bold text-center my-1'>Follow me on instagram</h2>
            <p className='text-xl text-center'>@Captur</p>
            <div className="photos grid grid-cols-3 gap-2 mx-[2rem] my-8 md:grid-cols-4 lg:grid-cols-6">
            <InstagramImg img={Img1} />
            <InstagramImg img={Img2} />
            <InstagramImg img={Img3} />
            <InstagramImg img={Img4} />
            <InstagramImg img={Img5} />
            <InstagramImg img={Img6} />
            </div>
        </div>
    </div>
  )
}

export default Instagram