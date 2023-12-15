import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Contact />
  </React.StrictMode>
);
