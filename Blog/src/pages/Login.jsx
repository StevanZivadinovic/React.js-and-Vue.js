import React, { useState } from "react";
import {validUsername, validPassword} from './../helperFunctions/regex'

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const validate = () => {
    if (!validUsername.test(username)) {
      setUsernameErr(true);
    } else {
      setUsernameErr(false);
    }

    if (!validPassword.test(password)) {
      setPwdError(true);
    } else {
      setPwdError(false);
    }
  };

  return (
    <div className="bg-[#F0F0F0] h-[100vh] flex justify-center flex-col content-center text-center">
      <div className="inputFields flex flex-col w-[40%] mx-auto">
        <input
          className="p-[.5rem] rounded mb-[1rem]"
          type="text"
          name="username"
          id="usernameInput"
          placeholder="Username"
          aria-label="username input"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="p-[.5rem] rounded mb-[1rem]"
          type="text"
          name="password"
          id="passwordInput"
          placeholder="Password"
          aria-label="password input"
          autoComplete="current-password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="buttonDiv">
        <button
          className="uppercase rounded w-[10%] bg-[#487AF7] text-[#F0F0F0]"
          onClick={validate}
        >
          Sign in
        </button>
      </div>
      {usernameErr && <p className="text-red-500">Your username is invalid</p>}
      {pwdError && <p className="text-red-500">Your password is invalid</p>}
    </div>
  );
};

export default Login;
