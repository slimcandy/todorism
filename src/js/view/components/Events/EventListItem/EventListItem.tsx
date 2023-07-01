import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BtnIcon,
  EventsListActionModal,
  Indicator,
  TextBodySmall,
  TitleH3,
} from "../../../elements";
import { KebabIcon } from "../../../icons";
import {
  checkExpiredDate,
  convertDateToDDMMYYYYWithDots,
} from "../../../../utils";
import {
  editEventPageUrl,
  eventMembersPageUrl,
  eventWelcomePageUrl,
  shareEventPageUrl,
} from "../../../../../router/constants";
import { useModal } from "../../../../hooks";
import { IEventListItemProps } from "./EventListItemProps";

export const EventListItem = (props: IEventListItemProps) => {
  const { eventUid, title, description, start, end, onDeleteEvent } = props;
  const navigate = useNavigate();
  const modalContext = useModal();

  let dateStart;
  let dateEnd;
  if (start) {
    dateStart = convertDateToDDMMYYYYWithDots(start);
  }
  if (end) {
    dateEnd = convertDateToDDMMYYYYWithDots(end);
  }

  const closeModal = () => {
    modalContext.setContent(undefined);
  };

  const deleteEvent = () => {
    onDeleteEvent(eventUid);
    closeModal();
  };

  const onButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    const state = { fromEventsListModal: true };

    modalContext.setContent({
      content: (
        <EventsListActionModal
          eventTitle={title}
          onShareEvent={() =>
            navigate(shareEventPageUrl({ eventUid }), { state })
          }
          onEditEvent={() =>
            navigate(editEventPageUrl({ eventUid }), { state })
          }
          onEditMembers={() =>
            navigate(eventMembersPageUrl({ eventUid }), { state })
          }
          onLeaveEvent={() => {}}
          onLogoutClick={() =>
            navigate(eventWelcomePageUrl({ eventUid }), { state })
          }
          onDeleteEvent={() => deleteEvent()}
        />
      ),
      onClose: closeModal,
    });
  };

  return (
    <div id={eventUid} className="flex items-center px-2 py-4 cursor-pointer">
      <div className="mr-3 w-full">
        <div className="mb-3">
          <TitleH3 className="mb-1">{title}</TitleH3>
          <TextBodySmall className="text-dark-3 mt-1">
            {description || ""}
          </TextBodySmall>
        </div>

        {dateStart && (
          <div>
            <Indicator isActive={!checkExpiredDate(start as string)} />
            <TextBodySmall className="ml-1">{dateStart || ""}</TextBodySmall>
            {dateEnd && (
              <TextBodySmall className="ml-1">{`- ${
                dateEnd || ""
              }`}</TextBodySmall>
            )}
          </div>
        )}
      </div>

      <BtnIcon
        icon={<KebabIcon size={16} />}
        className="btn-sm"
        onClick={(e) => onButtonClick(e)}
      />
    </div>
  );
};
