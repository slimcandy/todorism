import React from "react";
import { useTranslation } from "react-i18next";
import { TitleH1 } from "../../elements";

export const NewEventPage = () => {
  const { t } = useTranslation();

  return (
    <div
    className="min-h-screen
      text-center flex flex-col
      justify-between md:justify-start
      px-4 pt-16 xs:pt-24 pb-6 mx-auto
      sm:w-6/12
      w-full">
    <div>
      <div className="mb-6">
        <TitleH1>{t("pages.welcome.title")}</TitleH1>
      </div>
    </div>
  </div>)
}
