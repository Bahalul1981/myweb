import React from "react";
import HeaderPage from "../../header/HeaderPage";
import skillsImage from "../../../assets/image/aminThree.jpeg";
function Skills() {
  return (
    <div className="skils-main-div">
      <div>
        <HeaderPage />
      </div>

      <div className="skils-sub-div">
        <h2>
          Passionerad Programmerare med Erfarenhet inom Fullstack Utveckling
        </h2>
        <div className="skill">
          <h4>C#</h4>
          <div className="bar" style={{ width: "80%" }}></div>
        </div>
        <div className="skill">
          <h4>MS SQL</h4>
          <div className="bar" style={{ width: "85%" }}></div>
        </div>
        <div className="skill">
          <h4>ASP.NET Core MVC & Razor Pages</h4>
          <div className="bar" style={{ width: "70%" }}></div>
        </div>
        <div className="skill">
          <h4>JavaScript</h4>
          <div className="bar" style={{ width: "75%" }}></div>
        </div>
        <div className="skill">
          <h4>React</h4>
          <div className="bar" style={{ width: "80%" }}></div>
        </div>
        <div className="skill">
          <h4>Redux Toolkit</h4>
          <div className="bar" style={{ width: "90%" }}></div>
        </div>
        <div className="skill">
          <h4>HTML5</h4>
          <div className="bar" style={{ width: "95%" }}></div>
        </div>
        <div className="skill">
          <h4>CSS3 and SCSS</h4>
          <div className="bar" style={{ width: "98%" }}></div>
        </div>
        <div className="skill">
          <h4>Bootstrap</h4>
          <div className="bar" style={{ width: "70%" }}></div>
        </div>
        <div className="skill">
          <h4>XD, Figma</h4>
          <div className="bar" style={{ width: "75%" }}></div>
        </div>
        <div className="skill">
          <h4>JIRA</h4>
          <div className="bar" style={{ width: "90%" }}></div>
        </div>
        <div className="skill">
          <h4>GIT och GitHub</h4>
          <div className="bar" style={{ width: "95%" }}></div>
        </div>
        <div className="skill">
          <h4>IT SUPPORT TEKNIKARE (Google certification)</h4>
          <div className="bar" style={{ width: "70%" }}></div>
        </div>
        <div className="project-image-container gradient-box ">
          <img
            src={skillsImage}
            alt="image"
            className="project-image slide-in-left "
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
