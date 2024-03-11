import React, { useState, useEffect } from "react";
import "./../style/footer.scss";

export default function Footer() {
  const [button, setButton] = useState(true);


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
          <div className="contact">
            <p>gagaikone@live.com</p>
            <p>061/321-60-87</p>
            <a className ='linkDoFb'target='_blank' href='https://www.facebook.com/Pravoslavne-ikone-Nis-1691948927791453'><i className="fab fa-facebook"></i></a>
            <a className ='linkDoFb'target='_blank' href='https://www.instagram.com/pravoslavne_ikone_nis1/?igsh=YzZ0dTE3cnFqcDFm'><i className="fab fa-instagram"></i></a>

          </div>
        </div>
      </nav>
    </>
  );
}
