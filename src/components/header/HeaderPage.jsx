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
          <div className="logoText"></div>
          <div className="mediaIcons"></div>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/about">Om mig</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <Link to="/project">Projekt</Link>
            </li>
            <li>
              <Link to="/resum">CV</Link>
            </li>
            <li>
              <Link to="/skills">Kompetens</Link>
            </li>
          </ul>
        </nav>
        <p className="header-p">
          &copy; {new Date().getFullYear()}. All rights reserved to Arvid.
        </p>
        <div className="Header-burger-menue">
          <Icon icon="menu" />
        </div>
      </header>
    </div>
  );
}

export default HeaderPage;
