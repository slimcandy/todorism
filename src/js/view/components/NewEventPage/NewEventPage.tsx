import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { createNewEvent } from "../../../api_clients";
import {
  ButtonPrimary,
  Input,
  InputDate,
  TextBodyStandard,
  TitleH1,
  TextArea
} from "../../elements";

export const NewEventPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // TODO: get username from localStorage or store
  const username = "TestUser";
  const path = "/";

  const [newTripName, setNewTripName] = useState<string | null>(null);

  const [newTripStartDate, setNewTripStartDate] = useState<string>(
    new Date().toISOString()
  );
  const [newTripEndDate, setNewTripEndDate] = useState<string>(
    new Date().toISOString()
  );

  const [newTripDescription, setNewTripDescription] = useState<string | null>(
    null
  );

  const onNewTripNameChange = (newName: string) => {
    setNewTripName(newName);
  };

  const onStartDateChange = (startDate: string) =>
    setNewTripStartDate(new Date(startDate).toISOString());

  const onEndDateChange = (endDate: string) =>
    setNewTripEndDate(new Date(endDate).toISOString());

  const onNewTripDescriptionChange = (desc: string) => {
    setNewTripDescription(desc);
  };

  const onNewTripSubmit = createNewEvent;

  const isBtnDisabled = newTripName === null || newTripName.length === 0

  return (
    <div
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
          <div className="mb-2">
            <TextBodyStandard className="dark:text-dark-3">
              {t("pages.new_event.event_name")}
            </TextBodyStandard>
            <TextBodyStandard className="dark:text-dark-3">*</TextBodyStandard>
          </div>
          <Input
            value={newTripName}
            onChange={onNewTripNameChange}
            placeholder={`${t("pages.new_event.example")}, ${t(
              "pages.new_event.event_name_example"
            )}`}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <TextBodyStandard className="dark:text-dark-3">
              {t("pages.new_event.dates")}
            </TextBodyStandard>
          </div>
          <div className="flex">
            <div className="mr-4">
              <InputDate
                value={newTripStartDate}
                onChange={onStartDateChange}
                type="date"
                placeholder={`${t("pages.new_event.date_start")}: ${t(
                  "pages.new_event.example"
                )}, 12.06.2022`}
              />
            </div>
            <div>
              <InputDate
                value={newTripStartDate}
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
          <div className="mb-2">
            <TextBodyStandard className="dark:text-dark-3">
              {t("pages.new_event.description")}
            </TextBodyStandard>
          </div>
          <TextArea
            rows={3}
            placeholder={`${t("pages.new_event.example")}, ${t(
              "pages.new_event.description_example"
            )}`}
            onChange={onNewTripDescriptionChange}
          />
        </div>
      </div>
      <ButtonPrimary
        type="submit"
        disabled={isBtnDisabled}
        onClick={() =>
          void onNewTripSubmit(
            username,
            newTripName ?? "",
            newTripDescription,
            newTripStartDate,
            newTripEndDate,
            ()=>navigate(path)
          )
        }
      >
        {t("buttons.create")}
      </ButtonPrimary>
    </div>
  );
};
