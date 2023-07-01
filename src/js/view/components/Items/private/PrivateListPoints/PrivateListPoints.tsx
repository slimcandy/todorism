import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PrivateListPointItem } from "../PrivateListPointItem/PrivateListPointItem";
import { ListPointsWrapper } from "../../ListPointsWrapper/ListPointsWrapper";
import {
  convertIPrivateListPointFromBEToIListPoint,
  getEmptyListPoint,
} from "../../../../../utils";
import {
  getPrivateListPoints,
  removePrivateListPoint,
} from "../../../../../api_clients";
import { useLoading, useModal } from "../../../../../hooks";
import { IListPoint, IPrivateListPointFromBE } from "../../../../../interfaces";
import { RemoveListItemModal } from "../../../../elements";
import { IPrivateListPointsProps } from "./PrivateListPointsProps";
import { saveCurrentListPointInLocalStorage } from "../../../../../utils/localStorage";
import {
  eventCreateListPointPageUrl,
  eventEditListPointPageUrl,
} from "../../../../../../router/constants";

export const PrivateListPoints = (props: IPrivateListPointsProps) => {
  const { accessIds } = props;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [listPoints, setListPoints] = useState<IListPoint[]>([]);

  const { setLoading } = useLoading();

  const modalContext = useModal();

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
          }),
      { state: { listPointType: "private", listPointUid: listPoint.pointUid } }
    );
  };

  const getListPoints = useCallback(async () => {
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
  }, [accessIds, setLoading]);

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

  const closeModal = () => {
    modalContext.setContent(undefined);
  };

  const showRemoveListPointModal = (listPoint: IListPoint) =>
    modalContext.setContent({
      content: (
        <RemoveListItemModal
          title={t("modals.remove_list_point.title", {
            listPointName: listPoint.item.name,
          })}
          onRemoveClick={() => {
            closeModal();
            void removeListPoint(listPoint);
          }}
          onCancelClick={closeModal}
        />
      ),
      onClose: closeModal,
    });

  const listPointItem = (index: number) => {
    const listPoint = listPoints[index];

    return (
      listPoint && (
        <PrivateListPointItem
          listPoint={listPoint}
          key={listPoint.pointUid}
          onEdit={() => goToListPointEditPage(listPoint)}
          onRemove={() => showRemoveListPointModal(listPoint)}
        />
      )
    );
  };

  useEffect(() => {
    if (listPoints.length === 0) {
      void getListPoints();
    }
  }, [getListPoints, listPoints.length]);

  return (
    <ListPointsWrapper
      listPoints={listPoints}
      listPointItem={listPointItem}
      onCreateListPoint={() => goToListPointEditPage(getEmptyListPoint())}
    />
  );
};
