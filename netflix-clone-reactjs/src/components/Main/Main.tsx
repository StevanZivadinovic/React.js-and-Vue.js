import axios from 'axios';
import React, { useEffect, useState } from 'react'
// @ts-ignore
import requests from '../../helperFunctions/requests.ts';
const Main = () => {

    interface IData{
        results:[];
    }

    interface IMovies{
        data:IData,
        
    }
    interface IMovie{
        backdrop_path:string,
        title:string,
        release_date:string,
        overview:string
    }

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get<unknown,IMovies>(requests.requestHoror)
        .then(res=>{
            setMovies(res.data.results);
        })
    }, [])
    
    
    let movie:IMovie = movies[Math.floor(Math.random()*movies.length)];
   console.log(movie)
  return (
    <div className='w-full h-[550px] text-white z-[-10] top-0 absolute bg-center'>
        <div className='w-full h-full'>
            <div className='w-full h-full bg-gradient-to-r from-black absolute'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}  />
            <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div className='my-4'>
                <button className='bg-gray-300 text-black border border-gray-300 py-3 px-6 text-3xl rounded'>Play</button>
                <button className='text-white border border-gray-300 py-3 px-6 text-3xl rounded ml-4'>Watch later</button>

            </div>
            <p className='text-gray-400 text-2xl'>Realised: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-400 text-2xl'>{movie?.overview}</p>
            </div>
        </div>
    </div>
  )
}

export default Main;