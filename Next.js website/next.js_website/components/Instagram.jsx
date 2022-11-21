import Image from 'next/image'
import React from 'react'
import Img1 from './../public/ig-img-1.jpeg'
const Instagram = () => {
  return (
    <div>
        <div className="">
            <h2>Follow me on instagram</h2>
            <p>@Captur</p>
            <div className="photos">
            <Image src={Img1}></Image>
            </div>
        </div>
    </div>
  )
}

export default Instagram