// import React, { useEffect, useState } from "react";
import HeaderPage from "../../header/HeaderPage";
import aboutImage from "../../../assets/image/imageTwo.jpg";
import data from "../../../data.json";
import { Icon } from "@blueprintjs/core";
function About() {
  return (
    <div className="about-me-main-div">
      <div>
        <HeaderPage />
      </div>

      <div className="about-me-wrapper">
        <div className="about-text">
          <h1>Om mig</h1>
          <p>
            <p>{data.OmMigSE.omMig}</p>
          </p>
        </div>
        <div className="image-and-inf">
          <div className="about-image">
            <img src={aboutImage} className="about-me-image" alt="aboutImage" />
          </div>
          <div className="about-infp">
            <h2>.NET Utveckla & Fullstck Utvecklare</h2>
            <p>{data.OmMigSE.merOmMig}</p>
            <div className="all-info-about-me">
              <ul>
                <li>
                  <h4>
                    <i class="fa-solid  fa-signature comon-icons"></i>{" "}
                    <span>Fullständiga namn:</span>
                  </h4>
                  <p>Arvid Dawn Amin</p>
                </li>
                <li>
                  <h4>
                    <i class="fa-solid fa-earth-americas comon-icons"></i>{" "}
                    <span>Nationalitet:</span>
                  </h4>
                  <p>Svensk</p>
                </li>
                <li>
                  <h4>
                    <i class="fa-solid fa-calendar-days comon-icons"></i>
                    <span className="h4">Födelsedatum:</span>
                  </h4>
                  <p>1983/01/01</p>
                </li>
                <li>
                  <h4>
                    <i class="fa-solid fa-school comon-icons"></i>{" "}
                    <span>Utbildninger:</span>
                  </h4>
                  <p>Frontend Utvecklare (YH 400 poäng)</p>
                  <p>.NET Utveklare (YH 420 poäng)</p>
                  <p>Master i samhällsvetenskap</p>
                </li>
              </ul>
            </div>
            <div className="all-info-about-me">
              <ul>
                <li>
                  <h4>
                    <i class="fa-solid fa-mobile-screen comon-icons"></i>
                    <span> Mobilnummer</span>
                  </h4>
                  <p>+46727710850</p>
                </li>
                <li>
                  <h4>
                    <i class="fa-regular fa-envelope  comon-icons"></i>
                    <span> Mejladress:</span>
                  </h4>
                  <a href="mailto:bahalul_tuk@yahoo.com">Min E-post länk</a>
                </li>
                <li>
                  <h4>
                    <i class="fa-solid fa-earth-europe comon-icons"></i>
                    <span> Hemsida:</span>
                  </h4>
                  <a href="https://www.arvid-dawn.se">Min hemsida länk</a>
                </li>
                <li>
                  <h4>
                    <i class="fa-brands fa-linkedin comon-icons"></i>
                    <span> LinkdIn:</span>
                  </h4>
                  <a href="https://www.linkedin.com/in/arvid-dawn-55a32055/">
                    LinkdIn sida länk
                  </a>
                </li>
                <li>
                  <h4>
                    <i class="fa-brands fa-youtube"></i>
                    <span> YouTube:</span>
                  </h4>
                  <a href="https://www.youtube.com/channel/UC8L4RtSxur5rV6kGpRuNf5Q">
                    Min YouTube Kanal länk
                  </a>
                </li>
                <li>
                  <h4>
                    <i class="fa-brands fa-github"></i>
                    <span>GitHub:</span>
                  </h4>
                  <a href="https://github.com/Bahalul1981">GitHub länk</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
