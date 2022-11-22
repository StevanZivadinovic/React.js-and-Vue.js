import Image from 'next/image'
import React from 'react'
import {FaInstagram} from 'react-icons/fa';

export const InstagramImg = ({img}) => {
  return (
    <div className='relative group'>
      <div className="bg-black/60 absolute top-0 left-0 right-0 bottom-0 cursor-pointer items-center justify-center hidden group-hover:flex">
      <FaInstagram size={30} className='z-10'/>
      </div>
        <Image src={img} alt='imageInstagram' className='cursor-pointer'/>
        
    </div>
  )
}
