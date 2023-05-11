import React from "react";
import { useTranslation } from "react-i18next";
import { IRemoveListItemModal } from "./RemoveListItemModalProps";
import { ActionPanel } from "../../../ActionPanel/ActionPanel";
import { ModalTitle } from "../../Modal/ModalTitle/ModalTitle";
import { ModalDescription } from "../../Modal/ModalDescription/ModalDescription";

export const RemoveListItemModal = (props: IRemoveListItemModal) => {
  const { title, description, onRemoveClick, onCancelClick } = props;

  const { t } = useTranslation();

  return (
    <>
      <ModalTitle title={title} />

      {description && <ModalDescription description={t("modals.warning")} />}

      <ActionPanel
        primaryButtonText={t("buttons.delete")}
        onPrimaryButtonClick={() => onRemoveClick()}
        secondaryButtonText={t("buttons.cancel")}
        onSecondaryButtonClick={() => onCancelClick()}
      />
    </>
  );
};
