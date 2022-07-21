import React from "react";
import { useTranslation } from "react-i18next";
import { TitleH1 } from "../../elements/typography";
import { EventList } from "./EventList";
import SearchBar from "../SearchBar/SearchBar";
import { ButtonCircle } from "../../elements";
import { PlusIcon } from "../../icons";

export const AllEventsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-3 pb-2 px-4 relative
        w-full h-full
        mx-auto sm:w-6/12
      dark:text-light-4 text-black-0">
      <div className="mb-6">
        <TitleH1>{t("events.list.your_events")}</TitleH1>
      </div>
      <div className="mb-4">
        <SearchBar />
      </div>
      <EventList />
      <div className="fixed right-4 bottom-4">
        <ButtonCircle icon={<PlusIcon size={24}/>}
        onClick={()=>{console.log("Add new event")}}/>
      </div>
    </div>
  );
};
