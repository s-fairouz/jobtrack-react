import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import AppProviders from "./provider/AppProviders.jsx";
import { createJobResources } from "./resources/index.js";
import { router } from "./router.jsx";
createJobResources();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </StrictMode>,
);
