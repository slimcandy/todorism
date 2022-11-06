import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary, EllipseWithImg, TitleH1 } from "../../elements";
import fireImg from "../../../../assets/images/fire.png";

export const NoEventsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <form
      className="no-events-page
   flex flex-col min-h-screen
   justify-between
    px-4 pt-14 pb-6
    sm:w-6/12
    w-full
    mx-auto"
      onSubmit={() => navigate("/new-event")}
    >
      <div className="place-items-center">
        <div className="mb-16 mx-auto w-48 text-light-0 dark:text-green-0">
          <EllipseWithImg imgSrc={fireImg} />
        </div>

        <div className="text-center">
          <TitleH1>{t("events.list.no_events")}</TitleH1>
        </div>
      </div>

      <div className="px-7">
        <ButtonPrimary type="submit">
          {t("events.create_new_event.create_btn")}
        </ButtonPrimary>
      </div>
    </form>
  );
};
