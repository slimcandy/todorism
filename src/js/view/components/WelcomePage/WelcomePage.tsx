import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { ButtonPrimary, Input, TextBodyLarge, TitleH1 } from "../../elements";
import tentImg from "../../../../assets/images/tent.png";
import { pushLocalStorage } from "../../../utils/localStorage";
import { localStorageUsernameKey } from "../../../common/constants";
import { InputProps } from "../../elements/inputs/InputProps";

export const WelcomePage = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState<string>("");
  const [redirectToEvents, setRedirectToEvents] = useState<boolean>(false);
  const onUsernameChange: InputProps["onChange"] = (value) => {
    if (typeof value === "string") setUsername(value);
  };
  const onUsernameSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    pushLocalStorage(localStorageUsernameKey, JSON.stringify(username))
      .then(() => setRedirectToEvents(true))
      .catch(() => {});
  };

  return (
    <form
      className="min-h-screen
      text-center flex flex-col
      justify-between md:justify-start
      px-4 pt-16 xs:pt-24 pb-6 mx-auto
      sm:w-6/12
      w-full"
      onSubmit={onUsernameSubmit}
    >
      <div>
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
      <div className="px-7">
        <ButtonPrimary type="submit">{t("buttons.remember_me")}</ButtonPrimary>
      </div>
      {redirectToEvents && <Navigate to="/events" replace />}
    </form>
  );
};
