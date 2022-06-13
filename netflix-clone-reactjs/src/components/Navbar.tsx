import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4  w-full z-[100]'>
    <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
    <div>
        <button className='text-white pr-4 text-xl cursor-pointer'>Sign in</button>
        <button className='bg-red-600 py-2 px-4 rounded text-white cursor-pointer text-xl'>Sign up</button>
    </div>
    </div>
  )
}

export default Navbar