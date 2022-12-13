import React from 'react'

const Login = () => {
  return (
    <div className='bg-[#F0F0F0] h-[100vh] flex justify-center flex-col content-center text-center'>
        <div className="inputFields flex flex-col w-[40%] mx-auto">
            <input className='p-[.5rem] rounded mb-[1rem]'  type="text" name="username" id="usernameInput" placeholder='Username' aria-label='username input' />
            <input  className='p-[.5rem] rounded mb-[1rem]' type="text" name="password" id="passwordInput" placeholder='Password' aria-label='password input' />
        </div>
        <div className="buttonDiv">
            <button className='uppercase rounded w-[10%] bg-[#487AF7] text-[#F0F0F0]'>Sign in</button>
        </div>
    </div>
  )
}

export default Login