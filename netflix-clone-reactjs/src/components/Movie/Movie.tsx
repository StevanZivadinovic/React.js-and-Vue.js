import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa';
// @ts-ignore
import {db} from './../../config/Firebase.ts';
import {arrayUnion, doc, updateDoc} from 'firebase/firestore';
//@ts-ignore
import {User} from './../AuthContext/AuthContext.tsx'
const Movie = ({item}) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = User();

    const movieID = doc(db, 'users',`${user?.email}`);

    

    const saveShow = async ()=>{
      if(user?.email){
        setLike(!like);
        setSaved(true);
        await updateDoc(movieID, {
          savedShows:arrayUnion({
              id:item.id,
              title:item.title,
              img:item.backdrop_path
          })
        })
      }else{
        alert('Please log in to save movie!')
      }
      console.log(saved)
    }
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title}></img>
    <div className='flex flex-col justify-center absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80 text-white'>
      <p className='text-3xl font-bold text-center'>{item.title}</p>
      <p onClick={saveShow} className='absolute top-4 left-4 text-gray-300'>
        {like ? <FaHeart size='2rem'/> :<FaRegHeart size='2rem'/>}
      </p>
    </div>
  </div>
  )
}

export default Movie