import React, { useState } from "react";
import SuccessMessage from "../../showMassege/SuccessMessage";
import FaieldMassege from "../../showMassege/FaieldMassege";
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
    setShowSuccessMessage(true);
    e.preventDefault();

    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Fullständiga namn</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="company">Företag</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-post</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="mobile">Mobilnummer</label>
        <input
          type="number"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Medelande</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="custom-button  manual-styling">
          Skicka
        </button>
      </form>

      {showSuccessMessage && <SuccessMessage />}
    </div>
  );
}

export default ContactForm;
