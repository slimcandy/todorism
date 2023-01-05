import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IListPoint } from "../../../../interfaces";
import { ListPointEdit } from "../../../components/Items/ListPointEdit/ListPointEdit";

import {
  replaceListPointToLocalStorageRecommendedListPoints,
  pushListPointToLocalStorageRecommendedListPoints,
} from "../storages";
import {
  deleteCurrentListPointFromLocalStorage,
  getCurrentListPointFromLocalStorage,
} from "../../../../utils/localStorage";

export const RecommendedListPointEditPage = () => {
  const navigate = useNavigate();

  const { index } = useParams();

  const listPoint = getCurrentListPointFromLocalStorage<IListPoint>();

  const indexIsUndefined = index === undefined;

  const isCreationMode = indexIsUndefined;

  const changeListPoints = (editedListPoint: IListPoint) => {
    if (isCreationMode) {
      pushListPointToLocalStorageRecommendedListPoints(editedListPoint);
    } else if (!indexIsUndefined) {
      replaceListPointToLocalStorageRecommendedListPoints(
        Number(index),
        editedListPoint
      );
    }

    // back to listPoints page
    navigate(-1);
    deleteCurrentListPointFromLocalStorage();
  };

  return (
    listPoint && (
      <ListPointEdit
        listPoint={listPoint}
        isCreationMode={isCreationMode}
        onClick={changeListPoints}
      />
    )
  );
};
