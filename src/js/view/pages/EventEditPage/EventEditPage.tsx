import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLoaderData, Await } from "react-router-dom";
import dayjs from "dayjs";
import { editEvent } from "../../../api_clients";
import {
  Loader,
  Input,
  InputDate,
  TitleH1,
  TextArea,
  ActionPanel,
} from "../../elements";
import { getUserNameFromLocalStorage } from "../../../utils/localStorage";
import { IEvent } from "../../../interfaces";
import { InputProps } from "../../elements/inputs/InputProps";
import { useLoading } from "../../../hooks";
import { PageWrapper } from "../../components";
import { TProvidedEvent } from "../../../../router/types";
import { eventMembersPageUrl } from "../../../../router/constants";
import { convertDateToYYYYMMDDWithDash, getToday } from "../../../utils";

export const EventEditPage = () => {
  const routeData = useLoaderData() as TProvidedEvent;

  const { t } = useTranslation();

  const { setLoading } = useLoading();

  const navigate = useNavigate();

  const username = getUserNameFromLocalStorage() || "Default user";

  const today = getToday();

  const [event, setEvent] = useState<IEvent>({
    eventUid: "",
    title: "",
    description: "",
    start: today,
    end: today,
    isNewEvent: true,
  });

  const [isValidDates, setIsValidDatesFlag] = useState<boolean>(true);

  const onNewTripNameChange: InputProps["onChange"] = (newName) => {
    setEvent({ ...event, title: newName });
  };

  const onStartDateChange: InputProps["onChange"] = (startDate) => {
    setIsValidDatesFlag(dayjs(startDate).isValid());
    setEvent({
      ...event,
      start: startDate,
      end: dayjs(event.end).isBefore(startDate) ? startDate : event.end,
    });
  };

  const onEndDateChange: InputProps["onChange"] = (endDate) => {
    setIsValidDatesFlag(dayjs(endDate).isValid());
    setEvent({ ...event, end: endDate });
  };

  const onNewTripDescriptionChange = (desc: string) => {
    setEvent({ ...event, description: desc });
  };

  const isBtnDisabled =
    event.title === null || event.title.length === 0 || !isValidDates;

  const onEditEvent = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();
      setLoading(true);

      const accessIds = await editEvent({
        username,
        event,
      });

      if (!accessIds) {
        navigate(-1);
      } else {
        navigate(eventMembersPageUrl({ eventUid: accessIds.eventUid }));
      }
    } catch (error) {
      console.error("event edit error", error);
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
          <TitleH1>
            {t(`pages.new_event.${event.eventUid ? "edit_title" : "title"}`)}
          </TitleH1>
        </div>
        <div className="mb-4">
          <Input
            label={t("pages.new_event.event_name")}
            value={event.title}
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
                value={
                  event.start ? convertDateToYYYYMMDDWithDash(event.start) : ""
                }
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
                value={
                  event.end ? convertDateToYYYYMMDDWithDash(event.end) : ""
                }
                min={convertDateToYYYYMMDDWithDash(event.start || "")}
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
            value={event.description}
          />
        </div>
      </div>
    </form>
  );

  const pageFooter = (
    <ActionPanel
      primaryButtonText={t(`buttons.${event.eventUid ? "done" : "create"}`)}
      primaryButtonType="submit"
      primaryButtonDisabled={isBtnDisabled}
      onPrimaryButtonClick={(e) => {
        void onEditEvent(e);
      }}
    />
  );

  useEffect(() => {
    if (routeData) {
      void routeData.data.then((d) => {
        setEvent(d.event);
      });
    }
  }, [routeData]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Await
        resolve={routeData?.data}
        errorElement={<p>Error event edit page loading</p>}
      >
        <PageWrapper
          pageContent={pageMainContent}
          pageFooter={pageFooter}
          verticalTopPageContent
        />
      </Await>
    </React.Suspense>
  );
};
