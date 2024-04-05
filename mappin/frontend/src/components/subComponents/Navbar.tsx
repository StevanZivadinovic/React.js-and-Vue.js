import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { handleLogout } from "../../functions/usersFunctions.ts";

interface NavbarType{
  setDisplayRegisterForm:Dispatch<SetStateAction<boolean>>,
  setDisplayLoginForm:Dispatch<SetStateAction<boolean>>,
  setLoggedUser:Dispatch<SetStateAction<string | null>>
  setPopupOpen:Dispatch<SetStateAction<boolean>>

}
const Navbar = ({ setDisplayRegisterForm, setDisplayLoginForm,setLoggedUser, setPopupOpen }:NavbarType) => {
const [displayBtns, setDisplayBtns] = useState(false)

    useEffect(() => {
     if(localStorage.getItem('loggedAndRegistredUser')){
        setDisplayBtns(true)
     }else{
        setDisplayBtns(false)
     }
    }, [localStorage.getItem('loggedAndRegistredUser')])
    
  return (
    <div className="navbar">
      {!displayBtns && <div className="unregistered_user_btn">
        <button onClick={()=>{setDisplayRegisterForm(true);setDisplayLoginForm(false)}} className="registerBtn">Register</button>
        <button onClick={()=>{setDisplayLoginForm(true);setDisplayRegisterForm(false);}} className="loginBtn">Login</button>
      </div>}
      {displayBtns && <div className="registered_user_btn">
        <button className="logoutBtn" onClick={()=>{handleLogout(setDisplayBtns,setLoggedUser, setPopupOpen)}}>Logout</button>
      </div>}
    </div>
  );
};

export default Navbar;
