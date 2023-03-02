import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  TGroupedListPoints,
  IListPointsWrapperProps,
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
import {
  ICommonListPoint,
  IListPoint,
  ITakenListPoint,
  LIST_POINT_CATEGORIES,
} from "../../../../interfaces";

export const ListPointsWrapper = <T,>(props: IListPointsWrapperProps<T>) => {
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

  const [groupedListPoints, setGroupedListPoints] = useState<
    TGroupedListPoints<T>
  >({});

  const [groupedListPointsAfterFilter, setGroupedListPointsAfterFilter] =
    useState<TGroupedListPoints<T>>();

  function isFish(
    pet: IListPoint[] | ITakenListPoint[]
  ): pet is ITakenListPoint[] {
    return (pet[0] as ITakenListPoint).point !== undefined;
  }

  const pppp = () => {
    if (isFish(listPoints)) {
      return listPoints;
    }
    return listPoints;
  };

  const updateGroupedListPoints = ({
    grouped,
    listPoint,
  }: {
    grouped: TGroupedListPoints<T>;
    listPoint: IListPoint | ITakenListPoint;
  }) => {
    const key = listPoint.point
      ? listPoint.point.item.tags[0]
      : listPoint.item.tags[0];
    const list = grouped[key];

    if (Array.isArray(list)) {
      return { ...grouped, [key]: [...list, listPoint] };
    }
    return { ...grouped, [key]: [listPoint] };
  };

  const applyFilter = (value?: string) => {
    if (value) {
      let grouped = {};

      const pp = pppp().reduce(
        (
          filteredListPoints: IListPoint[] | ITakenListPoint[],
          listPoint: IListPoint | ITakenListPoint
        ) => {
          const itemName = listPoint.point
            ? listPoint.point.item.name.toLowerCase()
            : listPoint.item.name.toLowerCase();

          if (itemName.indexOf(value.toLowerCase()) !== -1) {
            filteredListPoints.push(listPoint);
            grouped = updateGroupedListPoints({ grouped, listPoint });
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

  const initializeGroupedListPoints = (
    list: IListPoint[] | ITakenListPoint[]
  ) => {
    let grouped: TGroupedListPoints<T> = {};
    list.forEach((lp) => {
      grouped = updateGroupedListPoints({ grouped, listPoint: lp });
    });
    setGroupedListPoints(grouped);
    setGroupedListPointsAfterFilter(grouped);
  };

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
          Object.keys(groupedListPointsAfterFilter).map((groupName) => (
            <>
              <div className="flex mb-4 mt-6 items-center justify-between">
                <TextBodyStandard className="text-dark-2">
                  {t(`list_point.categories.${groupName}`)}
                </TextBodyStandard>

                {!disableCategoryAddButton && (
                  <ButtonTransparent
                    className="btn-xs"
                    onClick={() => onCreateListPoint(groupName)}
                  >
                    + Добавить
                  </ButtonTransparent>
                )}
              </div>

              <div>
                {groupedListPointsAfterFilter[groupName]?.map((tt, index) =>
                  listPointItem(tt, index)
                )}
              </div>
            </>
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
      onPrimaryButtonClick={() => onCreateListPoint()}
    />
  );

  useEffect(() => {
    if (listPoints.length > 0) {
      initializeGroupedListPoints(listPoints);
    }
  }, [listPoints]);

  return (
    <PageWrapper
      pageContent={pageMainContent}
      pageFooter={customActionPanel || pageFooter}
      verticalTopPageContent
    />
  );
};
