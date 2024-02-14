import React from "react";
import HeaderPage from "../../header/HeaderPage";
import data from "../../../data.json";
function Projrct() {
  return (
    <div className="project-main-div">
      <div>
        <HeaderPage />
      </div>
      <div className="project-sub-div">
        <h1>Projekt</h1>
        <p>{data.ProjektSE}</p>
        <div className="project-list">
          <h3>
            <a href="https://github.com/Bahalul1981/My-web-site.git">
              Web Shop
            </a>
          </h3>
          <p>
            Detta är en webbshopapplikation där användaren kan välja produkter,
            lägga till dem i sin varukorg och sedan genomföra köpet. Efter köpet
            kommer användaren att få en bekräftelse via e-post. För denna
            applikation har jag använt mig av HTML, CSS, React, JavaScript,
            Redux Toolkit och en del Node.js.
          </p>
        </div>
        <div className="project-list">
          <h3>
            <a href="https://github.com/Bahalul1981/myweb.git">
              Personlig hemsida
            </a>
          </h3>
          <p>
            Detta är min personliga webbplats. För att bygga denna applikation
            har jag använt mig av HTML, SCSS, React och JavaScript.
          </p>
        </div>
        <div className="project-list">
          <h3>
            <a href="https://github.com/Bahalul1981/silicon.git">Silicon</a>
          </h3>
        </div>
        <p>
          Detta är ett demo av en professionell företagswebbplats. För att skapa
          denna applikation har jag använt mig av HTML, SCSS, JavaScript och
          React.
        </p>
        <div className="project-list">
          <h3>
            <a href="https://github.com/Bahalul1981/ArvidHotel.git">
              Hotell App
            </a>
          </h3>
        </div>
        <p>
          Detta är en komplett hotellapplikation avsedd för administrativt bruk.
          Det är en CRUD-konsolapplikation och har skapats med C# och Ms-SQL.
        </p>
        <div className="project-list">
          <h3>
            <a href="https://github.com/Bahalul1981/Kassasystemet.git">
              Kassasystemet
            </a>
          </h3>
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default Projrct;
