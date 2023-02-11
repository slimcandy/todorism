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
  ITakenListPoint,
  ITakenListPointFromBE,
} from "../../../../../interfaces";
import { ITakenListPointsProps } from "./TakenListPointsProps";

export const TakenListPoints = (props: ITakenListPointsProps) => {
  const { accessIds } = props;

  const [listPoints, setListPoints] = useState<ITakenListPoint[]>([]);

  const { setLoading } = useLoading();

  const getListPoints = useCallback(async () => {
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
  }, [accessIds, setLoading]);

  const onChangeIsTakenStatus = async (listPoint: ITakenListPoint) => {
    setLoading(true);
    await changeIsTakenStatus({
      ...accessIds,
      isTaken: listPoint.isTaken,
      pointUid: listPoint.pointUid,
    });

    await getListPoints();
    setLoading(false);
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
  }, [getListPoints, listPoints.length]);

  return (
    <ListPointsWrapper
      listPoints={listPoints}
      listPointItem={listPointItem}
      customActionPanel={<div />}
    />
  );
};
