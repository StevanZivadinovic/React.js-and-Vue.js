import React, { useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const contextData = React.useContext(UserContext);


  const signin = ()=>{
    contextData.getRequest(username, password);
  }

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
          className="uppercase rounded my-[1rem] w-[10%] bg-[#487AF7] text-[#F0F0F0]"
          onClick={signin}
        >
          Sign in
        </button>
      </div>
      {contextData.invalidMessage.length > 0 && <p className="text-red-500 uppercase">{contextData.invalidMessage}</p>}
      
    </div>
  );
};

export default Login;
