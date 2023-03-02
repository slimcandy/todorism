import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrivateListPointItem } from "../PrivateListPointItem/PrivateListPointItem";
import { ListPointsWrapper } from "../../ListPointsWrapper/ListPointsWrapper";
import {
  getEmptyListPoint,
  convertIPrivateListPointFromBEToIListPoint,
} from "../../../../../utils";
import {
  getPrivateListPoints,
  removePrivateListPoint,
} from "../../../../../api_clients";
import { useLoading } from "../../../../../hooks";
import { IListPoint, IPrivateListPointFromBE } from "../../../../../interfaces";
import { Modal, RemoveListPointModal } from "../../../../elements";
import { IPrivateListPointsProps } from "./PrivateListPointsProps";
import { saveCurrentListPointInLocalStorage } from "../../../../../utils/localStorage";
import {
  eventCreateListPointPageUrl,
  eventEditListPointPageUrl,
} from "../../../../../../router/constants";

export const PrivateListPoints = (props: IPrivateListPointsProps) => {
  const { accessIds } = props;

  const navigate = useNavigate();

  const [listPoints, setListPoints] = useState<IListPoint[]>([]);

  const { setLoading } = useLoading();

  const [modalContent, setModalContent] = useState<JSX.Element>();

  const goToListPointEditPage = (listPoint: IListPoint) => {
    saveCurrentListPointInLocalStorage(listPoint);
    navigate(
      listPoint.pointUid
        ? eventEditListPointPageUrl({
            eventUid: accessIds.eventUid,
            listPointUid: listPoint.pointUid,
          })
        : eventCreateListPointPageUrl({
            eventUid: accessIds.eventUid,
          })
    );
  };

  const getListPoints = async () => {
    try {
      setLoading(true);

      const response = await getPrivateListPoints(accessIds);
      const privateListPoints = (
        (await response.json()) as IPrivateListPointFromBE[]
      ).map((listPoint) =>
        convertIPrivateListPointFromBEToIListPoint(listPoint)
      );

      setListPoints(privateListPoints);
    } finally {
      setLoading(false);
    }
  };

  const removeListPoint = async (listPoint: IListPoint) => {
    try {
      setLoading(true);

      if (listPoint.pointUid) {
        await removePrivateListPoint({
          ...accessIds,
          pointUid: listPoint.pointUid,
        });

        await getListPoints();
      }
    } finally {
      setLoading(false);
    }
  };

  const showRemoveListPointModal = (listPoint: IListPoint) =>
    setModalContent(
      <RemoveListPointModal
        listPointName={listPoint.item.name}
        onRemoveClick={() => {
          setModalContent(undefined);
          void removeListPoint(listPoint);
        }}
        onCancelClick={() => {
          setModalContent(undefined);
        }}
      />
    );

  const listPointItem = (listPoint: IListPoint) => (
    <PrivateListPointItem
      listPoint={listPoint}
      key={listPoint.pointUid}
      onEdit={() => goToListPointEditPage(listPoint)}
      onRemove={() => showRemoveListPointModal(listPoint)}
    />
  );

  useEffect(() => {
    if (listPoints.length === 0) {
      void getListPoints();
    }
  }, [listPoints.length]);

  return (
    <>
      <ListPointsWrapper
        listPoints={listPoints}
        listPointItem={listPointItem}
        onCreateListPoint={() => goToListPointEditPage(getEmptyListPoint())}
      />

      {modalContent && (
        <Modal
          onShow={() => setModalContent(undefined)}
          content={modalContent}
        />
      )}
    </>
  );
};
