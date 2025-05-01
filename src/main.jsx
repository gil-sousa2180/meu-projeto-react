import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./globalStyles.js";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
