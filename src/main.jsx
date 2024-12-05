import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AppLayout from "./routes/AppLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AppLayout>
        <App />
      </AppLayout>
    </Router>
  </StrictMode>
);
