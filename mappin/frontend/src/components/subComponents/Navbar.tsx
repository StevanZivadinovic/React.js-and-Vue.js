import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { handleLogout } from "../../functions/usersFunctions.ts";

interface NavbarType{
  setDisplayRegisterForm:Dispatch<SetStateAction<boolean>>,
  setDisplayLoginForm:Dispatch<SetStateAction<boolean>>,
  setIsUserLoggedIn:Dispatch<SetStateAction<boolean>>
  isUserLoggedIn:boolean
  setPopupOpen:Dispatch<SetStateAction<boolean>>
  loggedUserUsername:string
  setLoggedUserUsername:Dispatch<SetStateAction<string>>
  setLoggedUserEmail:Dispatch<SetStateAction<string>>

}
const Navbar = ({ setDisplayRegisterForm, setDisplayLoginForm,setIsUserLoggedIn,isUserLoggedIn, setPopupOpen, loggedUserUsername,setLoggedUserUsername,setLoggedUserEmail }:NavbarType) => {
const [displayBtns, setDisplayBtns] = useState(false)

    useEffect(() => {
     if(isUserLoggedIn){
        setDisplayBtns(true)
     }else{
        setDisplayBtns(false)
     }
    }, [isUserLoggedIn])
    
  return (
    <div className="navbar">
      {isUserLoggedIn && <div className="username"><span>User: </span> {loggedUserUsername}</div>}
      {!displayBtns && <div className="unregistered_user_btn">
        <button onClick={()=>{setDisplayRegisterForm(true);setDisplayLoginForm(false)}} className="registerBtn">Register</button>
        <button onClick={()=>{setDisplayLoginForm(true);setDisplayRegisterForm(false);}} className="loginBtn">Login</button>
      </div>}
      {displayBtns && <div className="registered_user_btn">
        <button className="logoutBtn" onClick={()=>{handleLogout(setDisplayBtns,setIsUserLoggedIn, setPopupOpen,setLoggedUserUsername,setLoggedUserEmail)}}>Logout</button>
      </div>}
    </div>
  );
};

export default Navbar;
