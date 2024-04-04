import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="unregistered_user_btn">
        <button className='registerBtn'>Register</button>
        <button className='loginBtn'>Login</button>
        </div>
        <div className="registered_user_btn">
        <button className='logoutBtn'>Logout</button>
        </div>

    </div>
  )
}

export default Navbar