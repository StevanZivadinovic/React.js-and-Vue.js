import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext';
const Button = ({textOfButton, width, handle, clicked}) => {
  const {styleMode } = useContext(UserContext);
  
  return (
    <button onClick={(e)=>{handle(e)}} className={`${width} text-center ${clicked  ? (styleMode?'bg-gray-300':'bg-dark-mode-mainBg') :(styleMode?'bg-transparent':'bg-transpatent')}
    hover:cursor-pointer ${styleMode? 'hover:bg-gray-300' :'hover:bg-dark-mode-mainBg'} hover:text-yellow-500 sm:text-2xl text-xl  
     ${clicked  ? (styleMode?'text-yellow-500':'text-yellow-500') : (styleMode?'text-gray-100':'text-dark-mode-mainBg')} border-2 border-gray-300 rounded outline-none p-[6px] mb-4
    `}>{textOfButton}</button>
  )
}

export default Button