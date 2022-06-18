import React from 'react'

const SignupPage = () => {
  return (
    <div className='text-white w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/f4332b34-eeb2-4fd9-a803-925b165f009a/RS-en-20220613-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/"  />
        <div className='w-full h-full bg-black/60 fixed top-0 left-0'></div>
        <div className=' w-full h-[600px] px-4 py-28 z-[1150] fixed'>
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ">
                <div className="max-w-[320px] py-[52px] m-auto">
                    <h1 className='text-5xl font-bold'>Sign Up</h1>
                    <form className="w-full flex flex-col py-4">
                        <input type="email" className="p-5 my-4 bg-gray-700 rounded text-3xl" placeholder='Email'/>
                        <input type="password" className="p-5 my-4 bg-gray-700 rounded text-3xl" placeholder='Password' autoComplete='current-password' />
                    <button className='bg-red-600 text-3xl rounded my-5 py-5 font-bold'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
     </div>
  )
}

export default SignupPage