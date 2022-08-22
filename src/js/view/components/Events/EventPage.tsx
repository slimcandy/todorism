import React, { useEffect, useState } from "react";
import { EventList } from "./EventList";
import { Event } from "./Event";
import { pullLocalStorage } from "../../../utils/localStorage";
import { localStorageTripObjects, SERVER_URL } from "../../../common/constants";
import { INewTripResponse } from "../../../interfaces/Event";

function EventPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getAllTrips = async (tripUids: INewTripResponse["trip_uid"][]) => {
      const response = await fetch(`${SERVER_URL}/Trip/All?`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripUids),
      });

      if (response.ok) {
        const json: Event[] = (await response.json()) as Event[];
        setEvents(json);
      }
    };

    pullLocalStorage(localStorageTripObjects)
      .then((localStorageString) => {
        if (
          typeof localStorageString === "string" &&
          localStorageString.length > 0
        ) {
          const tripObjects = JSON.parse(
            localStorageString
          ) as INewTripResponse[];
          if (tripObjects.length > 0) {
            const tripUids: INewTripResponse["trip_uid"][] = [];
            tripObjects.forEach((tripObject) => {
              tripUids.push(tripObject.trip_uid);
            });
            getAllTrips(tripUids)
              .then(
                () => {},
                () => {}
              )
              .catch(() => {});
          }
        }
      })
      .catch(() => {});
  }, []);

  return <EventList list={events} />;
}

export default EventPage;
