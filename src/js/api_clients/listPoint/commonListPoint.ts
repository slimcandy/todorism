import { SERVER_URL } from "../../common/constants";

import { IListPoint } from "../../interfaces";
import { convertIListPointToIListPointFromBE } from "../../utils";

const endPoint = (eventUid: string) => `${SERVER_URL}/CommonList/${eventUid}`;

export const commonListPointApi = ({
  eventUid,
  pointUid,
}: {
  eventUid: string;
  pointUid?: string;
}) => ({
  addItem: `${endPoint(eventUid)}/AddItem`,
  editItem: `${endPoint(eventUid)}/EditItem/${pointUid || ""}`,
  getItems: `${endPoint(eventUid)}/GetList`,
  deleteItem: `${endPoint(eventUid)}/DeleteItem`,
  lockItem: `${endPoint(eventUid)}/Lock`,
  unlockItem: `${endPoint(eventUid)}/Unlock`,
  bindItem: `${endPoint(eventUid)}/Bind`,
  unbindItem: `${endPoint(eventUid)}/Unbind`,
  getMemberBindings: `${endPoint(eventUid)}/GetMemberBindings/${
    pointUid || ""
  }`,
});

export const getCommonListPoints = ({
  eventUid,
  memberUid,
}: {
  eventUid: string;
  memberUid: string;
}) =>
  fetch(commonListPointApi({ eventUid }).getItems, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      member_uid: memberUid,
    }),
  });

export const editCommonListPoint = ({
  mode,
  eventUid,
  memberUid,
  listPoint,
}: {
  mode: "add" | "edit";
  eventUid: string;
  memberUid?: string;
  listPoint: IListPoint;
}) =>
  fetch(
    commonListPointApi({ eventUid, pointUid: listPoint.pointUid })[
      mode === "add" ? "addItem" : "editItem"
    ],
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        point: convertIListPointToIListPointFromBE(listPoint),
        member_uid: memberUid,
      }),
    }
  );

export const deleteCommonListPoint = ({
  eventUid,
  memberUid,
  pointUid,
}: {
  eventUid: string;
  memberUid: string;
  pointUid: IListPoint["pointUid"];
}) =>
  fetch(commonListPointApi({ eventUid }).deleteItem, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      point_uid: pointUid,
      member_uid: memberUid,
    }),
  });

export const lockCommonListPoint = ({
  eventUid,
  memberUid,
  pointUid,
}: {
  eventUid: string;
  memberUid: string;
  pointUid: IListPoint["pointUid"];
}) =>
  fetch(commonListPointApi({ eventUid }).lockItem, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      point_uid: pointUid,
      member_uid: memberUid,
    }),
  });

export const unlockCommonListPoint = ({
  eventUid,
  memberUid,
  pointUid,
}: {
  eventUid: string;
  memberUid: string;
  pointUid: IListPoint["pointUid"];
}) =>
  fetch(commonListPointApi({ eventUid }).unlockItem, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      point_uid: pointUid,
      member_uid: memberUid,
    }),
  });

export const changeCommonListPointBindStatus = ({
  eventUid,
  memberUid,
  pointUid,
  count,
}: {
  eventUid: string;
  memberUid: string;
  pointUid: IListPoint["pointUid"];
  count?: string;
}) =>
  fetch(commonListPointApi({ eventUid })[count ? "bindItem" : "unbindItem"], {
    method: count ? "POST" : "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      point_uid: pointUid,
      member_uid: memberUid,
      count,
    }),
  });

export const getMemberBindings = ({
  eventUid,
  pointUid,
}: {
  eventUid: string;
  pointUid: IListPoint["pointUid"];
}) =>
  fetch(commonListPointApi({ eventUid, pointUid }).getMemberBindings, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
