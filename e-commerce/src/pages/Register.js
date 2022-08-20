import React from "react";
import './../style/register.scss'

const Register = () => {
  return (
    <div className="mainRegister">
      <div className="wrapper">
        <h1>Create an account</h1>
        <form>
          <input placeholder="name" type="text" />
          <input placeholder="last name" type="text" />
          <input placeholder="username" type="text" />
          <input placeholder="email" type="text" />
          <input placeholder="password" type="text" />
          <input placeholder="confirm password" type="text" />
          <div className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
