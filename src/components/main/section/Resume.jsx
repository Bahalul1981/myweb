import React from "react";
import HeaderPage from "../../header/HeaderPage";
import cvOne from "../../../assets/cv&coverLetter/CV2024-1.jpg";
import cvTwo from "../../../assets/cv&coverLetter/CV2024-2.jpg";
import coverLetter from "../../../assets/cv&coverLetter/Personligbrev.jpg";
function Resume() {
  return (
    <>
      <div>
        <HeaderPage />
      </div>

      <div className="cv-cover-letter">
        <div className="cv-section">
          <div className="cvOne">
            <img src={cvOne} alt="cvOne" />
          </div>
          <div className="cvTwo">
            <img src={cvTwo} alt="cvTwo" />
          </div>
        </div>
        <div className="cover-letter">
          <img src={coverLetter} alt="coverLatter" />
        </div>
      </div>
    </>
  );
}

export default Resume;
