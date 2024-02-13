import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@blueprintjs/core";
import logoImg from "../../assets/image/gentle.jpg";
function HeaderPage() {
  return (
    <div className="header-wrapper">
      <header>
        <div className="header-image-and-tex">
          <div className="logo-image">
            <img src={logoImg} alt="logo" className="my-logo-image" />
          </div>

          <div className="Header-burger-cross-menue">
            <Icon icon="menu" className="burger" />
            <Icon icon="cross" className="cross-menue" />
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
        <div className="header-nav">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <Icon icon="home" /> Hem
                </Link>
              </li>
              <li>
                <Link to="/about">
                  {" "}
                  <Icon icon="person" /> Om mig
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  {" "}
                  <Icon icon="mobile-phone" /> Kontakt
                </Link>
              </li>
              <li>
                <Link to="/project">
                  {" "}
                  <Icon icon="projects" /> Projekt
                </Link>
              </li>
              <li>
                <Link to="/resum">
                  <i class="fa-sharp fa-solid fa-file"></i> CV
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  {" "}
                  <Icon icon="desktop" /> Kompetens
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="header-p">
          &copy; {new Date().getFullYear()}. All rights reserved to Arvid.
        </p>
      </header>
    </div>
  );
}

export default HeaderPage;
