import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DisplayMarks from "./display1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DisplayMarks />
  </StrictMode>
);