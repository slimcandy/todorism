import React from "react";
import { Indicator, TextBodySmall, TitleH3 } from "../../../elements";
import { KebabIcon } from "../../../icons";
import {
  convertDateToDDMMYYYYWithDots,
  checkExpiredDate,
} from "../../../../utils";
import { Event } from "../Event";

export const EventListItem = (props: Event) => {
  const { tripUid, title, description, dateStart, dateEnd } = props;
  let start;
  let end;
  if (dateStart) {
    start = convertDateToDDMMYYYYWithDots(dateStart);
  }
  if (dateEnd) {
    end = convertDateToDDMMYYYYWithDots(dateEnd);
  }

  return (
    <div
      id={tripUid}
      className="flex w-full items-center justify-content-between
  h-fit border-b border-light-2 dark:border-black-3 pb-3
  cursor-pointer"
    >
      <div className="mr-3 w-full">
        <div className="mb-3">
          <TitleH3 className="mb-1">{title}</TitleH3>
          <TextBodySmall className="text-dark-3 mt-1">
            {description || ""}
          </TextBodySmall>
        </div>

        {start && (
          <div>
            <Indicator isActive={!checkExpiredDate(dateStart as string)} />
            <TextBodySmall className="ml-1">{start || ""}</TextBodySmall>
            {end && (
              <TextBodySmall className="ml-1">{`- ${end || ""}`}</TextBodySmall>
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
