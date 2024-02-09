import React from "react";
import { Link } from "react-router-dom";
function HeaderPage() {
  return (
    <div className="header-wrapper">
      <header>
        <div className="header-image-and-tex">
          <div className="logo"></div>
          <div className="logoText"></div>
          <div className="mediaIcons"></div>
        </div>
        <nav>
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
        <p> &copy; {new Date().getFullYear()}. All rights reserved to Arvid.</p>
      </header>
    </div>
  );
}

export default HeaderPage;
