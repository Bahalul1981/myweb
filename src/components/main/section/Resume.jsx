import React from "react";
import HeaderPage from "../../header/HeaderPage";
import cvOne from "../../../assets/cv&coverLetter/CV2024-1.jpg";
import cvTwo from "../../../assets/cv&coverLetter/CV2024-2.jpg";
import coverLetter from "../../../assets/cv&coverLetter/Personligbrev.jpg";
import FooterPage from "../../footer/FooterPage";

function Resume() {
  const handleDownloadCV = (cv) => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CV.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCoverLetter = (coverLetter) => {
    const link = document.createElement("a");
    link.href = coverLetter;
    link.download = "CoverLetter.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cv-cover-letter-main-div">
      <div>
        <HeaderPage />
      </div>

      <div className="cv-cover-letter">
        <div className="cv-section">
          <div className="cvOne slide-in-left">
            <img src={cvOne} alt="cvOne" />
          </div>
          <div className="cvTwo slide-in-left">
            <img src={cvTwo} alt="cvTwo " />
            <button
              className="custom-button download-cv"
              onClick={() => handleDownloadCV(cvOne)}
            >
              <span>
                <i className="fa-solid fa-download"></i>
              </span>
              Download
            </button>
          </div>
        </div>
        <div className="cover-letter slide-in-right">
          <img src={coverLetter} alt="coverLatter-img slide-in-right" />
          <button
            className="custom-button download-coverLatter-btn"
            onClick={() => handleDownloadCoverLetter(coverLetter)}
          >
            <span>
              <i className="fa-solid fa-download"></i>
            </span>
            Download
          </button>
        </div>
        <FooterPage />
      </div>
    </div>
  );
}

export default Resume;
