import React, { useState } from "react";
import SuccessMessage from "../../Librery/SuccessMessage";
function ContactForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      company: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });
    console.log(formData);
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn</label>
        <input
          type="text"
          id="name"
          className="input-text"
          name="name"
          placeholder="Fullständiga namn"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="company">Företag</label>
        <input
          type="text"
          className="input-text"
          id="company"
          name="company"
          placeholder="Ditt Företag"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-post</label>
        <input
          className="input-text"
          type="email"
          id="email"
          name="email"
          placeholder="E-post address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="mobile">Mobilnummer</label>
        <input
          type="number"
          className="input-text"
          id="mobile"
          name="mobile"
          placeholder="Ditt Mobilnummer"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Medelande</label>
        <textarea
          name="message"
          id="message"
          cols="51"
          rows="10"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="custom-button  manual-styling">
          Skicka
        </button>
      </form>

      {showSuccessMessage && <SuccessMessage />}
    </div>
  );
}

export default ContactForm;
