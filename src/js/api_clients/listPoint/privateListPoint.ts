import { SERVER_URL } from "../../common/constants";

import { IListPoint } from "../../interfaces";
import { convertIListPointToIListPointFromBE } from "../../utils";

const endPoint = (eventUid: string) => `${SERVER_URL}/PrivateList/${eventUid}`;

export const privateListPointApi = ({
  eventUid,
  pointUid,
  memberUid,
}: {
  eventUid: string;
  pointUid?: string;
  memberUid?: string;
}) => ({
  addItem: `${endPoint(eventUid)}/AddItem`,
  editItem: `${endPoint(eventUid)}/EditItem/${pointUid || ""}`,
  getItems: `${endPoint(eventUid)}/GetItems/${memberUid || ""}`,
  removeItem: `${endPoint(eventUid)}/DeleteItem`,
});

export const getPrivateListPoints = ({
  eventUid,
  memberUid,
}: {
  eventUid: string;
  memberUid: string;
}) =>
  fetch(privateListPointApi({ eventUid, memberUid }).getItems, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const editPrivateListPoint = ({
  mode,
  eventUid,
  memberUid,
  listPoint,
}: {
  mode: "add" | "edit";
  eventUid: string;
  memberUid?: string;
  listPoint: IListPoint;
}) => {
  const privateMethod = mode === "add" ? "addItem" : "editItem";
  return fetch(
    privateListPointApi({ eventUid, pointUid: listPoint.pointUid })[
      privateMethod
    ],
    {
      method: mode === "add" ? "POST" : "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        point: convertIListPointToIListPointFromBE(listPoint),
        member_uid: memberUid,
      }),
    }
  );
};

export const removePrivateListPoint = ({
  eventUid,
  memberUid,
  pointUid,
}: {
  eventUid: string;
  memberUid: string;
  pointUid: string;
}) =>
  fetch(privateListPointApi({ eventUid }).removeItem, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      point_uid: pointUid,
      member_uid: memberUid,
    }),
  });
