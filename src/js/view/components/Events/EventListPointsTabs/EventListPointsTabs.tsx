import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextBodyStandard } from "../../../elements";
import { PrivateListPoints } from "../../Items/private/PrivateListPoints/PrivateListPoints";
import { CommonListPoints } from "../../Items/common/CommonListPoints/CommonListPoints";
import { TakenListPoints } from "../../Items/taken/TakenListPoints/TakenListPoints";
import {
  TEventCardListPointTypes,
  IEventListPointsTabsProps,
} from "./EventListPointsTabsProps";
import {
  getListPointTypeFromLocalStorage,
  saveListPointTypeInLocalStorage,
} from "../../../../utils/localStorage";
import { LIST_POINT_TYPES } from "../../../../common/constants";
import { classesOf } from "../../../../utils";

export const EventListPointsTabs = (props: IEventListPointsTabsProps) => {
  const { accessIds } = props;

  const { t } = useTranslation();

  const listPointTypeFromLS = getListPointTypeFromLocalStorage();

  const initialListPointType =
    listPointTypeFromLS && listPointTypeFromLS !== "recommended"
      ? listPointTypeFromLS
      : "common";

  const [activeTab, setActiveTab] =
    useState<TEventCardListPointTypes>(initialListPointType);

  const tabContents = {
    [LIST_POINT_TYPES.common]: <CommonListPoints accessIds={accessIds} />,
    [LIST_POINT_TYPES.private]: <PrivateListPoints accessIds={accessIds} />,
    [LIST_POINT_TYPES.taken]: <TakenListPoints accessIds={accessIds} />,
  };

  const possibleListPointTypes = Object.keys(
    tabContents
  ) as TEventCardListPointTypes[];

  const getClassName = (listPointType: TEventCardListPointTypes) =>
    classesOf(
      "flex grow justify-center pt-2 pb-3 px-0 border-b border-dark-3 text-dark-3",
      listPointType === activeTab && "text-green-1 border-green-1"
    );

  useEffect(() => {
    saveListPointTypeInLocalStorage(activeTab);
  }, [activeTab]);

  return (
    <div className="flex flex-col h-full gap-y-6">
      <div className="flex">
        {possibleListPointTypes.map((listPointType) => (
          <button
            key={listPointType}
            className={getClassName(listPointType)}
            onClick={() => setActiveTab(listPointType)}
          >
            <TextBodyStandard fontWeight="medium">
              {t(`event_card.list_point_types.${listPointType}`)}
            </TextBodyStandard>
          </button>
        ))}
      </div>

      {tabContents[activeTab]}
    </div>
  );
};
