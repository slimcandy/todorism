import React from "react";
import { useTranslation } from "react-i18next";
import { IListPointsWrapperProps } from "./ListPointsWrapperProps";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import { ActionPanel, TextBodyStandard, TitleH1 } from "../../../elements";
import ShutterStock from "../../../../../assets/images/shutterstock.png";
import { useLoading } from "../../../../hooks";

export const ListPointsWrapper = <T,>(props: IListPointsWrapperProps<T>) => {
  const {
    listPointItem,
    listPoints,
    customActionPanel,
    onCreateListPoint,
    title,
  } = props;

  const { t } = useTranslation();

  const { loading } = useLoading();

  const emptyBlock = (
    <div className="flex flex-col h-full items-center justify-center gap-y-6">
      <img
        src={ShutterStock}
        srcSet={`${ShutterStock} 1x, ${ShutterStock} 2x`}
        alt={t("pages.share.logo")}
        className="w-[200px] mb-8"
      />
      <TitleH1>{t("list_point.empty_list.title")}</TitleH1>
      <TextBodyStandard>{t("list_point.empty_list.action")}</TextBodyStandard>
    </div>
  );

  const pageMainContent = !loading ? (
    <div className="flex flex-col h-full w-full">
      {title}
      {listPoints.length > 0
        ? listPoints.map((lp, index) => listPointItem(lp, index))
        : emptyBlock}
    </div>
  ) : (
    <div />
  );

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
      pageFooter={customActionPanel || pageFooter}
      verticalTopPageContent
    />
  );
};
