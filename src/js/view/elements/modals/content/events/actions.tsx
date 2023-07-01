import React from "react";
import { useTranslation } from "react-i18next";
import {
  DeleteIcon,
  EditIcon,
  LogoutIcon,
  MembersIcon,
  ShareIcon,
} from "../../../../icons";

export const GetEventActions = ({
  onShareEvent,
  onLeaveEvent,
  onEditEvent,
  onEditMembers,
  onLogoutClick,
}: {
  onShareEvent: () => void;
  onLeaveEvent: () => void;
  onEditEvent: () => void;
  onEditMembers: () => void;
  onLogoutClick: () => void;
}) => {
  const { t } = useTranslation();

  return {
    share: {
      title: t("buttons.share"),
      icon: <ShareIcon size={16} />,
      onClick: () => {
        onShareEvent();
      },
    },
    leave: {
      title: t("modals.event_action.leave"),
      icon: <DeleteIcon size={16} />,
      disabled: true,
      onClick: () => {
        onLeaveEvent();
      },
    },
    editEvent: {
      title: t("modals.event_action.edit_event"),
      icon: <EditIcon size={16} />,
      onClick: () => {
        onEditEvent();
      },
    },
    members: {
      title: t("modals.event_action.members"),
      icon: <MembersIcon size={16} />,
      onClick: () => {
        onEditMembers();
      },
    },
    logout: {
      title: t("modals.event_action.logout"),
      icon: <LogoutIcon size={16} />,
      onClick: () => {
        onLogoutClick();
      },
    },
  };
};
