import React from "react";
import { IEvent } from "../../../../interfaces";
import { EventListItem } from "../EventListItem/EventListItem";

type EventListProps = {
  list: Array<IEvent>;
};

export const EventList = (props: EventListProps) => {
  const { list } = props;

  const sortedListByDayDesc = list.sort(
    (a, b) =>
      new Date(b.start || "").getTime() - new Date(a.start || "").getTime()
  );

  return (
    <>
      {sortedListByDayDesc.map((event) => (
        <div className="mb-2">
          <EventListItem
            tripUid={event.tripUid}
            key={event.tripUid}
            title={event.title}
            description={event.description}
            start={event.start}
            end={event.end}
          />
        </div>
      ))}
    </>
  );
};
