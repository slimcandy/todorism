import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input, TextBodyStandard, TitleH1, ActionPanel } from "../../elements";
import { CopyIcon } from "../../icons/CopyIcon";
import { PageWrapper } from "../../components";
import { getCurrentEventFromLocalStorage } from "../../../utils/localStorage";
import { createRecommendedPrivateList } from "../../../api_clients";
import {
  getRecommendedListPointsFromLocalStorage,
  saveRecommendedListPointsInLocalStorage,
} from "../recommended/storages";

import BackPackLogo from "./images/backpack.png";
import BackPackLogo_2x from "./images/backpack_2x.png";
import { useLoading } from "../../../hooks";
import { convertIListPointToIListPointFromBE } from "../../../utils";

export const ShareLinkPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const { setLoading } = useLoading();

  const status = searchParams.get("status");

  const event = getCurrentEventFromLocalStorage();

  const eventCardPath = event ? `/event/${event.eventUid}` : "";

  const url = `${window.location.origin}${eventCardPath}`;

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

  const addRecommendedListPoints = async () => {
    try {
      setLoading(true);

      if (status === "new") {
        if (event) {
          await createRecommendedPrivateList(
            event.eventUid,
            getRecommendedListPointsFromLocalStorage().map((l) =>
              convertIListPointToIListPointFromBE(l)
            )
          );
          saveRecommendedListPointsInLocalStorage([]);
        }

        navigate(eventCardPath);
      } else {
        navigate(-1);
      }
    } finally {
      setLoading(false);
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
        {status === "new" ? (
          <TitleH1>Ура! Мероприятие успешно создано!</TitleH1>
        ) : (
          <TitleH1>{event?.title}</TitleH1>
        )}
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

  const pageFooter = (
    <ActionPanel
      primaryButtonText={t(`buttons.${status === "new" ? "continue" : "done"}`)}
      onPrimaryButtonClick={() => {
        void addRecommendedListPoints();
      }}
    />
  );

  return <PageWrapper pageContent={pageMainContent} pageFooter={pageFooter} />;
};
