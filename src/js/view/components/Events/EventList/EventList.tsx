import React from "react";
import { Event } from "../Event";
import { EventListItem } from "../EventListItem/EventListItem";

type EventListProps = {
  list: Array<Event>;
};

export const EventList = (props: EventListProps) => {
  const { list } = props;

  const sortedListByDayDesc = list.sort(
    (a, b) =>
      new Date(b.dateStart || "").getTime() -
      new Date(a.dateStart || "").getTime()
  );

  return (
    <div>
      {sortedListByDayDesc.map((event) => (
        <div className="mb-2">
          <EventListItem
            tripUid={event.tripUid}
            key={event.tripUid}
            title={event.title}
            description={event.description}
            dateStart={event.dateStart}
            dateEnd={event.dateEnd}
          />
        </div>
      ))}
    </div>
  );
};
