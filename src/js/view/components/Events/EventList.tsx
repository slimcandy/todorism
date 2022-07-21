import React, { useEffect, useState } from "react";
import axios from "axios";
import { Event } from "../../../interfaces";
import { EventListItem } from "./EventListItem";

export const EventList = () => {
  const [events, setEvents] = useState<Array<Event> | []>([]);

  // TODO: вынести в отдельный файл и доработать
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

  const addEvent = async () =>
    axios
      .post(
        "https://tracking-organizer.herokuapp.com/Trip/CreateTrip?user_uid=f3ebd9dd-17f3-4fb4-9460-58c73128911e",
        {
          "title": "Выходные на байдарках",
          "description": "С заходом на базу отдыха «Надежда» и на скалу Парнас",
          "start": new Date("December 17, 2025 03:24:00"),
          "end": new Date("December 27, 2025 03:24:00")
        }
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
    // eslint-disable-next-line no-void,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div onClick={void addEvent}>
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
    </div>
  );
};
