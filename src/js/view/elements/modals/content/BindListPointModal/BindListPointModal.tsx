import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IBindListPointModal } from "./BindListPointModalProps";
import { ActionPanel } from "../../../ActionPanel/ActionPanel";
import { ModalTitle } from "../../Modal/ModalTitle/ModalTitle";
import { Counter } from "../../../Counter/Counter";

export const BindListPointModal = (props: IBindListPointModal) => {
  const { listPoint, countItemTaken, onClick } = props;

  const { t } = useTranslation();

  const [countItem, setCountItem] = useState<string>(countItemTaken || "0");

  return (
    <>
      <ModalTitle
        title={`${listPoint.item.name} (${t(
          `list_point.short_units.${listPoint.unit}`
        )})`}
      />

      <Counter positive value={countItem} onChange={setCountItem} />

      <ActionPanel
        primaryButtonText={t("buttons.done")}
        onPrimaryButtonClick={() => onClick(countItem)}
      />
    </>
  );
};
