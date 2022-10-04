import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { Input, TextBodyLarge, TitleH1, ActionPanel } from "../../elements";
import tentImg from "../../../../assets/images/tent.png";
import { saveUserNameInLocalStorage } from "../../../utils/localStorage";
import { InputProps } from "../../elements/inputs/InputProps";
import { PageWrapper } from "..";

export const WelcomePage = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState<string>("");
  const [redirectToEvents, setRedirectToEvents] = useState<boolean>(false);
  const onUsernameChange: InputProps["onChange"] = (value) => {
    if (typeof value === "string") setUsername(value);
  };
  const onUsernameSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    saveUserNameInLocalStorage(username);
    setRedirectToEvents(true);
  };

  const pageMainContent = (
    <form className="text-center w-full">
      <div className="flex flex-col grow justify-center">
        <div className="mb-8 xs:mb-14 mx-auto">
          <img src={tentImg} alt="Tent" className="mx-auto" />
        </div>

        <div className="mb-6">
          <TitleH1>{t("pages.welcome.title")}</TitleH1>
        </div>

        <div className="mb-6">
          <TextBodyLarge>{t("pages.welcome.description")}</TextBodyLarge>
        </div>

        <div className="mb-8 xs:mb-10">
          <TextBodyLarge>{t("pages.welcome.whats_your_name")}</TextBodyLarge>
        </div>

        <div className="mb-10 xs:mb-14">
          <Input
            inputId="welcomePageId"
            placeholder={t("pages.welcome.whats_your_name")}
            onChange={onUsernameChange}
            value={username}
          />
        </div>
      </div>

      {redirectToEvents && <Navigate to="/events" replace />}
    </form>
  );

  const pageFooter = (
    <ActionPanel
      primaryButtonText={t("buttons.remember_me")}
      primaryButtonType="submit"
      onPrimaryButtonClick={(event) => onUsernameSubmit(event)}
    />
  );

  return <PageWrapper pageContent={pageMainContent} pageFooter={pageFooter} />;
};
