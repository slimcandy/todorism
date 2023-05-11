import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IEventsListActionModal } from "./EventsListActionModalProps";
import { ModalListItem } from "../../../Modal/ModalListItem/ModalListItem";
import { IModalListItemProps } from "../../../Modal/ModalListItem/ModalListItemProps";

import { GetEventActions } from "../actions";
import { DeleteIcon } from "../../../../../icons";
import { RemoveListItemModal } from "../../RemoveListItemModal/RemoveListItemModal";

export const EventsListActionModal = (props: IEventsListActionModal) => {
  const {
    eventTitle,
    onShareEvent,
    onLeaveEvent,
    onEditEvent,
    onEditMembers,
    onLogoutClick,
    onDeleteEvent,
  } = props;

  const { t } = useTranslation();

  const [showRemoveEventModal, setShowRemoveEventModal] =
    useState<boolean>(false);

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
    {
      title: t("modals.events_list_action.deleteEvent"),
      icon: <DeleteIcon size={16} />,
      onClick: () => {
        setShowRemoveEventModal(true);
      },
    },
  ];

  return (
    <>
      {!showRemoveEventModal && (
        <div className="flex flex-col items-start">
          {EventActions.map((eventAction) => (
            <ModalListItem key={eventAction.title} {...eventAction} />
          ))}
        </div>
      )}

      {showRemoveEventModal && (
        <RemoveListItemModal
          title={t("modals.events_list_action.title", { eventTitle })}
          onRemoveClick={onDeleteEvent}
          onCancelClick={() => {
            setShowRemoveEventModal(false);
          }}
        />
      )}
    </>
  );
};
