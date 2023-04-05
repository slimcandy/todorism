import React, { useCallback, useEffect, useState } from "react";
import { TakenListPointItem } from "../TakenListPointItem/TakenListPointItem";
import { ListPointsWrapper } from "../../ListPointsWrapper/ListPointsWrapper";
import { convertITakenListPointFromBEToITakenListPoint } from "../../../../../utils";
import {
  getTakenListPoints,
  changeIsTakenStatus,
} from "../../../../../api_clients";
import { useLoading } from "../../../../../hooks";
import {
  IListPoint,
  ITakenListPoint,
  ITakenListPointFromBE,
} from "../../../../../interfaces";
import { ITakenListPointsProps } from "./TakenListPointsProps";

export const TakenListPoints = (props: ITakenListPointsProps) => {
  const { accessIds } = props;

  const [listPoints, setListPoints] = useState<ITakenListPoint[]>([]);

  const [items, setItems] = useState<IListPoint[]>([]);

  const { setLoading } = useLoading();

  const getListPoints = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getTakenListPoints(accessIds);
      const takenListPointsFromBE: ITakenListPoint[] = [];
      const listPointsFromBE: IListPoint[] = [];

      ((await response.json()) as ITakenListPointFromBE[]).forEach(
        (listPoint) => {
          const convertedListPoint =
            convertITakenListPointFromBEToITakenListPoint(listPoint);

          takenListPointsFromBE.push(convertedListPoint);
          listPointsFromBE.push(convertedListPoint.point);
        }
      );

      setListPoints(takenListPointsFromBE);
      setItems(listPointsFromBE);
    } finally {
      setLoading(false);
    }
  }, [accessIds, setLoading]);

  const onChangeIsTakenStatus = (listPoint: ITakenListPoint) => {
    const index = listPoints.findIndex(
      (lp) => lp.pointUid === listPoint.pointUid
    );

    if (index !== -1) {
      void changeIsTakenStatus({
        ...accessIds,
        isTaken: listPoint.isTaken,
        pointUid: listPoint.pointUid,
      });

      listPoints[index].isTaken = !listPoints[index].isTaken;
      setListPoints([...listPoints]);
    }
  };

  const listPointItem = (index: number) => {
    const listPoint = listPoints[index];

    return (
      <TakenListPointItem
        listPoint={listPoint}
        key={listPoint.pointUid}
        onCheck={() => {
          void onChangeIsTakenStatus(listPoint);
        }}
      />
    );
  };

  useEffect(() => {
    if (listPoints.length === 0) {
      void getListPoints();
    }
  }, [getListPoints, listPoints.length]);

  return (
    <ListPointsWrapper
      listPoints={items}
      listPointItem={listPointItem}
      customActionPanel={<div />}
      disableCategoryAddButton
    />
  );
};
