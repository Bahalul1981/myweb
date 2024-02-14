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
        <div className="text-in-home-page">
          <h3>Hej!</h3>
          <p></p>
          <p>
            Hej! Jag är en passionerad programmerare vars glädje ligger i att
            utveckla nya applikationer och lösa problem. Min resa inom IT
            började med en 2-årig Yrkeshögskoleexamen som Front-end Utvecklare
            från Nackademin AB, Stockholm. Efter avslutad utbildning påbörjade
            jag min karriär som WebGUI-utvecklare på Emblasoft AB, där jag
            tillbringade sex månader och vidareutvecklade mina färdigheter inom
            området. För närvarande fördjupar jag mig som .NET-utvecklare med
            visionen att bli en framstående fullstack-utvecklare med fokus på
            .NET. Med en gedigen utbildning från KYH Stockholm och erfarenhet
            från Emblasoft AB, känner jag mig redo att ta nästa steg i min
            karriär och bidra till innovativa projekt. Under min utbildning har
            jag förvärvar expertis inom objektorienterad programmering med C#,
            Ms SQL, HTML5, CSS3 och Javascript samt erfarenhet inom
            webbutveckling med .NET och agila arbetsmetoder. Min strävan efter
            kunskap och min förmåga att anpassa mig till nya teknologier gör mig
            till en flexibel och målinriktad utvecklare. Under min utbildning
            har jag aktivt arbetat med ett antal solo- och gruppprojekt, vilket
            inte bara har förstärkt mina tekniska kunskaper utan också lärt mig
            vikten av samarbete och problemlösning. Du kan gärna ta en titt på
            min GitHub-profil för att se några av dessa projekt: GitHub Jag
            söker en möjlighet att engagera mig, utvecklas och bidra till
            innovativa projekt. Med mitt första internship planerat att starta
            den 9:e december 2024 och fortsätta till den 25:e april 2025, följt
            av mitt examensarbete till den 6:e juni 2025, är jag beredd att
            engagera mig fullt ut i en sex månaders period och bidra till er
            organisation. Jag ser fram emot möjligheten att diskutera hur jag
            kan bidra till ert team och lära mig ännu mer. Tack för er tid och
            hänsyn.
          </p>
          <p>Med vänliga hälsningar</p>
          <h3>Arvid Dawn, Stockholm</h3>
          <h3>Sverige</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
