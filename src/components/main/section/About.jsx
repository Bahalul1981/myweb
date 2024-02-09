import React from "react";
import HeaderPage from "../../header/HeaderPage";
import aboutImage from "../../../assets/image/imageTwo.jpg";
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
            Självgående frontend-utvecklare med stark passion och två års
            Yrkeshögskoleutbildning. Ervrad expertis under sex månader
            arbetslivserfarenhet. För närvarande fördjupar jag mig som
            .NET-utvecklare med visionen att bli en framstående
            fullstack-utvecklare med fokus på .NET. Söker en plats att engagera,
            utvecklas och skapa framstående lösningar.
          </p>
        </div>
        <div className="image-and-inf">
          <div className="about-image">
            <h2>Ihis is image div</h2>
            <img src={aboutImage} className="about-me-image" alt="aboutImage" />
          </div>
          <div className="about-infp"></div>
        </div>
      </div>
    </>
  );
}

export default About;
