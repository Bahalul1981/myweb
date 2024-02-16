import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@blueprintjs/core";
import logoImg from "../../assets/image/gentle.jpg";
import CopyRight from "../main/Library/CopyRight";
function HeaderPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header-wrapper">
      <header>
        <div className="content-header">
          <div className="header-image-and-tex">
            <div className="logo-image">
              <img src={logoImg} alt="logo" className="my-logo-image" />
            </div>

            <div className="logoText">
              <h1>Arvid dawn</h1>
            </div>
            <div className="mediaIcons">
              <a href="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className={`header-nav ${menuOpen ? "open" : ""}`}>
            <nav>
              <ul>
                <li>
                  <Link to="/" onClick={closeMenu}>
                    <Icon icon="home" /> Hem
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMenu}>
                    {" "}
                    <Icon icon="person" /> Om mig
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeMenu}>
                    {" "}
                    <Icon icon="mobile-phone" /> Kontakt
                  </Link>
                </li>
                <li>
                  <Link to="/project" onClick={closeMenu}>
                    {" "}
                    <Icon icon="projects" /> Projekt
                  </Link>
                </li>
                <li>
                  <Link to="/resum" onClick={closeMenu}>
                    <i class="fa-sharp fa-solid fa-file"></i> CV
                  </Link>
                </li>
                <li>
                  <Link to="/skills" onClick={closeMenu}>
                    {" "}
                    <Icon icon="desktop" /> Kompetens
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="Copyright">
              <CopyRight />
            </div>
          </div>

          <div className="Header-burger-cross-menue" onClick={toggleMenu}>
            <i class="fa-solid fa-bars"></i>
            {/* <Icon icon="cross" className="cross-menue" /> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderPage;
