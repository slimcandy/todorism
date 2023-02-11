import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SERVER_URL } from "../../../common/constants";
import { IEvent, IEventFromBE } from "../../../interfaces";
import { convertIEventFromBEToIEvent } from "../../../utils/converters";
import { getAccessEventsUidsFromLocalStorage } from "../../../utils/localStorage";
import { TitleH1, Loader } from "../../elements";
import { AllEvents } from "./AllEvents";
import { NoEventsPage } from "./NoEvents";
import { useLoading } from "../../../hooks";

function EventsPage() {
  const { t } = useTranslation();
  const [events, setEvents] = useState<IEvent[]>([]);
  const { loading, setLoading } = useLoading();

  const getAllTrips = useCallback(
    async (eventUids: string[]) => {
      try {
        setLoading(true);

        const response = await fetch(`${SERVER_URL}/Trip/All?`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventUids),
        });

        if (response.ok) {
          const json = ((await response.json()) as IEventFromBE[]).map((e) =>
            convertIEventFromBEToIEvent(e)
          );
          setEvents(json);
        }
      } finally {
        setLoading(false);
      }
    },
    [setLoading]
  );

  useEffect(() => {
    const eventsUids = getAccessEventsUidsFromLocalStorage();

    if (eventsUids.length > 0) {
      getAllTrips(eventsUids)
        .then()
        .catch(() => {});
    }
  }, [getAllTrips]);

  return (
    <>
      {loading && <Loader />}

      <div className="flex flex-col w-full">
        <TitleH1>{t("events.list.your_events")}</TitleH1>
        {!!events.length && <AllEvents list={events} />}
        {!events.length && <NoEventsPage />}
      </div>
    </>
  );
}

export default EventsPage;
