import React from "react";
import { Indicator, TextBodySmall, TitleH3 } from "../../../elements";
import { KebabIcon } from "../../../icons";
import {
  convertDateToDDMMYYYYWithDots,
  checkExpiredDate,
} from "../../../../utils";
import { IEvent } from "../../../../interfaces";

export const EventListItem = (props: IEvent) => {
  const { eventUid, title, description, start, end } = props;
  let dateStart;
  let dateEnd;
  if (start) {
    dateStart = convertDateToDDMMYYYYWithDots(start);
  }
  if (end) {
    dateEnd = convertDateToDDMMYYYYWithDots(end);
  }

  return (
    <div id={eventUid} className="flex items-center px-2 py-4 cursor-pointer">
      <div className="mr-3 w-full">
        <div className="mb-3">
          <TitleH3 className="mb-1">{title}</TitleH3>
          <TextBodySmall className="text-dark-3 mt-1">
            {description || ""}
          </TextBodySmall>
        </div>

        {dateStart && (
          <div>
            <Indicator isActive={!checkExpiredDate(start as string)} />
            <TextBodySmall className="ml-1">{dateStart || ""}</TextBodySmall>
            {dateEnd && (
              <TextBodySmall className="ml-1">{`- ${
                dateEnd || ""
              }`}</TextBodySmall>
            )}
          </div>
        )}
      </div>

      <KebabIcon
        size={16}
        className="cursor-pointer dark:text-dark-2 text-dark-4"
      />
    </div>
  );
};
