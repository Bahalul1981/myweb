import React from "react";
import HeaderPage from "../../header/HeaderPage";
import useCurrentDateTime from "./CurrentDateTime";
import video from "../../../assets/image/dawnamin.mp4";
function Home() {
  const { currentDateTime, formatDateTime } = useCurrentDateTime();

  return (
    <div className="homepage-main-div">
      <div className="homepage-header-nav">
        <HeaderPage />
      </div>

      <div className="home-image-text">
        <div className="current-time-and-date">
          <h3>{formatDateTime(currentDateTime)}</h3>
        </div>
        <div className="home-video">
          <video src={video} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}

export default Home;
