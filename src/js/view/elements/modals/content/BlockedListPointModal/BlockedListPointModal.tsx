import React from "react";
import { useTranslation } from "react-i18next";
import { IBlockedListPointModal } from "./BlockedListPointModalProps";
import { ActionPanel } from "../../../ActionPanel/ActionPanel";
import { ModalTitle } from "../../Modal/ModalTitle/ModalTitle";
import { ModalDescription } from "../../Modal/ModalDescription/ModalDescription";

export const BlockedListPointModal = (props: IBlockedListPointModal) => {
  const { onClick } = props;

  const { t } = useTranslation();

  return (
    <>
      <ModalTitle title={t("modals.blocked_list_point.title")} />

      <ModalDescription
        description={t("modals.blocked_list_point.description")}
      />

      <ActionPanel
        primaryButtonText={t("modals.blocked_list_point.primary_button_text")}
        onPrimaryButtonClick={() => onClick()}
      />
    </>
  );
};
