import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import './styles/global.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <App />

  </React.StrictMode>
);
