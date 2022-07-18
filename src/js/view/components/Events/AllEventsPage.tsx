import React from "react";
import { TitleH1 } from "../../elements/typo";
import { EventList } from "./EventList";

export const AllEventsPage = () => (
  <div className="pt-3 px-4 bg-light-4 dark:bg-dark-1 dark:text-light-4 text-black-0">
    <TitleH1>Ваши мероприятия</TitleH1>
    <p>Search bar</p>
    <EventList />
  </div>
);
