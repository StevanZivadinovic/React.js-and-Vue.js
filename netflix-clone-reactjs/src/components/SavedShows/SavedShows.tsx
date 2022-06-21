import React, {useState, useEffect} from 'react';
//@ts-ignore
import {db} from './../../config/Firebase.ts';
import {updateDoc, doc, onSnapshot} from 'firebase/firestore';
//@ts-ignore
import {User} from './../AuthContext/AuthContext.tsx'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { IMovie } from '../../interfaces/movie';
//@ts-ignore
import Movie from './../../components/Movie/Movie.tsx'

const SavedShows = () => {
    const [movies, setMovies]=useState([]);

    const moveLeft = () => {
        let slider = document.querySelector("#slider");
        slider!.scrollLeft = slider!.scrollLeft - 500;
      };
      const moveRight = () => {
        let slider = document.querySelector("#slider");
        slider!.scrollLeft = slider!.scrollLeft + 500;
      };
  return (
    <>
     <div className="relative flex flex-col items-center group">
        <MdChevronLeft
          onClick={moveLeft}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 hidden  absolute left-0 top-[50%] z-[100] cursor-pointer group-hover:block"
        />
        <h2 className="text-white text-3xl font-bold md:text-4xl p-4 text-left w-full">
        My Show 
        </h2>
        <div
          id={"slider"}
          className="w-full scroll-smooth whitespace-nowrap overflow-x-scroll relative scrollbar-hide"
        >
          {movies.map((item: IMovie, i) => {
            return <Movie item={item} key={i}></Movie>;
          })}
        </div>
        <MdChevronRight
          onClick={moveRight}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 hidden absolute right-0 top-[50%] z-[100] cursor-pointer group-hover:block"
        />
      </div>
    </>
  )
}

export default SavedShows