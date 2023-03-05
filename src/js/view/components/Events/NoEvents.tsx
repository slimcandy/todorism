import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ActionPanel, EllipseWithImg, TitleH1 } from "../../elements";
import fireImg from "../../../../assets/images/fire.png";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { createEventPageUrl } from "../../../../router/constants";

export const NoEventsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const pageMainContent = (
    <form className="flex flex-col">
      <div className="place-items-center">
        <div className="mb-16 mx-auto w-48 text-light-0 dark:text-green-0">
          <EllipseWithImg imgSrc={fireImg} />
        </div>

        <div className="text-center">
          <TitleH1>{t("events.list.no_events")}</TitleH1>
        </div>
      </div>
    </form>
  );

  const pageFooter = (
    <ActionPanel
      primaryButtonText={t("events.create_new_event.create_btn")}
      primaryButtonType="submit"
      onPrimaryButtonClick={() => navigate(createEventPageUrl())}
    />
  );

  return (
    <PageWrapper
      pageContent={pageMainContent}
      pageFooter={pageFooter}
      className="h-full"
    />
  );
};
