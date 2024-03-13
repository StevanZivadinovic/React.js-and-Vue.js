import './../style/footer.scss';

export default function Footer() {
  return (
    <>
      <nav className="footer">
        <div className="footer-container">
          <div className="contact">
            <p>gagaikone@live.com</p>
            <p>061/321-60-87</p>
            <a
              className="linkDoFb"
              target="_blank"
              href="https://www.facebook.com/Pravoslavne-ikone-Nis-1691948927791453"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="linkDoFb"
              target="_blank"
              href="https://www.instagram.com/pravoslavne_ikone_nis1/?igsh=YzZ0dTE3cnFqcDFm"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
