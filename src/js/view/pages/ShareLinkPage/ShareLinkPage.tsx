import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import {
  MemoInput as Input,
  TextBodyStandard,
  TitleH1,
  ActionPanel,
  Loader,
} from "../../elements";
import { CopyIcon } from "../../icons/CopyIcon";
import { PageWrapper } from "../../components";
import { createRecommendedPrivateList } from "../../../api_clients";
import {
  getRecommendedListPointsFromLocalStorage,
  saveRecommendedListPointsInLocalStorage,
} from "../recommended/storages";

import BackPackLogo from "./images/backpack.png";
import BackPackLogo_2x from "./images/backpack_2x.png";
import { useLoading } from "../../../hooks";
import {
  convertIListPointToIListPointFromBE,
  classesOf,
  copyUrl,
} from "../../../utils";
import { TProvidedEvent } from "../../../../router/types";
import { IEvent } from "../../../interfaces";

function emptyFunction() {}

export const ShareLinkPage = () => {
  const routeData = useLoaderData() as TProvidedEvent;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { setLoading } = useLoading();

  const [event, setEvent] = useState<IEvent>();

  const isNewEvent = event?.isNewEvent || false;

  const eventCardPath = event ? `/event/${event.eventUid}` : "";

  const link = `${window.location.origin}${eventCardPath}`;

  const [successMessageShown, setSuccessMessageShown] = useState(false);

  const [failMessageShown, setFailMessageShown] = useState(false);

  const handleCopyButtonClick = useCallback(
    (url: string = link) => {
      copyUrl(url)
        .then(() => {
          setSuccessMessageShown(true);
          setTimeout(() => {
            setSuccessMessageShown(false);
          }, 1000 * 2);
        })
        .catch(() => {
          setFailMessageShown(true);
          setTimeout(() => {
            setFailMessageShown(false);
          }, 1000 * 2);
        });
    },
    [link]
  );

  const addRecommendedListPoints = async () => {
    try {
      setLoading(true);

      if (isNewEvent && event) {
        await createRecommendedPrivateList(
          event.eventUid,
          getRecommendedListPointsFromLocalStorage().map((l) =>
            convertIListPointToIListPointFromBE(l)
          )
        );
        saveRecommendedListPointsInLocalStorage([]);

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
        {isNewEvent ? (
          <TitleH1>Ура! Мероприятие успешно создано!</TitleH1>
        ) : (
          <TitleH1>{event?.title}</TitleH1>
        )}
      </div>

      <div className="mb-6">
        <TextBodyStandard>{t("pages.share.paragraph")}</TextBodyStandard>
      </div>

      <div className="mb-10 xs:mb-14 relative">
        <Input
          title={t("pages.share.title")}
          inputClassName="cursor-copy select-all"
          value={link}
          icon={<CopyIcon size={20} />}
          readonly
          onClick={handleCopyButtonClick}
          onChange={emptyFunction}
        />
        <div
          className={classesOf(
            "alert shadow-lg my-2 absolute",
            !successMessageShown && "hidden"
          )}
        >
          Link is copied
        </div>
        <div
          className={classesOf(
            "alert-warning shadow-lg my-2 absolute",
            !failMessageShown && "hidden"
          )}
        >
          Sorry, could not copy link. Please copy it manually.
        </div>
      </div>
    </div>
  );

  const pageFooter = (
    <ActionPanel
      primaryButtonText={t(`buttons.${isNewEvent ? "continue" : "done"}`)}
      onPrimaryButtonClick={() => {
        void addRecommendedListPoints();
      }}
    />
  );

  useEffect(() => {
    if (routeData) {
      void routeData.data.then((d) => {
        setEvent(d.event);
      });
    }
  }, [routeData]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Await
        resolve={routeData?.data}
        errorElement={<p>Error share page loading</p>}
      >
        <PageWrapper pageContent={pageMainContent} pageFooter={pageFooter} />
      </Await>
    </React.Suspense>
  );
};
