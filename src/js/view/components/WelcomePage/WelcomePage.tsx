import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ButtonPrimary, Input, TextBodyLarge, TitleH1 } from "../../elements";
import tentImg from "../../../../assets/images/tent.png";
import { initialStore } from "../../../stores/storeConstants";

export const WelcomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { nickname } = initialStore;

  const saveNickNameToLocalStorage = () => {
    localStorage.setItem("nickname", JSON.stringify(nickname));
  };

  const goToEventsListPage = () => {
    const path = "/no-events";
    navigate(path);
  };

  const onRememberMe = () => {
    saveNickNameToLocalStorage();
    goToEventsListPage();
  };

  return (
    <div
      className="min-h-screen
      text-center flex flex-col
      justify-between md:justify-start
      px-4 pt-16 xs:pt-24 pb-6 mx-auto
      sm:w-6/12
      w-full"
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
            value={nickname}
            placeholder={t("pages.welcome.whats_your_name")}
          />
        </div>
      </div>
      <div className="px-7">
        <ButtonPrimary onClick={onRememberMe}>
          {t("buttons.remember_me")}
        </ButtonPrimary>
      </div>
    </div>
  );
};
