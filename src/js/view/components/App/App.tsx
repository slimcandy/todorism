import React, { useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import store from "../../../stores/store";
import { Panel } from "../Panel/Panel";
import { UIKitPage } from "../UIKitPage/UIKitPage";
import { DevNavPage } from "../DevNavPage/DevNavPage";
import { AllEventsPage } from "../Events/AllEventsPage";
import SPAremoveit from "../SPAremoveit/SPAremoveit";
import { NoEventsPage } from "../NoEventsPage/NoEventsPage";
import { Header } from "../Header/Header";

import "../../../../styles/index.css";

export function App() {
  const { i18n } = useTranslation();
  const cLanguage = useCallback(
    async (language: string) => {
      await i18n.changeLanguage(language).then();
    },
    [i18n]
  );

  useEffect(() => {
    void cLanguage("ru");
  }, [cLanguage]);

  return (
    <Provider store={store}>
      <div className="relative bg-light-4 dark:bg-dark-0 min-h-screen">
        <Header isWithLogo />

        <main className="pt-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DevNavPage />} />
              <Route path="/alex" element={<Panel />} />
              <Route path="/ui-kit" element={<UIKitPage />} />
              <Route path="/no-events" element={<NoEventsPage />} />
              <Route path="/events" element={<AllEventsPage />} />
              <Route path="/SPAremoveit" element={<SPAremoveit />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </Provider>
  );
}
