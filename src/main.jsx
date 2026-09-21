import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppProviders from "./provider/AppProviders.jsx";
import { createJobResources } from "./resources/index.js";
import { RouterProvider } from "react-router";
import { router } from "./router.jsx";
createJobResources();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </StrictMode>,
);
