import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Button from "./button";
import "./../style/footer.scss";
// import krst from "./../assets/1.png";
import fb from './../assets/facebook.svg';

export default function Footer(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="footer">
        <div className="footer-container">
            {/* <div> <Link to="/" className="navbar-logo1" onClick={closeMobileMenu}>
            Православне иконе - Ниш
           
          </Link></div> */}
         
          <div className="contact">
            <p>gagaikone@live.com</p>
            <p>061/321-60-87</p>
            <a id ='linkDoFb'target='_blank' href='https://www.facebook.com/Pravoslavne-ikone-Nis-1691948927791453'><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </nav>
    </>
  );
}
