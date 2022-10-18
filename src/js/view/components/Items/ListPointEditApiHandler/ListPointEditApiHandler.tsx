import React from "react";
import { IListPointEditApiHandler } from "./ListPointEditApiHandlerProps";
import { IListPoint } from "../../../../interfaces";
import { ListPointEdit } from "../ListPointEdit/ListPointEdit";

import { ILocaleStorageEvent } from "../../../../utils/localStorage";
import {
  editPrivateListPoint,
  editCommonListPoint,
} from "../../../../api_clients";
import { useLoading } from "../../../../hooks";

export const ListPointEditApiHandler = (props: IListPointEditApiHandler) => {
  const { listPoint, listPointIndex, listPointType, onFinish } = props;

  const { setLoading } = useLoading();

  const isCreationMode = listPointIndex === undefined;

  const changeListPoints = async (
    event: ILocaleStorageEvent,
    editedListPoint: IListPoint
  ) => {
    try {
      if (event) {
        setLoading(true);

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
      setLoading(false);
      onFinish();
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
