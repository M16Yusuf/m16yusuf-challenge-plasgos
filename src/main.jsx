import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";

// import App from "./App.jsx";
import MyRouter from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyRouter />
  </StrictMode>,
);
