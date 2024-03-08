function FooterPage() {
  return (
    <div className="footer-wrapper">
      <div className="link-logo">
        <div className="footer-icons">
          <div className="footer-icons-one">
            {" "}
            <a
              href="https://www.linkedin.com/in/arvid-dawn-55a32055/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-media-link">
                <i class="fa-brands fa-linkedin"></i>
              </p>
              <p>Linkdin</p>
            </a>
            <a
              href="https://github.com/Bahalul1981"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-media-link">
                <i class="fa-brands fa-github"></i>
              </p>

              <p>Github</p>
            </a>
            <a
              href="https://www.facebook.com/dewan.bahalul/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-media-link">
                <i class="fa-brands fa-facebook"></i>
              </p>

              <p>Facebook</p>
            </a>
          </div>
          <div className="footer-icons-two">
            <a
              href="https://www.youtube.com/channel/UC8L4RtSxur5rV6kGpRuNf5Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-media-link">
                <i class="fa-brands fa-youtube"></i>
              </p>

              <p>YouTube</p>
            </a>
            <a
              href="https://www.instagram.com/the_thinhobbies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-media-link">
                <i class="fa-brands fa-instagram"></i>
              </p>
              <p>Instagram</p>
            </a>
            <a
              href="https://www.instagram.com/the_thinhobbies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-media-link">
                <i class="fa-brands fa-discord"></i>
              </p>
              <p>Discord</p>
            </a>
          </div>
        </div>
        <div className="nav-icons">
          <div className="nav-icons-one">
            <a href="/">
              <p className="footer-media-link">
                <i class="fa-solid fa-house"></i>
              </p>
              <p>Hem</p>
            </a>
            <a href="/about">
              <p className="footer-media-link">
                <i class="fa-solid fa-user"></i>
              </p>
              <p>Om mig</p>
            </a>
            <a href="/contact">
              <p className="footer-media-link">
                <i class="fa-solid fa-address-book"></i>
              </p>
              <p>Kontakt</p>
            </a>
          </div>
          <div className="nav-icons-two">
            <a href="/project">
              <p className="footer-media-link">
                <i class="fa-solid fa-diagram-project"></i>
              </p>
              <p>Projekt</p>
            </a>
            <a href="/resum">
              <p className="footer-media-link">
                <i class="fa-solid fa-file"></i>
              </p>
              <p>Resume</p>
            </a>
            <a href="/skills">
              <p className="footer-media-link">
                <i class="fa-solid fa-microchip"></i>
              </p>
              <p>Kompetens</p>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()}. All rights reserved to Arvid.</p>
      </div>
    </div>
  );
}

export default FooterPage;
