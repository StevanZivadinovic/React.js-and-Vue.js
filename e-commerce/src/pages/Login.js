import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { User } from '../components/AuthContext/AuthContext';
import './../style/login.scss';
import {
  useNavigate
} from "react-router-dom";  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {logIn}=User()

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      // setErr("");
      navigate("/");
      console.log('login')
    } catch (err) {
      // setErr(err.message);
      console.log(err);
    }
  };
  return (
    <div className="mainLogin">
    <div className="wrapper">
      <h1>Sign in</h1>
      <form>
       
        <input placeholder="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder="password" type="text" />
        <button onClick={(e)=>{handleSignIn(e)}}>Login</button>
        <Link to=''>Create new account</Link>
      </form>
    </div>
  </div>
  )
}

export default Login