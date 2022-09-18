import React from "react";
import { useTranslation } from "react-i18next";
import {
  ButtonPrimary,
  Input,
  TextBodyStandard,
  TitleH1,
} from "../../elements";
import { CopyIcon } from "../../icons/CopyIcon";

import BackPackLogo from "./images/backpack.png";
import BackPackLogo_2x from "./images/backpack_2x.png";

const shareUrl = (url: string) => {
  if (
    window.navigator.canShare &&
    window.navigator.canShare({
      url,
    })
  ) {
    window.navigator
      .share({ url })
      .then(() => {})
      .catch(() => {});
  } else {
    navigator.clipboard
      .writeText(url)
      .then(() => {})
      .catch(() => {});
  }
};

export const ShareLinkPage = () => {
  const { t } = useTranslation();
  const url = "https://fancyapp.ru/event/2677qWu899";

  return (
    <div
      className="min-h-screen
    text-center flex flex-col
    justify-between md:justify-start
    px-4 pt-16 xs:pt-24 pb-6 mx-auto
    sm:w-6/12
    w-full"
    >
      <div className="mb-8 xs:mb-14 mx-auto">
        <img
          src={BackPackLogo}
          srcSet={`${BackPackLogo} 1x, ${BackPackLogo_2x} 2x`}
          alt={t("pages.share.logo")}
          className="mx-auto"
        />
      </div>

      <div className="mb-6">
        <TitleH1>Поход на Ладогу</TitleH1>
      </div>

      <div className="mb-6">
        <TextBodyStandard>{t("pages.share.paragraph")}</TextBodyStandard>
      </div>

      <div className="mb-10 xs:mb-14">
        <Input
          title={t("pages.share.title")}
          className="cursor-copy select-all"
          inputId="user-name-2"
          value={url}
          icon={<CopyIcon size={20} />}
          readonly
          onClick={shareUrl}
        />
      </div>

      <div className="px-7">
        <ButtonPrimary type="submit">{t("buttons.continue")}</ButtonPrimary>
      </div>
    </div>
  );
};
