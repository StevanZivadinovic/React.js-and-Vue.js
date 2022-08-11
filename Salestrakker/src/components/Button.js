import React, { useState } from 'react'

const Button = ({textOfButton, width, handle, clickedState}) => {
  const [clicked, setClicked] = useState(false)
  //${clicked  ? 'bg-purple-800' :'bg-purple-400'}
  return (
    <button onClick={(e)=>{handle(e); setClicked(!clicked)}} className={`${width} text-center
    hover:cursor-pointer hover:bg-red-300 hover:text-purple-800 text-2xl  
     text-blue-100 border-2 border-gray-300 rounded outline-none p-[6px] mb-4
    `}>{textOfButton}</button>
  )
}

export default Button