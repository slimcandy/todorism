import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IListPointActionModal } from "./ListPointActionModalProps";
import { ModalListItem } from "../../Modal/ModalListItem/ModalListItem";
import { IModalListItemProps } from "../../Modal/ModalListItem/ModalListItemProps";
import { DeleteIcon, EditIcon } from "../../../../icons";
import { RemoveListItemModal } from "../RemoveListItemModal/RemoveListItemModal";

export const ListPointActionModal = (props: IListPointActionModal) => {
  const {
    listPointName,
    showDeletionWarningMessage = false,
    onEditClick,
    onRemoveClick,
  } = props;

  const { t } = useTranslation();

  const [showRemoveListPointModal, setShowRemoveListPointModal] =
    useState<boolean>(false);

  const listPointActions: IModalListItemProps[] = [
    {
      title: t("buttons.delete"),
      icon: <DeleteIcon size={16} />,
      onClick: () => {
        setShowRemoveListPointModal(true);
      },
    },
    {
      title: t("buttons.edit"),
      icon: <EditIcon size={16} />,
      onClick: () => {
        onEditClick();
      },
    },
  ];

  return (
    <>
      {!showRemoveListPointModal && (
        <div className="flex flex-col items-start">
          {listPointActions.map((listPointAction) => (
            <ModalListItem key={listPointAction.title} {...listPointAction} />
          ))}
        </div>
      )}

      {showRemoveListPointModal && (
        <RemoveListItemModal
          title={t("modals.remove_list_point.title", { listPointName })}
          description={
            showDeletionWarningMessage ? t("modals.warning") : undefined
          }
          onRemoveClick={onRemoveClick}
          onCancelClick={() => {
            setShowRemoveListPointModal(false);
          }}
        />
      )}
    </>
  );
};
