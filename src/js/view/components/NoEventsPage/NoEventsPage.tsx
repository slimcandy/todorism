import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { ButtonPrimary, EllipseWithImg, TitleH1 } from "../../elements";
import fireImg from "../../../../assets/images/fire.png";
import {
  localStorageTripObjects,
  localStorageUsernameKey,
} from "../../../common/constants";
import { pullLocalStorage } from "../../../utils/localStorage";
import { INewTripResponse } from "../../../interfaces/Event";

export const NoEventsPage = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState<string>("");
  const [redirectToEvents, setRedirectToEvents] = useState(false);

  useEffect(() => {
    pullLocalStorage(localStorageUsernameKey)
      .then((localStorageUsername) => {
        if (
          typeof localStorageUsername === "string" &&
          localStorageUsername.length > 0
        )
          setUsername(localStorageUsername);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    pullLocalStorage(localStorageTripObjects)
      .then((localStorageString) => {
        if (
          typeof localStorageString === "string" &&
          localStorageString.length > 0
        ) {
          const trips = JSON.parse(localStorageString) as INewTripResponse[];
          if (trips.length > 0) {
            setRedirectToEvents(true);
          }
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div
      className="no-events-page
   flex flex-col min-h-screen
   justify-between
    px-4 pt-14 pb-6
    sm:w-6/12
    w-full
    mx-auto"
    >
      <TitleH1>
        {t("events.list.your_events")}, {username || ""}!
      </TitleH1>

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
      {redirectToEvents && <Navigate to="/events" replace />}
    </div>
  );
};
