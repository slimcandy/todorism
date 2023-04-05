import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./i18n";
import { LoadingProvider } from "./js/hooks";
import { router } from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  </React.StrictMode>
);
