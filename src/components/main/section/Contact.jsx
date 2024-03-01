import HeaderPage from "../../header/HeaderPage";
import { Icon } from "@blueprintjs/core";
import ContactForm from "./ContactForm";
function Contact() {
  return (
    <div className="contact-me-main-div">
      <div>
        <HeaderPage />
      </div>
      <div className="contact-me-sub-div">
        <h1>Contakt</h1>
        <p>
          Kontakta mig för en samarbetsmöjlighet där jag kan tillhandahålla min
          expertis inom utveckling och bidra till att förverkliga era visioner.
          Låt oss tillsammans skapa en digital närvaro som sticker ut och
          engagerar era kunder.
        </p>
        <div className="contact-me-info">
          <div className="address-map">
            <div className="address-info slide-in-left">
              <div className="address-heading">
                <i class="fa-solid fa-location-dot"></i>
                <h3>Adress</h3>
              </div>
              <p>Vårbergsvägen, 12741 Skärholmen, Stockholm</p>
              <div className="address-heading">
                <i class="fa-solid fa-envelope"></i>
                <h3>E-post</h3>
              </div>

              <p>bahalul_tuk@yahoo.com</p>
              <div className="address-heading">
                <i class="fa-solid fa-mobile"></i>
                <h3>Mobilnummer</h3>
              </div>
              <p>+46727710850</p>
              <div className="address-heading">
                <i class="fa-brands fa-teamspeak"></i>
                <h3>MS Teams</h3>
              </div>
              <h4>
                Arvid Dawn <p>bahalul1983@outlook.com</p>
              </h4>
            </div>
            <div
              id="map"
              className="google-map slide-in-right"
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
          <div className="contactForm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
