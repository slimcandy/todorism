import React from "react";
import { useTranslation } from "react-i18next";
import { IRemoveListPointModal } from "./RemoveListPointModalProps";
import { ActionPanel } from "../../../ActionPanel/ActionPanel";
import { ModalTitle } from "../../Modal/ModalTitle/ModalTitle";
import { ModalDescription } from "../../Modal/ModalDescription/ModalDescription";

export const RemoveListPointModal = (props: IRemoveListPointModal) => {
  const { listPointName, onRemoveClick, onCancelClick } = props;

  const { t } = useTranslation();

  return (
    <>
      <ModalTitle
        title={t("modals.remove_list_point.title", { listPointName })}
      />

      <ModalDescription description={t("modals.warning")} />

      <ActionPanel
        primaryButtonText={t("buttons.delete")}
        onPrimaryButtonClick={() => onRemoveClick()}
        secondaryButtonText={t("buttons.cancel")}
        onSecondaryButtonClick={() => onCancelClick()}
      />
    </>
  );
};
