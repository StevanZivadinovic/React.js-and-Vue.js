import Image from 'next/image'
import React from 'react'

export const InstagramImg = ({img}) => {
  return (
    <div className='relative group'>
      <div className="bg-black/60 absolute top-0 left-0 right-0 bottom-0 cursor-pointer hidden group-hover:block"></div>
        <Image src={img} alt='imageInstagram' className='cursor-pointer'/>
    </div>
  )
}
