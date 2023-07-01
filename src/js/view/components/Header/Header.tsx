import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "../../icons/Logo";
import {
  getCurrentEventFromLocalStorage,
  getEventAccessIds,
  getUserNameFromLocalStorage,
} from "../../../utils/localStorage";

import { getRouteParentData } from "./utils";
import { BtnIcon, MenuModal, TagSmall, TextBodyMedium } from "../../elements";
import { IHeaderRoute, IRouteState } from "./types";
import { ArrowIcon, BurgerIcon } from "../../icons";
import { useModal } from "../../../hooks";
import { faqPageUrl } from "../../../../router/constants";

export const Header = () => {
  const location = useLocation();

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>();

  const [routeData, setRouteData] = useState<IHeaderRoute>();

  const modalContext = useModal();

  const initName = () => {
    const name = getUserNameFromLocalStorage();

    if (name) {
      setUserName(name);
    }
  };

  const showMenuModal = () => {
    modalContext.setContent({
      content: (
        <MenuModal
          onSettingsClick={() => {}}
          onFavoriteItemsClick={() => {}}
          onFeedbackClick={() => {}}
          onQuestionsClick={() => navigate(faqPageUrl())}
        />
      ),
      onClose: () => modalContext.setContent(undefined),
    });
  };

  useEffect(() => {
    const event = getCurrentEventFromLocalStorage();
    const accessIds = getEventAccessIds(event?.eventUid || "");

    initName();
    const parentData = getRouteParentData({
      eventUid: event?.eventUid || "",
      isNewEvent: event?.isNewEvent || false,
      memberUid: accessIds?.memberUid,
      state: (location.state || {}) as IRouteState,
      pathName: location.pathname,
    });

    setRouteData(parentData);
  }, [location]);

  return (
    <header
      className="
        h-header sticky top-0
        flex items-center gap-x-4 bg-light-4 dark:bg-black-0
        dark:text-light-4 text-black-0 z-10
      "
    >
      {routeData?.parentPathName ? (
        <Link to={routeData.parentPathName} className="flex grow">
          <TextBodyMedium className="flex gap-x-2 items-center text-dark-3">
            <ArrowIcon size={16} direction="left" />
            {t(`headerRoutes.${routeData.parentLocalePath}`)}
          </TextBodyMedium>
        </Link>
      ) : (
        <Link to="/" className="flex grow">
          <Logo />
        </Link>
      )}

      {userName && (
        <TagSmall isActive className="overflow-hidden whitespace-nowrap">
          {userName}
        </TagSmall>
      )}

      <BtnIcon
        icon={<BurgerIcon size={24} />}
        className="btn-sm"
        onClick={showMenuModal}
      />
    </header>
  );
};
