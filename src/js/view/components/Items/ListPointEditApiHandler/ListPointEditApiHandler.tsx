import React from "react";
import { IListPointEditApiHandler } from "./ListPointEditApiHandlerProps";
import { IListPoint } from "../../../../interfaces";
import { ListPointEdit } from "../ListPointEdit/ListPointEdit";

import {
  ILocaleStorageEvent,
  saveLoadingStateInLocalStorage,
} from "../../../../utils/localStorage";
import {
  editPrivateListPoint,
  editCommonListPoint,
} from "../../../../api_clients";

export const ListPointEditApiHandler = (props: IListPointEditApiHandler) => {
  const { listPoint, listPointIndex, listPointType } = props;

  const isCreationMode = listPointIndex === undefined;

  const changeListPoints = async (
    event: ILocaleStorageEvent,
    editedListPoint: IListPoint
  ) => {
    try {
      if (event) {
        saveLoadingStateInLocalStorage(true);

        const mode: "add" | "edit" = isCreationMode ? "add" : "edit";
        const listPointData = {
          mode,
          tripUid: event.trip_uid,
          listPoint: editedListPoint,
          memberUid: event.member_uid,
        };

        if (listPointType === "common") {
          await editCommonListPoint(listPointData);
        } else if (listPointType === "private") {
          await editPrivateListPoint(listPointData);
        }
      }
    } finally {
      saveLoadingStateInLocalStorage(false);
    }
  };

  return (
    <ListPointEdit
      listPoint={listPoint}
      isCreationMode={isCreationMode}
      onClick={(event, editedListPoint) => {
        void changeListPoints(event, editedListPoint);
      }}
    />
  );
};
