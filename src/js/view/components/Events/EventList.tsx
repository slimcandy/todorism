import React from "react";
import { Event } from "./Event";
import { EventListItem } from "./EventListItem";

type EventListProps = {
  list: Array<Event>;
};

export const EventList = (props: EventListProps) => {
  const { list } = props;

  const sortedListByDayDesc = list.sort(
    (a, b) =>
      new Date(b.start || "").getTime() - new Date(a.end || "").getTime()
  );

  return (
    <div>
      {sortedListByDayDesc.map((event) => (
        <div className="mb-2">
          <EventListItem
            tripUid={event.trip_uid}
            key={event.trip_uid}
            title={event.title}
            description={event.description}
            dateStart={event.start}
            dateEnd={event.end}
          />
        </div>
      ))}
    </div>
  );
};
