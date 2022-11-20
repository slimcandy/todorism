import React, { useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import store from "../../../stores/store";
import { Panel } from "../Panel/Panel";
import { Header } from "../Header/Header";
import { UIKitPage } from "../UIKitPage/UIKitPage";
import { DevNavPage } from "../DevNavPage/DevNavPage";
import SPAremoveit from "../SPAremoveit/SPAremoveit";
import { WelcomePage } from "../WelcomePage/WelcomePage";
import { MembersPage } from "../../pages/MembersPage";
import { NoEventsPage } from "../Events/NoEvents";

import "../../../../styles/index.css";
import { NewEventPage } from "../NewEventPage/NewEventPage";
import EventsPage from "../Events/EventsPage";
import { ShareLinkPage } from "../../pages/ShareLinkPage/ShareLinkPage";
import { LoadingProvider } from "../../../hooks";

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
      <LoadingProvider>
        <div className="relative bg-light-4 dark:bg-black-0 px-base">
          <BrowserRouter>
            <Header isWithLogo />

            <main className="flex min-h-[calc(100vh-theme(height.header))]">
              <Routes>
                <Route path="/" element={<DevNavPage />} />
                <Route path="/alex" element={<Panel />} />
                <Route path="/ui-kit" element={<UIKitPage />} />
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/share" element={<ShareLinkPage />} />
                <Route path="/no-events" element={<NoEventsPage />} />
                <Route path="/new-event" element={<NewEventPage />} />
                <Route
                  path="/:eventUid/add-members"
                  element={<MembersPage />}
                />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/SPAremoveit" element={<SPAremoveit />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </LoadingProvider>
    </Provider>
  );
}
