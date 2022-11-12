import React from "react";
import { useTranslation } from "react-i18next";
import { IListPointActionModal } from "./EventActionModalProps";
import { ModalListItem } from "../../Modal/ModalListItem/ModalListItem";
import { IModalListItemProps } from "../../Modal/ModalListItem/ModalListItemProps";
import {
  EditIcon,
  DeleteIcon,
  ShareIcon,
  MembersIcon,
  LogoutIcon,
} from "../../../../icons";

export const EventActionModal = (props: IListPointActionModal) => {
  const { onShareClick, onLogoutClick } = props;

  const { t } = useTranslation();

  const EventActions: IModalListItemProps[] = [
    {
      title: t("buttons.share"),
      icon: <ShareIcon size={16} />,
      onClick: () => {
        onShareClick();
      },
    },
    {
      title: t("modals.event_action.leave"),
      icon: <DeleteIcon size={16} />,
      disabled: true,
      onClick: () => {},
    },
    {
      title: t("modals.event_action.edit_event"),
      icon: <EditIcon size={16} />,
      disabled: true,
      onClick: () => {},
    },
    {
      title: t("modals.event_action.members"),
      icon: <MembersIcon size={16} />,
      disabled: true,
      onClick: () => {},
    },
    {
      title: t("modals.event_action.logout"),
      icon: <LogoutIcon size={16} />,
      onClick: () => {
        onLogoutClick();
      },
    },
  ];

  return (
    <div className="flex flex-col items-start">
      {EventActions.map((eventAction) => (
        <ModalListItem {...eventAction} />
      ))}
    </div>
  );
};
