import React from "react";
import { useTranslation } from "react-i18next";
import { IMenuModal } from "./MenuModalProps";
import { ModalListItem } from "../../Modal/ModalListItem/ModalListItem";
import { IModalListItemProps } from "../../Modal/ModalListItem/ModalListItemProps";
import {
  // GearIcon,
  // FolderIcon,
  // ChatIcon,
  ChatQuestionIcon,
} from "../../../../icons";

export const MenuModal = (props: IMenuModal) => {
  const {
    // onSettingsClick,
    // onFavoriteItemsClick,
    // onFeedbackClick,
    onQuestionsClick,
  } = props;

  const { t } = useTranslation();

  const MenuActions: IModalListItemProps[] = [
    // {
    //   title: t("buttons.settings"),
    //   icon: <GearIcon size={16} />,
    //   onClick: () => {
    //     onSettingsClick();
    //   },
    // },
    // {
    //   title: t("buttons.favorite_items"),
    //   icon: <FolderIcon size={16} />,
    //   onClick: () => {
    //     onFavoriteItemsClick();
    //   },
    // },
    // {
    //   title: t("buttons.feedback_form"),
    //   icon: <ChatIcon size={16} />,
    //   onClick: () => {
    //     onFeedbackClick();
    //   },
    // },
    {
      title: t("buttons.faq"),
      icon: <ChatQuestionIcon size={16} />,
      onClick: () => {
        onQuestionsClick();
      },
    },
  ];

  return (
    <div className="flex flex-col items-start">
      {MenuActions.map((menuAction) => (
        <ModalListItem key={menuAction.title} {...menuAction} />
      ))}
    </div>
  );
};
