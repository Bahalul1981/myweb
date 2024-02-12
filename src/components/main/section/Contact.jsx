import HeaderPage from "../../header/HeaderPage";
import { Icon } from "@blueprintjs/core";
function Contact() {
  return (
    <>
      <div>
        <HeaderPage />
      </div>

      <h1>Contakt</h1>
      <p>
        Kontakta mig för en samarbetsmöjlighet där jag kan tillhandahålla min
        expertis inom utveckling och bidra till att förverkliga era visioner.
        Låt oss tillsammans skapa en digital närvaro som sticker ut och
        engagerar era kunder.
      </p>
      <div className="contact-me-main">
        <div className="address-map">
          <div className="address-info">
            <h3>
              {" "}
              <Icon icon="path-search" /> Adress
            </h3>
            <p>Vårbergsvägen, 12741 Skärholmen, Stockholm</p>
            <h3>
              {" "}
              <Icon icon="envelope" /> E-post
            </h3>
            <p>bahalul_tuk@yahoo.com</p>
            <h3>
              {" "}
              <Icon icon="mobile-phone" /> Mobilnummer
            </h3>
            <p>+46727710850</p>
          </div>
          <div
            id="map"
            className="map"
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.551092848754!2d17.893412776652!3d59.27364861547692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f76a0a1d330e3%3A0x1fa612dfd6a9c8af!2zVsOlcmJlcmdzdsOkZ2VuLCBTdG9ja2hvbG0!5e0!3m2!1ssv!2sse!4v1707746096001!5m2!1ssv!2sse"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
        <div className="contactform">
          <label htmlFor="">Ditt Namn</label>
          <input type="text" />
          <label htmlFor="">Din Position</label>
          <input type="text" />
          <label htmlFor="">Ditt Företag</label>
          <input type="text" />
          <label htmlFor="">Ditt E-post</label>
          <input type="email" />
          <label htmlFor="">Ämne</label>
          <input type="text" />
          <label htmlFor="">Medelande</label>
          <input type="text" />
          <button>Skicka</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
