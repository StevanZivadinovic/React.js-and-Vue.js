import React, {useState, useEffect} from 'react';
//@ts-ignore
import {db} from './../../config/Firebase.ts';
import {updateDoc, doc, onSnapshot} from 'firebase/firestore';
//@ts-ignore
import {User} from './../AuthContext/AuthContext.tsx'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { IMovie } from '../../interfaces/movie';
import {AiOutlineClose} from 'react-icons/ai'



const SavedShows = () => {
    const [movies, setMovies]=useState([]);
    const {user}=User();
    const movieRef = doc(db,'users', `${user?.email}`);
    const deleteShow = async(passedID)=>{
      try{
        const result = movies.filter((item:IMovie)=>item.id!==passedID);
        await updateDoc(movieRef,{
          savedShows:result
        })
      }catch(err){
        console.log(err);
      }
    }

    const moveLeft = () => {
        let slider = document.querySelector("#slider");
        slider!.scrollLeft = slider!.scrollLeft - 500;
      };
      const moveRight = () => {
        let slider = document.querySelector("#slider");
        slider!.scrollLeft = slider!.scrollLeft + 500;
      };

      useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`),doc=>{
            setMovies(doc.data()?.savedShows);
        })
      }, [user?.email])
      console.log(movies)
  return (
    <>
     <div className="relative flex flex-col items-center group">
        <MdChevronLeft
          onClick={moveLeft}
          size={40}
          className="bg-white text-red-600 rounded-full opacity-50 hover:opacity-100 hidden  absolute left-0 top-[50%] z-[100] cursor-pointer group-hover:block"
        />
        <h2 className="text-white text-3xl font-bold md:text-4xl p-4 text-left w-full">
        My Show 
        </h2>
        <div
          id={"slider"}
          className="w-full scroll-smooth whitespace-nowrap overflow-x-scroll relative scrollbar-hide"
        >
          {movies?.map((item: IMovie, i) => {
            return (
                <div key={i} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title}></img>
    <div className='flex flex-col justify-center absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80 text-white'>
      <p className='text-3xl font-bold text-center'>{item.title}</p>
      <p onClick={()=>{deleteShow(item.id)}} className='absolute top-6 right-6 text-gray-300'><AiOutlineClose size={20}/></p>
    </div>
  </div>
            )
          })}
        </div>
        <MdChevronRight
          onClick={moveRight}
          size={40}
          className="bg-white text-red-600 rounded-full opacity-50 hover:opacity-100 hidden absolute right-0 top-[50%] z-[100000] cursor-pointer group-hover:block"
        />
      </div>
    </>
  )
}

export default SavedShows