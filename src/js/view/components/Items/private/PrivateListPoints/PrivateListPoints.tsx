import React, { useEffect, useState } from "react";
import { PrivateListPointItem } from "../PrivateListPointItem/PrivateListPointItem";
import { ListPointsWrapper } from "../../ListPointsWrapper/ListPointsWrapper";
import {
  getEmptyListPoint,
  convertIPrivateListPointFromBEToIListPoint,
} from "../../../../../utils";
import { getCurrentEventFromLocalStorage } from "../../../../../utils/localStorage";
import {
  getPrivateListPoints,
  removePrivateListPoint,
} from "../../../../../api_clients";
import { useLoading } from "../../../../../hooks";
import { IListPoint, IPrivateListPointFromBE } from "../../../../../interfaces";
import { ListPointEditApiHandler } from "../../ListPointEditApiHandler/ListPointEditApiHandler";
import { Modal, RemoveListPointModal } from "../../../../elements";

export const PrivateListPoints = () => {
  const [listPoints, setListPoints] = useState<IListPoint[]>([]);

  const { setLoading } = useLoading();

  const [selectedListPoint, setSelectedListPoint] = useState<IListPoint>();

  const [modalContent, setModalContent] = useState<JSX.Element>();

  const isEmptyListPoint = () => listPoints.length === 0;

  const event = getCurrentEventFromLocalStorage();

  const selectListPoint = (listPoint: IListPoint | undefined) => {
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

        const response = await getPrivateListPoints({
          tripUid: event.trip_uid,
          memberUid: event.member_uid,
        });
        const listPointsFromBE = (
          (await response.json()) as IPrivateListPointFromBE[]
        ).map((listPoint) =>
          convertIPrivateListPointFromBEToIListPoint(listPoint)
        );

        setListPoints(listPointsFromBE);
      }
    } finally {
      setLoading(false);
    }
  };

  const removeListPoint = async (listPoint: IListPoint) => {
    try {
      if (event) {
        setLoading(true);

        if (listPoint.pointUid) {
          await removePrivateListPoint({
            tripUid: event.trip_uid,
            memberUid: event.member_uid,
            pointUid: listPoint.pointUid,
          });
        }

        clearSelectedListPoint();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (listPoints.length === 0) {
      void getListPoints();
    }
  });

  const addRemoveListPointModalContent = (listPoint: IListPoint) =>
    setModalContent(
      <RemoveListPointModal
        listPointName={listPoint.item.name}
        onRemoveClick={() => {
          void removeListPoint(listPoint);
        }}
        onCancelClick={() => {}}
      />
    );

  return (
    <>
      {!selectedListPoint ? (
        <ListPointsWrapper
          isEmptyListPoints={isEmptyListPoint()}
          onCreateListPoint={() => setSelectedListPoint(getEmptyListPoint())}
        >
          <div className="flex flex-col w-full">
            {!isEmptyListPoint() &&
              listPoints.map((listPoint) => (
                <PrivateListPointItem
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
