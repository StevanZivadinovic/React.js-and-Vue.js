import React, { useEffect, useRef, useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import {
  handleInputChange,
} from "../functions/markerFunctions.ts";
import { handleSubmitLogin } from "../functions/usersFunctions.ts";

const LoginForm = ({displayLoginForm, setDisplayLoginForm,setLoggedUser,setPopupOpen,setDisplayRegisterForm}) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
     const [errRegistered, setErrRegistered] = useState({display:false, msg:''})
     const [successRegistered, setSuccessRegistered] = useState(false)


  const loggedUser = useRef({
    username: "",
    password: "",
  });
  useEffect(() => {
    if(successRegistered){
      setTimeout(() => {
        setDisplayLoginForm(false)
        setSuccessRegistered(false)
      }, 1000);
    }
  }, [successRegistered])
  

  return (
  <>
  { displayLoginForm && <div className="registerFormContainer">
      <form
        action=""
        className="registerForm"
        onSubmit={(e) => {
            handleSubmitLogin(e, loggedUser,setErrRegistered, setSuccessRegistered,setLoggedUser, setPopupOpen);
        }}
      >
        <div className="cancelBtn" onClick={()=>{setDisplayLoginForm(false)}}>
          <CancelIcon/>
        </div>
        <div className="logo">
          <img src="/img/point_orange.png" alt="logo" />
          <span>Travel Map</span>
        </div>
        <div className="username">
          <input
            required
            ref={usernameRef}
            type="text"
            name="username"
            placeholder="Type your username.."
            onChange={(e) => {
              handleInputChange(e, usernameRef, loggedUser, "username");
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
              handleInputChange(e, passwordRef, loggedUser, "password");
            }}
          />
        </div>
        <button className="submitRegisterButton">Login</button>
        <p className="linkToSignin">Don't have account? <span onClick={()=>{setDisplayLoginForm(false);setDisplayRegisterForm(true)}}>Sign in</span> </p>
        {errRegistered?.display && <p className="errMsgRegister"><strong>{errRegistered?.msg}</strong></p>}
        {successRegistered && <p className="successMsgRegister"><strong>You are logged in now!</strong></p>}
      </form>
    </div>}
  </>
   
  );
};

export default LoginForm;
