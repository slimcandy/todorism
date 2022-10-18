import React from "react";
import { IRecommendationListPointEditProps } from "./RecommendedListPointEditProps";
import { IListPoint } from "../../../../../interfaces";
import { ListPointEdit } from "../../ListPointEdit/ListPointEdit";

import { ILocaleStorageEvent } from "../../../../../utils/localStorage";

import {
  replaceListPointToLocalStorageRecommendedListPoints,
  pushListPointToLocalStorageRecommendedListPoints,
} from "../storages";

export const RecommendedListPointEdit = (
  props: IRecommendationListPointEditProps
) => {
  const { listPoint, listPointIndex, onFinish } = props;

  const isCreationMode = listPointIndex === undefined;

  const changeListPoints = (
    event: ILocaleStorageEvent,
    editedListPoint: IListPoint
  ) => {
    if (event) {
      if (isCreationMode) {
        pushListPointToLocalStorageRecommendedListPoints(editedListPoint);
      } else {
        replaceListPointToLocalStorageRecommendedListPoints(
          listPointIndex,
          editedListPoint
        );
      }

      onFinish();
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
