import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { EventList } from "./EventList/EventList";
import { IEvent } from "../../../interfaces";

interface Props {
  list: Array<IEvent>;
  onClick: (value: string) => void;
}

export const AllEvents = (props: Props) => {
  const { list, onClick } = props;
  return (
    <>
      <div className="mb-4 pt-6">
        <SearchBar />
      </div>
      <EventList list={list} onClick={onClick} />
    </>
  );
};
