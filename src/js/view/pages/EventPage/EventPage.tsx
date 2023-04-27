import React, { useEffect, useState } from "react";
import { useNavigate, useLoaderData, Await } from "react-router-dom";
import { BtnIcon, EventActionModal, Loader, TitleH1 } from "../../elements";
import { KebabIcon } from "../../icons";
import { EventListPointsTabs } from "../../components";
import { IAccessIds, IEvent } from "../../../interfaces";
import { TProvidedEvent } from "../../../../router/types";
import {
  editEventPageUrl,
  eventMembersPageUrl,
  shareEventPageUrl,
  eventWelcomePageUrl,
} from "../../../../router/constants";
import { saveCurrentEventInLocalStorage } from "../../../utils/localStorage";
import { useModal } from "../../../hooks";

export const EventPage = () => {
  const routeData = useLoaderData() as TProvidedEvent;

  const navigate = useNavigate();

  const modalContext = useModal();

  const [event, setEvent] = useState<IEvent>();

  const [accessIds, setAccessIds] = useState<IAccessIds>();

  const showEventActionModal = () => {
    const eventUid = event?.eventUid;

    if (eventUid) {
      modalContext.setContent({
        content: (
          <EventActionModal
            onShareEvent={() => navigate(shareEventPageUrl({ eventUid }))}
            onEditEvent={() => navigate(editEventPageUrl({ eventUid }))}
            onEditMembers={() => navigate(eventMembersPageUrl({ eventUid }))}
            onLeaveEvent={() => {}}
            onLogoutClick={() => navigate(eventWelcomePageUrl({ eventUid }))}
          />
        ),
        onClose: () => modalContext.setContent(undefined),
      });
    }
  };

  useEffect(() => {
    if (routeData) {
      void routeData.data.then((d) => {
        setEvent(d.event);
        setAccessIds(d.accessIds);
      });
    }
  }, [routeData]);

  useEffect(() => {
    if (event?.isNewEvent) {
      const updatedEvent = { ...event, isNewEvent: false };

      setEvent(updatedEvent);
      saveCurrentEventInLocalStorage(updatedEvent);
    }
  }, [event]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Await
        resolve={routeData?.data}
        errorElement={<p>Error event page loading</p>}
      >
        <div className="flex flex-col w-full gap-y-6">
          <div className="flex justify-between">
            <TitleH1>{event?.title}</TitleH1>
            <BtnIcon
              icon={<KebabIcon size={16} />}
              className="btn-sm"
              onClick={showEventActionModal}
            />
          </div>

          {accessIds && <EventListPointsTabs accessIds={accessIds} />}
        </div>
      </Await>
    </React.Suspense>
  );
};
