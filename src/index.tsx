import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./i18n";
import { LoadingProvider, ModalProvider } from "./js/hooks";
import { router } from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </LoadingProvider>
  </React.StrictMode>
);
