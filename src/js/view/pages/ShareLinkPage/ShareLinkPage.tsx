import React from "react";
import { useTranslation } from "react-i18next";
import { Input, TextBodyStandard, TitleH1, ActionPanel } from "../../elements";
import { CopyIcon } from "../../icons/CopyIcon";
import { PageWrapper } from "../../components";

import BackPackLogo from "./images/backpack.png";
import BackPackLogo_2x from "./images/backpack_2x.png";

export const ShareLinkPage = () => {
  const { t } = useTranslation();

  // const url = currentEvent
  //   ? `${window.location.origin}/event?trip_uid=${currentEvent?.trip_uid}`
  //   : "";
  const url = "";

  const shareUrl = () => {
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

  const pageMainContent = (
    <div className="text-center flex flex-col w-full">
      <div className="mb-8 xs:mb-14 mx-auto">
        <img
          src={BackPackLogo}
          srcSet={`${BackPackLogo} 1x, ${BackPackLogo_2x} 2x`}
          alt={t("pages.share.logo")}
          className="mx-auto"
        />
      </div>

      <div className="mb-6">
        <TitleH1>Ура! Мероприятие успешно создано!</TitleH1>
      </div>

      <div className="mb-6">
        <TextBodyStandard>{t("pages.share.paragraph")}</TextBodyStandard>
      </div>

      <div className="mb-10 xs:mb-14">
        <Input
          title={t("pages.share.title")}
          className="cursor-copy select-all"
          value={url}
          icon={<CopyIcon size={20} />}
          readonly
          onClick={shareUrl}
          onChange={() => {}}
        />
      </div>
    </div>
  );

  const pageFooter = <ActionPanel primaryButtonText={t("buttons.continue")} />;

  return <PageWrapper pageContent={pageMainContent} pageFooter={pageFooter} />;
};
