import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderPage from "../../header/HeaderPage";
import skillsImage from "../../../assets/image/aminThree.jpeg";
import FooterPage from "../../footer/FooterPage";

function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="skils-main-div">
      <div className="header-page">
        <HeaderPage />
      </div>
      <div className="skils-sub-div">
        <div className="skill-text ">
          <h4>Erfarenhetsöversikt:</h4>
          <p>
            {" "}
            Jag tar med mig sex månaders praktisk erfarenhet som Frontend
            Developer på Emblasoft AB i Stockholm. Under denna tid var jag
            aktivt involverad i att skapa frontend-applikationer med JavaScript,
            React, Redux och REST API, samtidigt som jag använde verktyg som
            Jira och GIT för smidig projektledning och versionshantering.
          </p>

          <h4>Akademisk bakgrund:</h4>

          <p>
            {" "}
            Utöver praktisk erfarenhet besitter jag en 2-årig
            yrkeshögskoleexamen i "Frontend Development" från Nackademin AB i
            Solna, Stockholm. Under min akademiska resa genomförde jag flera
            individuella och gruppprojekt, vilket skarptade min kompetens inom
            en rad teknologier inklusive HTML, CSS, JavaScript, React, Redux,
            Redux Toolkit, Node.js, samt designverktyg som Figma och XD.
          </p>

          <h4>Aktuell utbildning:</h4>

          <p>
            {" "}
            För närvarande fördjupar jag mina kunskaper genom att studera en
            .NET-utvecklarprogram på KHY yrkeshögskoleexamen i Stockholm. Sedan
            starten den 18 augusti 2023 har jag framgångsrikt slutfört flera
            betydande applikationer där jag använt mig av teknologier som C#,
            Ms-SQL, ASP.NET Core MVC & Razor Pages, HTML, CSS, SCSS, JavaScript,
            och React.
          </p>
          <h5>
            I bildspelet nedan försökte jag klargöra nivån på mina färdigheter
          </h5>
        </div>
        <Slider {...settings} className="slider-div">
          <div className="skillOne gradient-box-blue">
            <div className="skill">
              <h4>C#</h4>
              <div className="bar-wrapper">
                <div className="bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>MS SQL</h4>
              <div className="bar-wrapper">
                {" "}
                <div className="bar" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>ASP.NET Core MVC & Razor Pages</h4>
              <div className="bar-wrapper">
                <div className="bar" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>JavaScript</h4>
              <div className="bar-wrapper">
                <div className="bar" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
          <div className="skillTwo gradient-box-blue">
            <div className="skill">
              <h4>Bootstrap</h4>
              <div className="bar-wrapper">
                {" "}
                <div className="bar" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>XD, Figma</h4>
              <div className="bar-wrapper">
                {" "}
                <div className="bar" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>JIRA</h4>
              <div className="bar-wrapper">
                <div className="bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>GIT och GitHub</h4>
              <div className="bar-wrapper">
                {" "}
                <div className="bar" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
          <div className="skillThree gradient-box-blue">
            <div className="skill">
              <h4>Bootstrap</h4>
              <div className="bar-wrapper">
                {" "}
                <div className="bar" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>XD, Figma</h4>
              <div className="bar-wrapper">
                <div className="bar" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>JIRA</h4>
              <div className="bar-wrapper">
                <div className="bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>GIT och GitHub</h4>
              <div className="bar-wrapper">
                {" "}
                <div className="bar" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
          <div className="skillFoure gradient-box-blue">
            <div className="skill">
              <h4>IT SUPPORT TEKNIKARE (Google certification)</h4>
              <div className="bar-wrapper">
                {" "}
                <div className="bar" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <h4>Fotografi, Videoredigering, bildredigering</h4>
              <div className="bar-wrapper">
                {" "}
                <div className="bar" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </Slider>

        <div className="project-image-container gradient-box ">
          <img
            src={skillsImage}
            alt="image"
            className="project-image slide-in-left "
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <FooterPage />
      </div>
    </div>
  );
}

export default Skills;
