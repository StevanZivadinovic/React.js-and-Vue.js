import React, { useRef, useState } from "react";
import {
  handleInputChange,
  handleSubmitRegister,
} from "../functions/markerFunctions.ts";

const RegisterForm = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
     const [errRegistered, setErrRegistered] = useState(false)
     const [successRegistered, setSuccessRegistered] = useState(false)

  const newUser = useRef({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="registerFormContainer">
      <form
        action=""
        className="registerForm"
        onSubmit={(e) => {
          handleSubmitRegister(e, newUser,setErrRegistered, setSuccessRegistered);
        }}
      >
        <div className="logo">
          <img src="/img/point_orange.png" alt="logo image" />
          <span>Travel Map</span>
        </div>
        <div className="username">
          <input
            required
            ref={usernameRef}
            type="text"
            name="username"
            placeholder="Type your name.."
            onChange={(e) => {
              handleInputChange(e, usernameRef, newUser, "username");
            }}
          />
        </div>
        <div className="email">
          <input
            required
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Type your email.."
            onChange={(e) => {
              handleInputChange(e, emailRef, newUser, "email");
            }}
          />
        </div>
        <div className="password">
          <input
            required
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Type your password.."
            onChange={(e) => {
              handleInputChange(e, passwordRef, newUser, "password");
            }}
          />
        </div>
        <button className="submitRegisterButton">Register</button>
        {errRegistered && <p className="errMsgRegister"><strong>Error, something unexpected heppen, please check email or username!</strong></p>}
        {successRegistered && <p className="successMsgRegister"><strong>You succesfully registered!</strong></p>}
      </form>
    </div>
  );
};

export default RegisterForm;
