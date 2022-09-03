import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Event } from "./Event";
import { pullLocalStorage } from "../../../utils/localStorage";
import { localStorageTripObjects, SERVER_URL } from "../../../common/constants";
import { INewTripResponse } from "../../../interfaces/Event";
import { TitleH1 } from "../../elements";
import { AllEvents } from "./AllEvents";
import { NoEventsPage } from "./NoEvents";

function EventsPage() {
  const { t } = useTranslation();
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
              .then()
              .catch(() => {});
          }
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="px-4 pt-14 pb-6 sm:w-6/12 w-full mx-auto flex flex-col min-h-screen">
      <TitleH1>{t("events.list.your_events")}</TitleH1>
      {!!events.length && <AllEvents list={events} />}
      {!events.length && <NoEventsPage />}
    </div>
  );
}

export default EventsPage;
