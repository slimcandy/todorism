import React from "react";
import { Indicator, TextBodySmall, TitleH3 } from "../../elements";
import { KebabIcon } from "../../icons";
import { dateToStringDDMMYYYY, isDateExpired } from "../../../utils";
import { EventListItemProps } from "./Event";

export const EventListItem = (props: EventListItemProps) => {
  const { tripUid, title, description, dateStart, dateEnd } = props;
  let start;
  let end;
  if (dateStart) {
    start = dateToStringDDMMYYYY(new Date(dateStart));
  }
  if (dateEnd) {
    end = dateToStringDDMMYYYY(new Date(dateEnd));
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
            <Indicator
              isActive={dateStart ? isDateExpired(new Date(dateStart)) : true}
            />
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
