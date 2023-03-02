import React, { useEffect, useState } from "react";
import { TakenListPointItem } from "../TakenListPointItem/TakenListPointItem";
import { ListPointsWrapper } from "../../ListPointsWrapper/ListPointsWrapper";
import { convertITakenListPointFromBEToITakenListPoint } from "../../../../../utils";
import {
  getTakenListPoints,
  changeIsTakenStatus,
} from "../../../../../api_clients";
import { useLoading } from "../../../../../hooks";
import {
  ITakenListPoint,
  ITakenListPointFromBE,
} from "../../../../../interfaces";
import { ITakenListPointsProps } from "./TakenListPointsProps";

export const TakenListPoints = (props: ITakenListPointsProps) => {
  const { accessIds } = props;

  const [listPoints, setListPoints] = useState<ITakenListPoint[]>([]);

  const { setLoading } = useLoading();

  const getListPoints = async () => {
    try {
      setLoading(true);

      const response = await getTakenListPoints(accessIds);
      const listPointsFromBE = (
        (await response.json()) as ITakenListPointFromBE[]
      ).map((listPoint) =>
        convertITakenListPointFromBEToITakenListPoint(listPoint)
      );

      setListPoints(listPointsFromBE);
    } finally {
      setLoading(false);
    }
  };

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

  const listPointItem = (listPoint: ITakenListPoint) => (
    <TakenListPointItem
      listPoint={listPoint}
      key={listPoint.pointUid}
      onCheck={() => {
        void onChangeIsTakenStatus(listPoint);
      }}
    />
  );

  useEffect(() => {
    if (listPoints.length === 0) {
      void getListPoints();
    }
  }, []);

  return (
    <ListPointsWrapper
      listPoints={listPoints}
      listPointItem={listPointItem}
      customActionPanel={<div />}
      disableCategoryAddButton
    />
  );
};
