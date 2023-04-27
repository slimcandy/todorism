import React, { useCallback, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "../Header/Header";
import "../../../../styles/index.css";
import { useDarkMode, useModal } from "../../../hooks";
import { Modal } from "../../elements";

export function App() {
  const { i18n } = useTranslation();
  const modalContext = useModal();
  const location = useLocation();
  const cLanguage = useCallback(
    async (language: string) => {
      await i18n.changeLanguage(language).then();
    },
    [i18n]
  );

  useDarkMode();

  useEffect(() => {
    void cLanguage("ru");
  }, [cLanguage]);

  useEffect(() => {
    if (modalContext.content) {
      // drop context for modals
      modalContext.setContent(undefined);
    }
  }, [location]);

  return (
    <div className="relative bg-light-4 dark:bg-black-0 px-base min-h-[-webkit-fill-available]">
      <div className="min-w-[320px] max-w-[1024px] m-auto">
        <Header />

        <main className="flex min-h-[calc(100vh-theme(height.header))]">
          <Outlet />

          {modalContext.content && (
            <Modal
              onClose={() => modalContext.onClose?.()}
              content={modalContext.content}
            />
          )}
        </main>
      </div>
    </div>
  );
}
