import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { handleLogout } from "../../functions/usersFunctions.ts";
import { Link } from "react-router-dom";

interface NavbarType{
  setDisplayRegisterForm:Dispatch<SetStateAction<boolean>>,
  setDisplayLoginForm:Dispatch<SetStateAction<boolean>>,
  setIsUserLoggedIn:Dispatch<SetStateAction<boolean>>
  isUserLoggedIn:boolean
  setPopupOpen:Dispatch<SetStateAction<boolean>>
  loggedUserUsername:string
  setLoggedUserUsername:Dispatch<SetStateAction<string>>
  setLoggedUserEmail:Dispatch<SetStateAction<string>>
  acceptedCookies:boolean

}
const Navbar = ({ setDisplayRegisterForm, setDisplayLoginForm,setIsUserLoggedIn,isUserLoggedIn, setPopupOpen, loggedUserUsername,setLoggedUserUsername,setLoggedUserEmail,acceptedCookies }:NavbarType) => {
const [displayBtns, setDisplayBtns] = useState(false)

    useEffect(() => {
     if(isUserLoggedIn){
        setDisplayBtns(true)
     }else{
        setDisplayBtns(false)
     }
    }, [isUserLoggedIn])
    const isLoggedStyle = loggedUserUsername ? 'userLogged':'userNotLogged';
    const isCookieAccepted =acceptedCookies  ?'userLoggedBtnStyle':'userNotLoggedBtnStyle'
  return (
    <div className={`navbar ${isLoggedStyle}`}>
      {isUserLoggedIn && <div className="username"><span>User: </span> {loggedUserUsername}</div>}
      {!displayBtns && <div className="unregistered_user_btn">
        <button disabled={!acceptedCookies} onClick={()=>{setDisplayRegisterForm(true);setDisplayLoginForm(false)}} className={`registerBtn ${isCookieAccepted}`}>Register</button>
        <button disabled={!acceptedCookies} onClick={()=>{setDisplayLoginForm(true);setDisplayRegisterForm(false);}} className={`loginBtn ${isCookieAccepted}`}>Login</button>
      </div>}
      {displayBtns && <div className="registered_user_btn">
        <Link className="tableLink" to='table_of_users'>Users</Link>
        <button className="logoutBtn" onClick={()=>{handleLogout(setDisplayBtns,setIsUserLoggedIn, setPopupOpen,setLoggedUserUsername,setLoggedUserEmail)}}>Logout</button>
      </div>}
    </div>
  );
};

export default Navbar;
