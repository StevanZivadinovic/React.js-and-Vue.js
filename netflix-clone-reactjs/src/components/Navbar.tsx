import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4  w-full z-[100]'>
    <h1 className='text-red-600 text-6xl font-bold cursor-pointer'>NETFLIX</h1>
    <div>
        <button className='text-white pr-5 text-3xl cursor-pointer'>Sign in</button>
        <button className='bg-red-600 py-3 px-6 rounded text-white cursor-pointer text-3xl'>Sign up</button>
    </div>
    </div>
  )
}

export default Navbar