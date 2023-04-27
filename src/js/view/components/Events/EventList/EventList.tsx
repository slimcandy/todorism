import React from "react";
import { IEvent } from "../../../../interfaces";
import { EventListItem } from "../EventListItem/EventListItem";

type EventListProps = {
  list: Array<IEvent>;
  onClick: (value: string) => void;
};

export const EventList = (props: EventListProps) => {
  const { list, onClick } = props;

  const sortedListByDayDesc = list.sort(
    (a, b) =>
      new Date(b.start || "").getTime() - new Date(a.start || "").getTime()
  );

  return (
    <>
      {sortedListByDayDesc.map((event) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          className="zebra-list-item"
          key={event.eventUid}
          onClick={() => onClick(event.eventUid)}
        >
          <EventListItem
            eventUid={event.eventUid}
            key={event.eventUid}
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
