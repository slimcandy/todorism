import React, { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "../Header/Header";
import "../../../../styles/index.css";
import { useDarkMode } from "../../../hooks";

export function App() {
  const { i18n } = useTranslation();

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

  return (
    <div className="bg-light-4 dark:bg-black-0">
      <div
        className="
          flex min-w-[320px] max-w-[1024px]
          m-auto px-base min-h-screen pt-[theme(height.header)]
        "
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
