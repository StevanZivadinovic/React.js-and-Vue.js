import React, { useState } from 'react'

const Button = ({textOfButton, width, handle, clicked}) => {
  
  return (
    <button onClick={(e)=>{handle(e)}} className={`${width} text-center ${clicked  ? 'bg-gray-300' :'transparent'}
    hover:cursor-pointer hover:bg-gray-300 hover:text-yellow-500 text-2xl  
     ${clicked  ? 'text-yellow-500' : 'text-gray-100'} border-2 border-gray-300 rounded outline-none p-[6px] mb-4
    `}>{textOfButton}</button>
  )
}

export default Button