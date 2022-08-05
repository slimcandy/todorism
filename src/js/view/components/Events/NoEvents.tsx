import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonPrimary, EllipseWithImg, TitleH1 } from "../../elements";
import fireImg from "../../../../assets/images/fire.png";

export const NoEvents = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="place-items-center">
        <div className="mb-16 mx-auto w-48 text-light-0 dark:text-green-0">
          <EllipseWithImg imgSrc={fireImg} />
        </div>

        <div className="text-center">
          <TitleH1>{t("events.list.no_events")}</TitleH1>
        </div>
      </div>

      <div className="px-7">
        <ButtonPrimary>{t("events.create_new_event.create_btn")}</ButtonPrimary>
      </div>
    </>
  );
};
