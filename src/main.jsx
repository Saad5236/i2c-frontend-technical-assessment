import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap";
import "../src/assets/styles/global.scss";

import { BrowserRouter } from "react-router-dom";

import { RegistrationProvider } from "./contexts/RegistrationContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RegistrationProvider>
        <App />
      </RegistrationProvider>
    </BrowserRouter>
  </StrictMode>
);
