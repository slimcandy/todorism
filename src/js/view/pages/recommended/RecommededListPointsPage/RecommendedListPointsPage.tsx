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

export const RecommendedListPointsPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { eventUid = "" } = useParams();

  const [listPoints, setListPoints] = useState<IListPoint[]>(
    getRecommendedListPointsFromLocalStorage()
  );

  const [modalContent, setModalContent] = useState<JSX.Element>();

  const sharePageLink = `/event/${eventUid}/share?status=new`;

  const goToListPointEditPage = (listPoint: IListPoint, index?: number) => {
    saveCurrentListPointInLocalStorage(listPoint);
    navigate(index ? `item/${index}` : "item");
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
    <div className="flex flex-col gap-y-3">
      <TitleH1>{t("pages.recommended.title")}</TitleH1>
      <TextBodyStandard>{t("pages.recommended.description")}</TextBodyStandard>
    </div>
  );

  const footer = (
    <ActionPanel
      sticky
      primaryButtonText={t("list_point.add_item")}
      onPrimaryButtonClick={() => goToListPointEditPage(getEmptyListPoint())}
      secondaryButtonText={`> ${t("buttons.next")}`}
      onSecondaryButtonClick={() => navigate(sharePageLink)}
    />
  );

  const listPointItem = (listPoint: IListPoint, index = 0) => (
    <PrivateListPointItem
      key={listPoint.item.name}
      listPoint={listPoint}
      onEdit={() => goToListPointEditPage(listPoint, index)}
      onRemove={() =>
        addRemoveListPointModalContent(index, listPoint.item.name)
      }
    />
  );

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
