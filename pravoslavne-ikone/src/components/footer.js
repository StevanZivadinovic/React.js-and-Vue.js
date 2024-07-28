import './../style/footer.scss';

export default function Footer() {
  return (
    <>
      <nav className="footer" lang="sr">
        <div className="footer-container">
          <div className="contact">
            <p aria-label="Email">gagaikone@live.com</p>
            <p aria-label="Phone number">061/321-60-87</p>
            <a
              className="linkDoFb"
              target="_blank"
              href="https://www.facebook.com/Pravoslavne-ikone-Nis-1691948927791453"
              rel="noreferrer"
              title="Pratite nas na Facebooku"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="linkDoFb"
              target="_blank"
              href="https://www.instagram.com/pravoslavne_ikone_nis1/?igsh=YzZ0dTE3cnFqcDFm"
              rel="noreferrer"
              title="Pratite nas na Instagramu"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
