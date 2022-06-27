import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../../../stores/store";
import { Panel } from "../Panel/Panel";
import { UIKitPage } from "../UIKitPage/UIKitPage";
import { DevNavPage } from "../DevNavPage/DevNavPage";

import "../../../../styles/index.css";

export function App() {
  return (
    <Provider store={store}>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DevNavPage />} />
            <Route path="/alex" element={<Panel />} />
            <Route path="/ui-kit" element={<UIKitPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </Provider>
  );
}
