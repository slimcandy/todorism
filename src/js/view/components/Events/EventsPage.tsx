import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { classesOf } from "../../../utils";
import { Event } from "./Event";
import { AllEvents } from "./AllEvents";
import { NoEvents } from "./NoEvents";
import { TitleH1 } from "../../elements";

export const EventsPage = () => {
  const { t } = useTranslation();

  // TODO: переписать в соответсвии с новым API
  const [events, setEvents] = useState<Array<Event>>([]);

  const fetchEvents = async () => {
    await fetch("https://tracking-organizer.herokuapp.com/Trip/All", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(["3fa85f64-5717-4562-b3fc-2c963f66afa6"]),
    })
      .then((res) => res.json())
      .then(setEvents)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    void fetchEvents();
  }, []);

  const pageClasses = classesOf(
    "px-4 pt-14 pb-6",
    "sm:w-6/12",
    "w-full",
    "mx-auto",
    "flex flex-col min-h-screen",
    !events.length && "justify-between"
  );

  return (
    <div className={pageClasses}>
      <TitleH1>{t("events.list.your_events")}</TitleH1>
      {!!events.length && <AllEvents list={events} />}
      {!events.length && <NoEvents />}
    </div>
  );
};
