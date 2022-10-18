import React, { useEffect, useState } from "react";
import { CommonListPointItem } from "../CommonListPointItem/CommonListPointItem";
import { ListPointsWrapper } from "../../ListPointsWrapper/ListPointsWrapper";
import { convertICommonListPointFromBEToIListPoint } from "../../../../../utils";
import { getCurrentEventFromLocalStorage } from "../../../../../utils/localStorage";
import { getCommonListPoints } from "../../../../../api_clients";
import { useLoading } from "../../../../../hooks";
import {
  ICommonListPoint,
  ICommonListPointFromBE,
} from "../../../../../interfaces";
import { ListPointEditApiHandler } from "../../ListPointEditApiHandler/ListPointEditApiHandler";
import { Modal, RemoveListPointModal } from "../../../../elements";

export const CommonListPoints = () => {
  const [listPoints, setListPoints] = useState<ICommonListPoint[]>([]);

  const { setLoading } = useLoading();

  const [selectedListPoint, setSelectedListPoint] =
    useState<ICommonListPoint>();

  const [modalContent, setModalContent] = useState<JSX.Element>();

  const isEmptyListPoint = () => listPoints.length === 0;

  const event = getCurrentEventFromLocalStorage();

  const selectListPoint = (listPoint: ICommonListPoint | undefined) => {
    setSelectedListPoint(listPoint);
  };

  const clearSelectedListPoint = () => {
    selectListPoint(undefined);
  };

  const editListPoint = () => {
    clearSelectedListPoint();
  };

  const getListPoints = async () => {
    try {
      if (event) {
        setLoading(true);

        const response = await getCommonListPoints({
          tripUid: event.trip_uid,
        });
        const listPointsFromBE = (
          (await response.json()) as ICommonListPointFromBE[]
        ).map((listPoint) =>
          convertICommonListPointFromBEToIListPoint(listPoint)
        );

        setListPoints(listPointsFromBE);
      }
    } finally {
      setLoading(false);
    }
  };

  // const removeListPoint = async (listPoint: ICommonListPoint) => {
  //   try {
  //     if (event) {
  //       setLoading(true);
  //
  //       await removePrivateListPoint({
  //         tripUid: event.trip_uid,
  //         memberUid: event.member_uid,
  //         pointUid: listPoint.pointUid,
  //       });
  //
  //       clearSelectedListPoint();
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    if (listPoints.length === 0) {
      void getListPoints();
    }
  });

  const addRemoveListPointModalContent = (listPoint: ICommonListPoint) =>
    setModalContent(
      <RemoveListPointModal
        listPointName={listPoint.item.name}
        onRemoveClick={() => {}}
        onCancelClick={() => {}}
      />
    );

  return (
    <>
      {!selectedListPoint ? (
        <ListPointsWrapper
          isEmptyListPoints={isEmptyListPoint()}
          onCreateListPoint={() => {}}
        >
          <div className="flex flex-col w-full">
            {!isEmptyListPoint() &&
              listPoints.map((listPoint) => (
                <CommonListPointItem
                  key={listPoint.pointUid}
                  listPoint={listPoint}
                  onEdit={() => selectListPoint(listPoint)}
                  onRemove={() => addRemoveListPointModalContent(listPoint)}
                />
              ))}
          </div>
        </ListPointsWrapper>
      ) : (
        <ListPointEditApiHandler
          listPointType="private"
          listPoint={selectedListPoint}
          onFinish={editListPoint}
        />
      )}

      {modalContent && (
        <Modal
          onShow={() => setModalContent(undefined)}
          content={modalContent}
        />
      )}
    </>
  );
};
