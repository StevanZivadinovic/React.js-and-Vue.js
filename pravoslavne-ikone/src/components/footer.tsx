import ikonicaFb from './../assets/icons8-fb-48.png';
import ikonicaInsta from './../assets/icons8-instagram-48.png';
export default function Footer() {
  return (
    <>
      <nav
        className="bg-gradient-to-t from-customRed to-customGray h-[100px] flex justify-around items-center text-center
      text-[1.2rem] "
        lang="sr"
      >
        <div className="footer-container flex justify-between items-center h-[80px]">
          <div className="contact">
            <a
              href="mailto:gagaikone@live.com"
              className="no-underline text-white"
            >
              <p aria-label="Email">gagaikone@live.com</p>
            </a>
            <a href="tel:+381613216087" className="no-underline text-white">
              <p aria-label="Phone number">061/321-60-87</p>
            </a>
            <a
              className="inline-block mr-[10px] "
              target="_blank"
              href="https://www.facebook.com/Pravoslavne-ikone-Nis-1691948927791453"
              rel="noreferrer"
              title="Pratite nas na Facebooku"
            >
              <img
                src={ikonicaFb}
                className="w-[2rem] transform hover:scale-[1.3] transition-transform duration-300
              hover:cursor-pointer"
                alt="facebook icon link ikonica"
              />
            </a>
            <a
              className="inline-block mr-[10px]"
              target="_blank"
              href="https://www.instagram.com/pravoslavne_ikone_nis1/?igsh=YzZ0dTE3cnFqcDFm"
              rel="noreferrer"
              title="Pratite nas na Instagramu"
            >
              <img
                src={ikonicaInsta}
                className="w-[2rem] transform hover:scale-[1.3] transition-transform duration-300
              hover:cursor-pointer"
                alt="facebook icon link ikonica"
              />
            </a>
            <a
              className=""
              target="_blank"
              href="https://bit.ly/3SrMmqE"
              rel="noreferrer"
              title="Pratite nas na KupujemProdajem"
            >
              <img
                className=" hover:cursor-pointer m-0  text-[2rem] transform hover:scale-[1.3] transition-transform duration-300 "
                src="./kp.svg"
                width={50}
                height={30}
                alt="kupujem prodajem ikonica"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}