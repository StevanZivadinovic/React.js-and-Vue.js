import axios from 'axios';
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import React, { FC, useEffect, useState } from 'react'

interface IRow{
    title:string,
    requestURL:string
}

interface IMovie{
  backdrop_path:string,
  title:string,
  release_date:string,
  overview:string
}

const Row:FC<IRow> = ({title, requestURL}) => {

  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(requestURL).then((res)=>{
      setMovies(res.data.results)
    })
  }, [requestURL]);

  console.log(movies, title);
  
  return (
    <>
    <div className='relative flex flex-col items-center'>
    <h2 className='text-white text-3xl font-bold md:text-4xl p-4 text-left w-full'>{title}</h2>
      <div id="slider" className='flex'>
        {movies.map((item:IMovie, i)=>{
          return <div key={i} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title}></img>
            <div className='flex flex-col justify-center absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80 text-white'>
              <p className='text-3xl font-bold text-center'>{item.title}</p>
              <p className='absolute top-4 left-4 text-gray-300'>
                {like ? <FaHeart size='2rem'/> :<FaRegHeart size='2rem'/>}
              </p>
            </div>
          </div>
        })}
      </div>
    </div>
    </>
  )
}

export default Row