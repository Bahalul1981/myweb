import React, { useState, useEffect } from "react";
import HeaderPage from "../../header/HeaderPage";
import useCurrentDateTime from "./CurrentDateTime";
import video from "../../../assets/image/dawnamin.mp4";
function Home() {
  const { currentDateTime, formatDateTime } = useCurrentDateTime();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const headlines = [
    "Jag är .NET Utvecklar",
    "Jag är Frontend Utvecklar",
    "Jag är Fullstack Utvecklar",
    "Jag är UX Designer",
    "Jag är IT Support Teknikare",
  ];
  return (
    <div className="homepage-main-div">
      <div className="homepage-header-nav">
        <HeaderPage />
      </div>

      <div className="home-wrapper">
        <div className="current-time-and-date">
          <h3>{formatDateTime(currentDateTime)}</h3>
        </div>
        <div className="home-video">
          <video src={video} autoPlay loop muted></video>
        </div>
        <div className="text-in-home-page">
          <h3>{headlines[currentIndex]}</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
