import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// THIS LINE BELOW TO IMPORT ICONS FORM FONT AWESOME AND APPLY TO WHOLE APPLIACTION
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
