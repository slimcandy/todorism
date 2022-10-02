import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { EventList } from "./EventList/EventList";
import { IEvent } from "../../../interfaces";

type Props = {
  list: Array<IEvent>;
};

export const AllEvents = (props: Props) => {
  const { list } = props;
  return (
    <>
      <div className="mb-4 pt-6">
        <SearchBar />
      </div>
      <EventList list={list} />
    </>
  );
};
