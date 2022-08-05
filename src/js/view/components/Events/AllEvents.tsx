import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { EventList } from "./EventList";
import { Event } from "./Event";

type Props = {
  list: Array<Event>
}

export const AllEvents = (props: Props) => {
  const { list } = props;
  return (
    <>
      <div className="mb-4 pt-6">
        <SearchBar />
      </div>
      <EventList list={list} />
    </>);
};
