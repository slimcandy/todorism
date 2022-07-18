import React, { useEffect, useState } from "react";
import axios from "axios";
import { Event } from "../../../interfaces";
import { EventListItem } from "./EventListItem";

export const EventList = () => {
  const [events, setEvents] = useState<Array<Event> | []>([]);

  const getEvents = async () =>
    axios
      .get(
        "https://tracking-organizer.herokuapp.com/Trip/f3ebd9dd-17f3-4fb4-9460-58c73128911e/All"
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setEvents(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });

  useEffect(() => {
    void getEvents();
  }, []);

  return (
    <>
      {events.map((event: Event) => (
        <div className="mb-2">
          <EventListItem
            tripUid={event.trip_uid}
            title={event.title}
            dateStart={event.start}
            dateEnd={event.end}
            description={event.description}
          />
        </div>
      ))}
    </>
  );
};
