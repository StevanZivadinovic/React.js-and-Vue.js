import React from 'react'

const Button = ({textOfButton, width}) => {
  return (
    <button className={`${width} text-center
    hover:cursor-pointer hover:bg-red-300 hover:text-purple-800 text-2xl bg-purple-400
     text-blue-100 border-2 border-gray-300 rounded outline-none p-[6px] mb-4
    `}>{textOfButton}</button>
  )
}

export default Button