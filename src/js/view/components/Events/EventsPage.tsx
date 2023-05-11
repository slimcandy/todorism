import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IEvent } from "../../../interfaces";
import {
  getAccessEventsUidsFromLocalStorage,
  saveCurrentEventInLocalStorage,
} from "../../../utils/localStorage";
import { ButtonCircle, Loader, TitleH1 } from "../../elements";
import { AllEvents } from "./AllEvents";
import { NoEventsPage } from "./NoEvents";
import { useLoading } from "../../../hooks";
import { PlusIcon } from "../../icons";
import { createEventPageUrl, eventPageUrl } from "../../../../router/constants";
import { deleteEvent, getEvents } from "../../../api_clients";

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

  const getAllTrips = useCallback(async () => {
    try {
      const eventsUids = getAccessEventsUidsFromLocalStorage();

      setLoading(true);

      if (eventsUids.length > 0) {
        const list = await getEvents({ eventsUids });

        if (list) {
          setEvents(list);
        }
      }
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  const onDeleteEvent = useCallback(
    async (eventUid: string) => {
      try {
        setLoading(true);

        await deleteEvent({ eventUid });
        await getAllTrips();
      } finally {
        setLoading(false);
      }
    },
    [setLoading]
  );

  useEffect(() => {
    getAllTrips()
      .then()
      .catch(() => {});
  }, [getAllTrips]);

  return (
    <>
      {loading && <Loader />}

      <div className="flex flex-col w-full">
        <TitleH1>{t("events.list.your_events")}</TitleH1>

        {!loading && events.length === 0 ? (
          <NoEventsPage />
        ) : (
          <>
            <AllEvents
              list={events}
              onClick={goToEvent}
              onDeleteEvent={(eventUid) => {
                void onDeleteEvent(eventUid);
              }}
            />

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
