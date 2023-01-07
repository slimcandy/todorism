import React from "react";
import { IEventTitle } from "./EventTitleProps";
import { TextBodyLarge } from "../typography";
import { TagSmall } from "../tags";
import { getDateIntervalWithDots } from "../../../utils";

export const EventTitle = (props: IEventTitle) => {
  const { event } = props;

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      <TextBodyLarge className="text-white" fontWeight="semibold">
        {event.title}
      </TextBodyLarge>

      {event.start && (
        <TagSmall>
          {getDateIntervalWithDots(event.start, event.end || "")}
        </TagSmall>
      )}
    </div>
  );
};
