import React from "react";
import HeaderPage from "../header/HeaderPage";
import useCurrentDateTime from "./CurrentDateTime";
import HomeImage from "../../assets/image/homepageImg.jpg";
function Home() {
  const { currentDateTime, formatDateTime } = useCurrentDateTime();

  return (
    <div className="homepage-main-div">
      <div className="homepage-header-nav">
        <HeaderPage />
      </div>
      <div className="home-image-text">
        <div className="homepage-text">
          <h1>Arvid Dawn Amin</h1>
          <h3>Jag är .NET Utvecklare</h3>
          <h3>Jag är Front-End Utvecklare</h3>
          <h3>Jag är Fullstack Utvecklare</h3>
          <h3>Jag är IT supporttekniker</h3>
          <h3>Jag är UX designer</h3>
        </div>
        <div className="home-imge">
          <img
            src={HomeImage}
            alt="myImage"
            style={{ maxWidth: "100%", width: "auto" }}
          />
        </div>
        <div className="current-time-and-date">
          <h3>{formatDateTime(currentDateTime)}</h3>
        </div>

        {/* <Button text="Download" icon="download" /> // Blueprint
        <Icon icon="ban-circle" intent="success" />
        <i className="fas fa-globe "></i> // Font awesome */}
      </div>
    </div>
  );
}

export default Home;
