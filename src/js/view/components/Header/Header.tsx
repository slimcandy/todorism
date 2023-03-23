import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "../../icons/Logo";
import {
  getCurrentEventFromLocalStorage,
  getEventAccessIds,
  getUserNameFromLocalStorage,
} from "../../../utils/localStorage";

import { getRoutesDataForHeader } from "./utils";
import { TagSmall, TextBodyMedium } from "../../elements";
import { IHeaderRoute, IRouteState } from "./types";
import { ArrowIcon } from "../../icons";

export const Header = () => {
  const location = useLocation();

  const { t } = useTranslation();

  const [userName, setUserName] = useState<string>();

  const [routeData, setRouteData] = useState<IHeaderRoute>();

  const initName = () => {
    const name = getUserNameFromLocalStorage();

    if (name) {
      setUserName(name);
    }
  };

  useEffect(() => {
    const event = getCurrentEventFromLocalStorage();
    const accessIds = getEventAccessIds(event?.eventUid || "");

    initName();

    const routesData = getRoutesDataForHeader({
      eventUid: event?.eventUid || "",
      isNewEvent: event?.isNewEvent || false,
      memberUid: accessIds?.memberUid,
      state: (location.state || {}) as IRouteState,
    });

    setRouteData(routesData[location.pathname]);
  }, [location]);

  return (
    <header
      className="h-header sticky top-0
    flex justify-between items-center gap-x-2 bg-light-4 dark:bg-black-0
    dark:text-light-4 text-black-0 z-10"
    >
      {routeData?.parentPathName ? (
        <Link to={routeData.parentPathName}>
          <TextBodyMedium className="flex gap-x-2 items-center text-dark-3">
            <ArrowIcon size={16} direction="left" />
            {t(`headerRoutes.${routeData.parentLocalePath}`)}
          </TextBodyMedium>
        </Link>
      ) : (
        <Link to="/">
          <Logo />
        </Link>
      )}

      {userName && (
        <TagSmall isActive className="overflow-hidden whitespace-nowrap">
          {userName}
        </TagSmall>
      )}
    </header>
  );
};
