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

  const apiHandler =
    listPointType === "common" ? editCommonListPoint : editPrivateListPoint;

  const changeListPoints = async (
    event: ILocaleStorageEvent,
    editedListPoint: IListPoint
  ) => {
    try {
      if (event) {
        saveLoadingStateInLocalStorage(true);

        await apiHandler({
          mode: isCreationMode ? "add" : "edit",
          tripUid: event.trip_uid,
          listPoint: editedListPoint,
          memberUid: event.member_uid,
        });
      }
    } finally {
      saveLoadingStateInLocalStorage(false);
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
