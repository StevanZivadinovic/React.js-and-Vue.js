import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
const Movie = ({item}) => {
    const [like, setLike] = useState(false);
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title}></img>
    <div className='flex flex-col justify-center absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80 text-white'>
      <p className='text-3xl font-bold text-center'>{item.title}</p>
      <p className='absolute top-4 left-4 text-gray-300'>
        {like ? <FaHeart size='2rem'/> :<FaRegHeart size='2rem'/>}
      </p>
    </div>
  </div>
  )
}

export default Movie