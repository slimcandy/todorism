import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../../common/constants";
import { IEvent, IEventFromBE } from "../../../interfaces";
import { convertIEventFromBEToIEvent } from "../../../utils";
import {
  getAccessEventsUidsFromLocalStorage,
  saveCurrentEventInLocalStorage,
} from "../../../utils/localStorage";
import { TitleH1, Loader, ButtonCircle } from "../../elements";
import { AllEvents } from "./AllEvents";
import { NoEventsPage } from "./NoEvents";
import { useLoading } from "../../../hooks";
import { PlusIcon } from "../../icons";
import { createEventPageUrl, eventPageUrl } from "../../../../router/constants";

export const EventsPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [events, setEvents] = useState<IEvent[]>([]);
  const { loading, setLoading } = useLoading();

  const navigateToCreateEvent = () => {
    window.localStorage.removeItem("currentEvent");
    navigate(createEventPageUrl());
  };

  const goToEvent = (eventUid: string) => {
    const selectedEvent = events.find((e) => e.eventUid === eventUid);

    if (selectedEvent) {
      saveCurrentEventInLocalStorage(selectedEvent);
      navigate(eventPageUrl({ eventUid }));
    }
  };

  const getAllTrips = async (eventUids: string[]) => {
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
  };

  useEffect(() => {
    const eventsUids = getAccessEventsUidsFromLocalStorage();

    if (eventsUids.length > 0) {
      getAllTrips(eventsUids)
        .then()
        .catch(() => {});
    }
  }, []);

  return (
    <>
      {loading && <Loader />}

      <div className="flex flex-col w-full">
        <TitleH1>{t("events.list.your_events")}</TitleH1>

        {!loading && events.length === 0 ? (
          <NoEventsPage />
        ) : (
          <>
            <AllEvents list={events} onClick={goToEvent} />

            <div className="flex items-end justify-end h-full sticky bottom-4">
              <ButtonCircle
                icon={<PlusIcon size={24} />}
                onClick={navigateToCreateEvent}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EventsPage;
