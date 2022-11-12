import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IListPointEditProps } from "./ListPointEditProps";
import { IListPoint } from "../../../../interfaces";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import { getEmptyListPoint } from "../../../../utils";

import { ActionPanel, TitleH1, ListPointEditForm } from "../../../elements";

export const ListPointEdit = (props: IListPointEditProps) => {
  const { listPoint, isCreationMode, onClick } = props;

  const { t } = useTranslation();

  const [localListPoint, setLocalListPoint] = useState<IListPoint>(
    listPoint || getEmptyListPoint()
  );

  const [disabledPrimaryButton, setDisabledPrimaryButton] = useState(true);

  const changeLocalListPoint = (updatedListPoint: IListPoint) => {
    setLocalListPoint(updatedListPoint);
  };

  const pageMainContent = (
    <div className="flex flex-col gap-y-3">
      <TitleH1>
        {isCreationMode ? t("list_point.add_item") : t("list_point.edit_item")}
      </TitleH1>
      <ListPointEditForm
        listPoint={localListPoint}
        onChange={changeLocalListPoint}
        onFullFill={(filled) => setDisabledPrimaryButton(!filled)}
      />
    </div>
  );

  const pageFooter = (
    <ActionPanel
      primaryButtonText={
        isCreationMode ? t("list_point.add_item") : t("buttons.done")
      }
      onPrimaryButtonClick={() => onClick(localListPoint)}
      primaryButtonDisabled={disabledPrimaryButton}
    />
  );

  return (
    <PageWrapper
      pageContent={pageMainContent}
      pageFooter={pageFooter}
      verticalTopPageContent
    />
  );
};
