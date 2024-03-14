import React from 'react'

export default function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className="bg-white p-3 rounded w-25">
            <form action="">
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter email' className='form-control rounded-0' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control rounded-0' />
                </div>
                <button className='btn btn-success w-100'>Log in</button>
                <p>You are agree to our terms and policies</p>
                <button className='btn btn-default border bg-light'>Create Account</button>
            </form>
        </div>
    </div>
  )
}
