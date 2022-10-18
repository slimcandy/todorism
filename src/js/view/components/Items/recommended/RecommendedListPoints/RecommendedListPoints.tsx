import React, { useState } from "react";

import {
  getRecommendedListPointsFromLocalStorage,
  deleteListPointFromLocalStorageRecommendedListPoints,
} from "../storages";
import { PrivateListPointItem } from "../../private/PrivateListPointItem/PrivateListPointItem";
import { IListPoint } from "../../../../../interfaces";
import { ListPointsWrapper } from "../../ListPointsWrapper/ListPointsWrapper";
import { RecommendedListPointEdit } from "../RecommendedListPointEdit/RecommendedListPointEdit";
import { Modal, RemoveListPointModal } from "../../../../elements";
import { getEmptyListPoint } from "../../../../../utils";

export const RecommendedListPoints = () => {
  const [listPoints, setListPoints] = useState<IListPoint[]>(
    getRecommendedListPointsFromLocalStorage()
  );

  const [selectedListPoint, setSelectedListPoint] = useState<IListPoint>();

  const [selectedListPointIndex, setSelectedListPointIndex] =
    useState<number>();

  const [modalContent, setModalContent] = useState<JSX.Element>();

  const isEmptyListPoint = () => listPoints.length === 0;

  const updateListPoints = () => {
    setListPoints(getRecommendedListPointsFromLocalStorage());
  };

  const selectListPoint = (
    listPointIndex: number | undefined,
    listPoint: IListPoint | undefined
  ) => {
    setSelectedListPointIndex(listPointIndex);
    setSelectedListPoint(listPoint);
  };

  const clearSelectedListPoint = () => {
    selectListPoint(undefined, undefined);
  };

  const removeListPoint = (listPointIndex: number) => {
    deleteListPointFromLocalStorageRecommendedListPoints(listPointIndex);
    updateListPoints();
  };

  const editListPoint = () => {
    clearSelectedListPoint();
    updateListPoints();
  };

  const addRemoveListPointModalContent = (
    listPointIndex: number,
    listPointName: string
  ) =>
    setModalContent(
      <RemoveListPointModal
        listPointName={listPointName}
        onRemoveClick={() => removeListPoint(listPointIndex)}
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
              listPoints.map((listPoint, index) => (
                <PrivateListPointItem
                  listPoint={listPoint}
                  onEdit={() => selectListPoint(index, listPoint)}
                  onRemove={() =>
                    addRemoveListPointModalContent(index, listPoint.item.name)
                  }
                />
              ))}
          </div>
        </ListPointsWrapper>
      ) : (
        <RecommendedListPointEdit
          listPoint={selectedListPoint}
          listPointIndex={selectedListPointIndex}
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
