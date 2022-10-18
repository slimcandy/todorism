import React from "react";
import { useTranslation } from "react-i18next";
import { IListPointsWrapperProps } from "./ListPointsWrapperProps";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import { ActionPanel } from "../../../elements";

export const ListPointsWrapper = (props: IListPointsWrapperProps) => {
  const { children, isEmptyListPoints = false, onCreateListPoint } = props;

  const { t } = useTranslation();

  const pageMainContent = !isEmptyListPoints ? children : <div>Ничего нет</div>;

  const pageFooter = (
    <ActionPanel
      sticky
      primaryButtonText={t("list_point.add_item")}
      onPrimaryButtonClick={onCreateListPoint}
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
