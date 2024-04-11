import React, { useEffect, useRef, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { handleInputChange } from "../functions/markerFunctions.ts";
import { handleSubmitLogin } from "../functions/usersFunctions.ts";

const LoginForm = ({
  displayLoginForm,
  setDisplayLoginForm,
  setLoggedUserEmail,
  setPopupOpen,
  setDisplayRegisterForm,
  isUserLoggedIn,
  setIsUserLoggedIn,
  setLoggedUserUsername
  
}) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [errLogin, setErrLoggin] = useState({
    display: false,
    msg: { email: "", username: "", password: "", bigError: "" },
  });
  const loggedUser = useRef({
    username: "",
    password: "",
  });
  useEffect(() => {
    if (isUserLoggedIn) {
      setTimeout(() => {
        setDisplayLoginForm(false);
      }, 1000);
    }
  }, [isUserLoggedIn]);

  return (
    <>
      {displayLoginForm && (
        <div className="registerFormContainer">
          <form
            action=""
            className="registerForm"
            onSubmit={(e) => {
              handleSubmitLogin(
                e,
                loggedUser,
                setErrLoggin,
                setIsUserLoggedIn,
                setLoggedUserEmail,
                setPopupOpen,
                setLoggedUserUsername
              );
            }}
          >
            <div
              className="cancelBtn"
              onClick={() => {
                setDisplayLoginForm(false);
              }}
            >
              <CancelIcon />
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
              {errLogin?.display && (
                <p className="errMsgRegister">
                  <strong>{errLogin?.msg?.username}</strong>
                </p>
              )}
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
              {errLogin?.display && (
                <p className="errMsgRegister">
                  <strong>{errLogin?.msg?.password}</strong>
                </p>
              )}
            </div>
            <button className="submitRegisterButton">Login</button>
            <p className="linkToSignin">
              Don't have account?{" "}
              <span
                onClick={() => {
                  setDisplayLoginForm(false);
                  setDisplayRegisterForm(true);
                }}
              >
                Sign in
              </span>{" "}
            </p>
            {errLogin?.display && (
              <p className="errMsgRegister">
                <strong>{errLogin?.msg?.bigError}</strong>
              </p>
            )}
            {isUserLoggedIn && (
              <p className="successMsgRegister">
                <strong>You are logged in now!</strong>
              </p>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default LoginForm;
