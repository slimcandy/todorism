import React from "react";
import { IListPointEditApiHandler } from "./ListPointEditApiHandlerProps";
import { IListPoint } from "../../../../interfaces";
import { ListPointEdit } from "../ListPointEdit/ListPointEdit";

import {
  editPrivateListPoint,
  editCommonListPoint,
} from "../../../../api_clients";
import { useLoading } from "../../../../hooks";

export const ListPointEditApiHandler = (props: IListPointEditApiHandler) => {
  const { accessIds, listPoint, listPointIndex, listPointType, onFinish } =
    props;

  const { setLoading } = useLoading();

  const isCreationMode = listPointIndex === undefined;

  const changeListPoints = async (editedListPoint: IListPoint) => {
    try {
      const { trip_uid, member_uid } = accessIds;

      if (trip_uid && member_uid) {
        setLoading(true);

        const mode: "add" | "edit" = isCreationMode ? "add" : "edit";
        const listPointData = {
          mode,
          tripUid: trip_uid,
          listPoint: editedListPoint,
          memberUid: member_uid,
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
      onClick={(editedListPoint) => {
        void changeListPoints(editedListPoint);
      }}
    />
  );
};
