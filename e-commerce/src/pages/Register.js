import React, { useState } from "react";
import { User } from "../components/AuthContext/AuthContext";
import './../style/register.scss';
import {
  useNavigate
} from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp}=User();
  const navigate = useNavigate();

  const handleSignUp  = async(e) =>{
    e.preventDefault()
    try{
        await signUp(email, password);
        navigate('/');
    }catch(err){
        console.log(err);
        navigate('/register');

    }
    
}


  return (
    <div className="mainRegister">
      <div className="wrapper">
        <h1>Create an account</h1>
        <form>
          <input placeholder="name" type="text" />
          <input placeholder="last name" type="text" />
          <input placeholder="username" type="text" />
          <input placeholder="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} />
          <input placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} />
          <input placeholder="confirm password" type="text" />
          <div className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button onClick={(e)=>{handleSignUp(e)}}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
