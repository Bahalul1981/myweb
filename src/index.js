import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// THIS TWO LINES BELOW TO IMPORT ICONS FORM FONT BLUEPRINT AND APPLY TO WHOLE APPLIACTION
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
// THIS LINE BELOW TO IMPORT ICONS FORM FONT AWESOME AND APPLY TO WHOLE APPLIACTION
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
