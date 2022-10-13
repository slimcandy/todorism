import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { createNewEvent } from "../../../api_clients";
import { getUserNameFromLocalStorage } from "../../../utils/localStorage";
import { IEvent } from "../../../interfaces";
import {
  Input,
  InputDate,
  TitleH1,
  TextArea,
  ActionPanel,
} from "../../elements";
import { InputProps } from "../../elements/inputs/InputProps";
import { useLoading } from "../../../hooks";
import { PageWrapper } from "../PageWrapper/PageWrapper";

export const NewEventPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const path = "/events";
  const [userName, setUserName] = useState<string | null>("");
  const { setLoading } = useLoading();

  const [newEvent, setNewEvent] = useState<IEvent>({
    tripUid: "",
    title: "",
    description: "",
    start: null,
    end: null,
  });

  const onNewTripNameChange: InputProps["onChange"] = (newName) => {
    if (typeof newName === "string")
      setNewEvent({ ...newEvent, title: newName });
  };

  const onStartDateChange: InputProps["onChange"] = (startDate) => {
    if (typeof startDate === "string")
      setNewEvent({ ...newEvent, start: new Date(startDate).toISOString() });
  };

  const onEndDateChange: InputProps["onChange"] = (endDate) => {
    if (typeof endDate === "string")
      setNewEvent({ ...newEvent, end: new Date(endDate).toISOString() });
  };

  const onNewTripDescriptionChange = (desc: string) => {
    setNewEvent({ ...newEvent, description: desc });
  };

  const isBtnDisabled = newEvent.title === null || newEvent.title.length === 0;

  const createEvent = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault();
      setLoading(true);

      createNewEvent(
        userName ?? "",
        newEvent.title ?? "",
        newEvent.description,
        newEvent.start,
        newEvent.end,
        () => navigate(path)
      )
        .then(() => {})
        .catch(() => {});
    } finally {
      setLoading(false);
    }
  };

  const pageMainContent = (
    <form
      className="
        flex flex-col
        justify-between
        w-full
      "
    >
      <div>
        <div className="mb-6">
          <TitleH1>{t("pages.new_event.title")}</TitleH1>
        </div>
        <div className="mb-4">
          <Input
            inputId="event-name"
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
                inputId="event-start-date"
                label={t("pages.new_event.dates")}
                value={newEvent.start}
                onChange={onStartDateChange}
                type="date"
                placeholder={`${t("pages.new_event.date_start")}: ${t(
                  "pages.new_event.example"
                )}, 12.06.2022`}
              />
            </div>
            <div>
              <InputDate
                inputId="event-end-date"
                label={t("pages.new_event.dates")}
                value={newEvent.end}
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
            textareaId="event-description"
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
    </form>
  );

  const pageFooter = (
    <ActionPanel
      primaryButtonText={t("buttons.create")}
      primaryButtonType="submit"
      primaryButtonDisabled={isBtnDisabled}
      onPrimaryButtonClick={(event) => createEvent(event)}
    />
  );

  useEffect(() => {
    setUserName(getUserNameFromLocalStorage());
  }, []);

  return (
    <PageWrapper
      pageContent={pageMainContent}
      pageFooter={pageFooter}
      verticalTopPageContent
    />
  );
};
