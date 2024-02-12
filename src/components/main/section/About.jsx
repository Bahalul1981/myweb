// import React, { useEffect, useState } from "react";
import HeaderPage from "../../header/HeaderPage";
import aboutImage from "../../../assets/image/imageTwo.jpg";
import data from "../../../data.json";
import { Icon } from "@blueprintjs/core";
function About() {
  return (
    <>
      <div>
        <HeaderPage />
      </div>

      <div className="about-main-div">
        <div className="about-text">
          <h2>Om mig</h2>
          <p>
            <p>{data.OmMigSE.omMig}</p>
          </p>
        </div>
        <div className="image-and-inf">
          <div className="about-image">
            <h2>Ihis is image div</h2>
            <img src={aboutImage} className="about-me-image" alt="aboutImage" />
          </div>
          <div className="about-infp">
            <h2>.NET Utveckla & Fullstck Utvecklare</h2>
            <p>{data.OmMigSE.merOmMig}</p>
            <div className="all-info-about-me">
              <ul>
                <li>
                  <h4>
                    <Icon icon="user" /> Fullständiga namn:
                  </h4>
                  <p>Arvid Dawn Amin</p>
                </li>
                <li>
                  <h4>
                    <Icon icon="flag" /> Nationalitet:
                  </h4>
                  <p>Svensk</p>
                </li>
                <li>
                  <h4>
                    <Icon icon="stopwatch" /> Födelsedatum:
                  </h4>
                  <p>1983/01/01</p>
                </li>
                <li>
                  <h4>
                    {" "}
                    <Icon icon="learning" /> Utbildninger:
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
                    {" "}
                    <Icon icon="phone" /> Mobilnummer
                  </h4>
                  <p>+46727710850</p>
                </li>
                <li>
                  <h4>
                    {" "}
                    <Icon icon="envelope" /> Mejladress:
                  </h4>
                  <a href="mailto:bahalul_tuk@yahoo.com">Min E-post länk</a>
                </li>
                <li>
                  <h4>
                    {" "}
                    <Icon icon="globe-network" /> Hemsida:
                  </h4>
                  <a href="https://www.arvid-dawn.se">Min hemsida länk</a>
                </li>
                <li>
                  <h4>
                    {" "}
                    <Icon icon="social-media" /> LinkdIn:
                  </h4>
                  <a href="https://www.linkedin.com/in/arvid-dawn-55a32055/">
                    LinkdIn sida länk
                  </a>
                </li>
                <li>
                  <h4>
                    {" "}
                    <Icon icon="video" /> YouTube:
                  </h4>
                  <a href="https://www.youtube.com/channel/UC8L4RtSxur5rV6kGpRuNf5Q">
                    Min YouTube Kanal länk
                  </a>
                </li>
                <li>
                  <h4>
                    {" "}
                    <Icon icon="git-branch" /> GitHub:
                  </h4>
                  <a href="https://github.com/Bahalul1981">GitHub länk</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
