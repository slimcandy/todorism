import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  TGroupedListPoints,
  IListPointsWrapperProps,
  IGroupedListPointObject,
} from "./ListPointsWrapperProps";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import {
  ActionPanel,
  TextBodyStandard,
  TitleH1,
  ButtonTransparent,
} from "../../../elements";
import ShutterStock from "../../../../../assets/images/shutterstock.png";
import { useLoading } from "../../../../hooks";
import SearchBar from "../../SearchBar/SearchBar";
import { IListPoint, LIST_POINT_CATEGORIES } from "../../../../interfaces";

export const ListPointsWrapper = (props: IListPointsWrapperProps) => {
  const {
    listPointItem,
    listPoints,
    customActionPanel,
    onCreateListPoint,
    title,
    disableCategoryAddButton = false,
  } = props;

  const { t } = useTranslation();

  const { loading } = useLoading();

  const [groupedListPoints, setGroupedListPoints] =
    useState<TGroupedListPoints>({});

  const [groupedListPointsAfterFilter, setGroupedListPointsAfterFilter] =
    useState<TGroupedListPoints>();

  const updateGroupedListPoints = ({
    grouped,
    data,
  }: {
    grouped: TGroupedListPoints;
    data: IGroupedListPointObject;
  }) => {
    const tag = data.listPoint.item.tags[0];
    const list = grouped[tag];

    if (Array.isArray(list)) {
      return { ...grouped, [tag]: [...list, data] };
    }
    return { ...grouped, [tag]: [data] };
  };

  const applyFilter = (value?: string) => {
    if (value) {
      let grouped = {};

      listPoints.reduce(
        (
          filteredListPoints: IListPoint[],
          listPoint: IListPoint,
          index: number
        ) => {
          const itemName = listPoint.item.name.toLowerCase();

          if (itemName.indexOf(value.toLowerCase()) !== -1) {
            filteredListPoints.push(listPoint);
            grouped = updateGroupedListPoints({
              grouped,
              data: {
                listPoint,
                positionIndex: index,
              },
            });
          }

          return filteredListPoints;
        },
        []
      );
      setGroupedListPointsAfterFilter(grouped);
    } else {
      setGroupedListPointsAfterFilter(groupedListPoints);
    }
  };

  const initializeGroupedListPoints = useCallback((list: IListPoint[]) => {
    let grouped: TGroupedListPoints = {};
    list.forEach((listPoint, index: number) => {
      grouped = updateGroupedListPoints({
        grouped,
        data: {
          listPoint,
          positionIndex: index,
        },
      });
    });
    setGroupedListPoints(grouped);
    setGroupedListPointsAfterFilter(grouped);
  }, []);

  const noContent = (
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

  const listContent = (
    <div className="flex flex-col">
      <SearchBar onChange={applyFilter} placeholder="Поиск" />
      <div>
        {groupedListPointsAfterFilter &&
          (
            Object.keys(groupedListPointsAfterFilter) as LIST_POINT_CATEGORIES[]
          ).map((groupName) => (
            <div key={groupName}>
              <div className="flex mb-4 mt-6 items-center justify-between">
                <TextBodyStandard className="text-dark-2">
                  {t(`list_point.categories.${groupName}`)}
                </TextBodyStandard>

                {!disableCategoryAddButton && (
                  <ButtonTransparent
                    className="btn-xs"
                    onClick={() => onCreateListPoint?.(groupName)}
                  >
                    + Добавить
                  </ButtonTransparent>
                )}
              </div>

              <div>
                {groupedListPointsAfterFilter[groupName]?.map((data) =>
                  listPointItem(data.positionIndex)
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const pageMainContent = !loading ? (
    <div className="flex flex-col h-full w-full">
      {title}
      {listPoints.length > 0 ? listContent : noContent}
    </div>
  ) : (
    <div />
  );

  const pageFooter = (
    <ActionPanel
      sticky
      primaryButtonText={t("list_point.add_item")}
      onPrimaryButtonClick={() => onCreateListPoint?.()}
    />
  );

  useEffect(() => {
    if (listPoints.length > 0) {
      initializeGroupedListPoints(listPoints);
    }
  }, [initializeGroupedListPoints, listPoints]);

  return (
    <PageWrapper
      pageContent={pageMainContent}
      pageFooter={customActionPanel || pageFooter}
      verticalTopPageContent
    />
  );
};
