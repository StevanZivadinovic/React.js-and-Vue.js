import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4  w-full z-[10000] absolute'>
    <Link to='/'><h1 className='text-red-600 text-6xl font-bold cursor-pointer'>NETFLIX</h1></Link>
    <div>
      
  <Link to='/login'><button className='text-white pr-5 text-3xl cursor-pointer' >Sign in</button></Link>      
  <Link  to='/signup'><button className='bg-red-600 py-3 px-6 rounded text-white cursor-pointer text-3xl'>Sign up</button></Link>
    </div>
    </div>
  )
}

export default Navbar