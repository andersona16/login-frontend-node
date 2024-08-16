import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Global from "./styles/global.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global />
    <App />
  </StrictMode>
);
