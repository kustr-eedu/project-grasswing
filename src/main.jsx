import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GrasswingRouter from "./app";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GrasswingRouter />
  </StrictMode>
);
