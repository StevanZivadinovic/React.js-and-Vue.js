import React from 'react';
import {Link} from 'react-router-dom';
import './../style/login.scss';

const Login = () => {
  return (
    <div className="mainLogin">
    <div className="wrapper">
      <h1>Sign in</h1>
      <form>
       
        <input placeholder="username" type="text" />
        <input placeholder="password" type="text" />
        <button>Login</button>
        <Link to=''>Create new account</Link>
      </form>
    </div>
  </div>
  )
}

export default Login