import React from "react";
import HeaderPage from "../../header/HeaderPage";
import data from "../../../data.json";
import projectImage from "../../../assets/image/aminTwo.jpeg";
function Projrct() {
  return (
    <div className="project-main-div">
      <div>
        <HeaderPage />
      </div>
      <div className="project-sub-div">
        <div className="project-image-container gradient-box ">
          <img
            src={projectImage}
            alt="image"
            className="project-image slide-in-left "
          />
        </div>

        <h1>Projekt</h1>
        <p className="myProject-text">{data.ProjektSE}</p>
        <div className="project-list slide-in-right  ">
          <h3>
            <i class="fa-solid fa-up-right-from-square"></i>
            <a
              href="https://github.com/Bahalul1981/My-web-site.git"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        <div className="project-list slide-in-left">
          <h3>
            <i class="fa-solid fa-up-right-from-square"></i>
            <a
              href="https://github.com/Bahalul1981/myweb.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Personlig hemsida
            </a>
          </h3>
          <p>
            Detta är min personliga webbplats. För att bygga denna applikation
            har jag använt mig av HTML, SCSS, React och JavaScript.
          </p>
        </div>
        <div className="project-list slide-in-right ">
          <h3>
            <i class="fa-solid fa-up-right-from-square"></i>
            <a
              href="https://github.com/Bahalul1981/silicon.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Silicon
            </a>
          </h3>

          <p>
            Detta är ett demo av en professionell företagswebbplats. För att
            skapa denna applikation har jag använt mig av HTML, SCSS, JavaScript
            och React.
          </p>
        </div>
        <div className="project-list slide-in-left">
          <h3>
            <i class="fa-solid fa-up-right-from-square"></i>
            <a
              href="https://github.com/Bahalul1981/ArvidHotel.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hotell App
            </a>
          </h3>

          <p>
            Detta är en komplett hotellapplikation avsedd för administrativt
            bruk. Det är en CRUD-konsolapplikation och har skapats med C# och
            Ms-SQL.
          </p>
        </div>
        <div className="project-list slide-in-right ">
          <h3>
            <i class="fa-solid fa-up-right-from-square"></i>
            <a
              href="https://github.com/Bahalul1981/Kassasystemet.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kassasystemet
            </a>
          </h3>

          <p>
            Kassasystemet är en applikation för kassahantering som använder C#
            och MS SQL. Denna applikation är för administrering av ett snabbköp
            där användaren kan lägga till, skapa, redigera och ta bort produkter
            med pris. Användaren kan också lägga till erbjudanden för en viss
            tidsperiod. Vid köp kommer applikationen att ge en kvittoutskrift
            till kunden, som visar vilka varor de har köpt, hur mycket moms som
            tillkommer, och det slutliga beloppet som de ska betala.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projrct;
