import React, { useEffect, useState } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import {
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

import { IAccessIds, ICommonListPoint, IListPoint } from "../../../interfaces";
import { TProvidedEvent } from "../../../../router/types";
import { Loader } from "../../elements";

export const ListPointEditPage = () => {
  const routeData = useLoaderData() as TProvidedEvent;

  const { setLoading } = useLoading();

  const navigate = useNavigate();

  const [accessIds, setAccessIds] = useState<IAccessIds>();

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

  useEffect(() => {
    if (routeData) {
      void routeData.data.then((d) => {
        setAccessIds(d.accessIds);
      });
    }
  }, [routeData]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Await
        resolve={routeData?.data}
        errorElement={<p>Error list point edit page loading</p>}
      >
        {listPoint && (
          <ListPointEdit
            listPoint={listPoint}
            isCreationMode={isCreationMode}
            onClick={(editedListPoint) => {
              void changeListPoint(editedListPoint);
            }}
          />
        )}
      </Await>
    </React.Suspense>
  );
};
