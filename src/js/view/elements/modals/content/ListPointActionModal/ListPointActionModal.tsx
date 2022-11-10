import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IListPointActionModal } from "./ListPointActionModalProps";
import { ModalListItem } from "../../Modal/ModalListItem/ModalListItem";
import { IModalListItemProps } from "../../Modal/ModalListItem/ModalListItemProps";
import { EditIcon, DeleteIcon } from "../../../../icons";
import { RemoveListPointModal } from "../RemoveListPointModal/RemoveListPointModal";

export const ListPointActionModal = (props: IListPointActionModal) => {
  const { listPointName, onEditClick, onRemoveClick } = props;

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
            <ModalListItem {...listPointAction} />
          ))}
        </div>
      )}

      {showRemoveListPointModal && (
        <RemoveListPointModal
          listPointName={listPointName}
          onRemoveClick={onRemoveClick}
          onCancelClick={() => {
            setShowRemoveListPointModal(false);
          }}
        />
      )}
    </>
  );
};
