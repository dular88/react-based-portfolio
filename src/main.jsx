import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ important
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      {" "}
      {/* 👈 wrap App in HashRouter for GitHub Pages */}
      <App />
    </HashRouter>
  </StrictMode>
);
