import React from "react";
import { IRecommendationListPointEditProps } from "./RecommendedListPointEditProps";
import { IListPoint } from "../../../../../interfaces";
import { ListPointEdit } from "../../ListPointEdit/ListPointEdit";

import {
  replaceListPointToLocalStorageRecommendedListPoints,
  pushListPointToLocalStorageRecommendedListPoints,
} from "../storages";

export const RecommendedListPointEdit = (
  props: IRecommendationListPointEditProps
) => {
  const { listPoint, listPointIndex } = props;

  const isCreationMode = listPointIndex === undefined;

  const changeListPoints = (editedListPoint: IListPoint) => {
    if (isCreationMode) {
      pushListPointToLocalStorageRecommendedListPoints(editedListPoint);
    } else {
      replaceListPointToLocalStorageRecommendedListPoints(
        listPointIndex,
        editedListPoint
      );
    }
  };

  return (
    <ListPointEdit
      listPoint={listPoint}
      isCreationMode={isCreationMode}
      onClick={changeListPoints}
    />
  );
};
