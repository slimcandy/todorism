import React, { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
    <div className="relative bg-light-4 dark:bg-black-0 px-base min-h-[-webkit-fill-available]">
      <div className="min-w-[320px] max-w-[1024px] m-auto">
        <Header isWithLogo />

        <main className="flex min-h-[calc(100vh-theme(height.header))]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
