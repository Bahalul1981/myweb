import React from "react";
import HeaderPage from "../../header/HeaderPage";
import useCurrentDateTime from "./CurrentDateTime";
import HomeImage from "../../../assets/image/homepageImg.jpg";
import video from "../../../assets/image/dawn.mp4";
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
          <video
            src={video}
            autoPlay
            loop
            muted
            style={{ maxWidth: "100%", width: "auto" }}
          ></video>
        </div>
        <div className="current-time-and-date">
          <h3>{formatDateTime(currentDateTime)}</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
