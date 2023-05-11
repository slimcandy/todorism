import React from "react";
import { IEventActionModal } from "./EventActionModalProps";
import { ModalListItem } from "../../../Modal/ModalListItem/ModalListItem";
import { IModalListItemProps } from "../../../Modal/ModalListItem/ModalListItemProps";

import { GetEventActions } from "../actions";

export const EventActionModal = (props: IEventActionModal) => {
  const {
    onShareEvent,
    onLeaveEvent,
    onEditEvent,
    onEditMembers,
    onLogoutClick,
  } = props;

  const eventActions = GetEventActions({
    onShareEvent,
    onLeaveEvent,
    onEditEvent,
    onEditMembers,
    onLogoutClick,
  });

  const EventActions: IModalListItemProps[] = [
    eventActions.share,
    eventActions.leave,
    eventActions.editEvent,
    eventActions.members,
    eventActions.logout,
  ];

  return (
    <div className="flex flex-col items-start">
      {EventActions.map((eventAction) => (
        <ModalListItem key={eventAction.title} {...eventAction} />
      ))}
    </div>
  );
};
