import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { createNewEvent } from "../../../api_clients";
import { getUserNameFromLocalStorage } from "../../../utils/localStorage";
import { IEvent } from "../../../interfaces";
import {
  ButtonPrimary,
  Input,
  InputDate,
  TitleH1,
  TextArea,
} from "../../elements";
import { InputProps } from "../../elements/inputs/InputProps";

export const NewEventPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const path = "/events";
  const [userName, setUserName] = useState<string | null>("");

  const [newEvent, setNewEvent] = useState<IEvent>({
    tripUid: "",
    title: "",
    description: "",
    start: null,
    end: null,
  });

  const onNewTripNameChange: InputProps["onChange"] = (newName) => {
    setNewEvent({ ...newEvent, title: newName });
  };

  const onStartDateChange: InputProps["onChange"] = (startDate) => {
    setNewEvent({ ...newEvent, start: new Date(startDate).toISOString() });
  };

  const onEndDateChange: InputProps["onChange"] = (endDate) => {
    setNewEvent({ ...newEvent, end: new Date(endDate).toISOString() });
  };

  const onNewTripDescriptionChange = (desc: string) => {
    setNewEvent({ ...newEvent, description: desc });
  };

  const isBtnDisabled = newEvent.title === null || newEvent.title.length === 0;

  useEffect(() => {
    setUserName(getUserNameFromLocalStorage());
  }, []);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        createNewEvent(
          userName ?? "",
          newEvent.title ?? "",
          newEvent.description,
          newEvent.start,
          newEvent.end
        )
          .then(() => {
            navigate(path);
          })
          .catch(() => {});
      }}
      className="min-h-screen
      flex flex-col h-100
      justify-between md:justify-start
      px-4 pt-16 xs:pt-16 pb-6 mx-auto
      sm:w-6/12
      w-full"
    >
      <div>
        <div className="mb-6">
          <TitleH1>{t("pages.new_event.title")}</TitleH1>
        </div>
        <div className="mb-4">
          <Input
            label={t("pages.new_event.event_name")}
            value={newEvent.title}
            onChange={onNewTripNameChange}
            placeholder={`${t("pages.new_event.example")}, ${t(
              "pages.new_event.event_name_example"
            )}`}
          />
        </div>
        <div className="mb-4">
          <div className="flex">
            <div className="mr-4">
              <InputDate
                label={t("pages.new_event.dates")}
                value={newEvent.start || ""}
                onChange={onStartDateChange}
                type="date"
                placeholder={`${t("pages.new_event.date_start")}: ${t(
                  "pages.new_event.example"
                )}, 12.06.2022`}
              />
            </div>
            <div>
              <InputDate
                label={t("pages.new_event.dates")}
                value={newEvent.end || ""}
                onChange={onEndDateChange}
                type="date"
                placeholder={`${t("pages.new_event.date_end")}: ${t(
                  "pages.new_event.example"
                )}, 12.06.2022`}
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <TextArea
            label={t("pages.new_event.description")}
            rows={3}
            placeholder={`${t("pages.new_event.example")}, ${t(
              "pages.new_event.description_example"
            )}`}
            onChange={onNewTripDescriptionChange}
            value={newEvent.description}
          />
        </div>
      </div>
      <ButtonPrimary type="submit" disabled={isBtnDisabled}>
        {t("buttons.create")}
      </ButtonPrimary>
    </form>
  );
};
