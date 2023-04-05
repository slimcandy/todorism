import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { saveCurrentListPointInLocalStorage } from "../../../../utils/localStorage";
import {
  ActionPanel,
  Modal,
  RemoveListPointModal,
  TextBodyStandard,
  TitleH1,
} from "../../../elements";
import { IListPoint } from "../../../../interfaces";
import {
  deleteListPointFromLocalStorageRecommendedListPoints,
  getRecommendedListPointsFromLocalStorage,
} from "../storages";
import { ListPointsWrapper } from "../../../components/Items/ListPointsWrapper/ListPointsWrapper";
import { getEmptyListPoint } from "../../../../utils";
import { PrivateListPointItem } from "../../../components/Items/private/PrivateListPointItem/PrivateListPointItem";
import {
  eventCreateRecommendedListPointPageUrl,
  eventEditRecommendedListPointPageUrl,
  shareEventPageUrl,
} from "../../../../../router/constants";

export const RecommendedListPointsPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { eventUid = "" } = useParams();

  const [listPoints, setListPoints] = useState<IListPoint[]>(
    getRecommendedListPointsFromLocalStorage()
  );

  const [modalContent, setModalContent] = useState<JSX.Element>();

  const goToListPointEditPage = (listPoint: IListPoint) => {
    const index = listPoints.findIndex(
      (lp) => lp.item.name === listPoint.item.name
    );

    saveCurrentListPointInLocalStorage(listPoint);
    navigate(
      index !== -1
        ? eventEditRecommendedListPointPageUrl({ eventUid, index })
        : eventCreateRecommendedListPointPageUrl({ eventUid }),
      { state: { listPointIndex: index } }
    );
  };

  const updateListPoints = () => {
    setListPoints(getRecommendedListPointsFromLocalStorage());
  };

  const removeListPoint = (listPointIndex: number) => {
    deleteListPointFromLocalStorageRecommendedListPoints(listPointIndex);
    updateListPoints();
    setModalContent(undefined);
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

  const title = (
    <div className="flex flex-col">
      <TitleH1>{t("pages.recommended.title")}</TitleH1>
      <TextBodyStandard className="my-3">
        {t("pages.recommended.description")}
      </TextBodyStandard>
    </div>
  );

  const footer = (
    <ActionPanel
      sticky
      primaryButtonText={t("list_point.add_item")}
      onPrimaryButtonClick={() => goToListPointEditPage(getEmptyListPoint())}
      secondaryButtonText={`> ${t("buttons.next")}`}
      onSecondaryButtonClick={() => navigate(shareEventPageUrl({ eventUid }))}
    />
  );

  const listPointItem = (index: number) => {
    const listPoint = listPoints[index];

    return (
      listPoint && (
        <PrivateListPointItem
          key={listPoint.item.name}
          listPoint={listPoint}
          onEdit={() => goToListPointEditPage(listPoint)}
          onRemove={() =>
            addRemoveListPointModalContent(
              listPoints.findIndex(
                (lp) => lp.item.name === listPoint.item.name
              ),
              listPoint.item.name
            )
          }
        />
      )
    );
  };

  return (
    <>
      <ListPointsWrapper
        listPoints={listPoints}
        listPointItem={listPointItem}
        title={title}
        customActionPanel={footer}
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
