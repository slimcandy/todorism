import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEventAccessIds,
  getCurrentListPointFromLocalStorage,
  deleteCurrentListPointFromLocalStorage,
  getListPointTypeFromLocalStorage,
} from "../../../utils/localStorage";
import { ListPointEdit } from "../../components/Items/ListPointEdit/ListPointEdit";

import {
  editPrivateListPoint,
  editCommonListPoint,
} from "../../../api_clients";
import { useLoading } from "../../../hooks";

import { ICommonListPoint, IListPoint } from "../../../interfaces";

export const ListPointEditPage = () => {
  const { setLoading } = useLoading();

  const { eventUid } = useParams();

  const navigate = useNavigate();

  const accessIds = (eventUid && getEventAccessIds(eventUid)) || undefined;

  const listPointType = getListPointTypeFromLocalStorage();

  const listPoint = getCurrentListPointFromLocalStorage<
    ICommonListPoint | IListPoint
  >();

  const isCreationMode = !listPoint?.pointUid;

  const changeListPoint = async (editedListPoint: IListPoint) => {
    try {
      setLoading(true);

      if (accessIds) {
        const mode: "add" | "edit" = isCreationMode ? "add" : "edit";
        const listPointData = {
          ...accessIds,
          mode,
          listPoint: editedListPoint,
        };

        if (listPointType === "common") {
          await editCommonListPoint(listPointData);
        } else if (listPointType === "private") {
          await editPrivateListPoint(listPointData);
        }

        // back to listPoints page
        navigate(-1);
        deleteCurrentListPointFromLocalStorage();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    listPoint && (
      <ListPointEdit
        listPoint={listPoint}
        isCreationMode={isCreationMode}
        onClick={(editedListPoint) => {
          void changeListPoint(editedListPoint);
        }}
      />
    )
  );
};
