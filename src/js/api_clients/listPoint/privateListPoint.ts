import { SERVER_URL } from "../../common/constants";

import { IListPoint } from "../../interfaces";
import { convertIListPointToIListPointFromBE } from "../../utils";

const endPoint = (tripUid: string) => `${SERVER_URL}/PrivateList/${tripUid}`;

export const privateListPointApi = ({
  tripUid,
  pointUid,
  memberUid,
}: {
  tripUid: string;
  pointUid?: string;
  memberUid?: string;
}) => ({
  addItem: `${endPoint(tripUid)}/AddItem`,
  editItem: `${endPoint(tripUid)}/EditItem/${pointUid || ""}`,
  getItems: `${endPoint(tripUid)}/GetItems/${memberUid || ""}`,
  removeItem: `${endPoint(tripUid)}/DeleteItem`,
});

export const getPrivateListPoints = ({
  tripUid,
  memberUid,
}: {
  tripUid: string;
  memberUid: string;
}) =>
  fetch(privateListPointApi({ tripUid, memberUid }).getItems, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const editPrivateListPoint = ({
  mode,
  tripUid,
  memberUid,
  listPoint,
}: {
  mode: "add" | "edit";
  tripUid: string;
  memberUid?: string;
  listPoint: IListPoint;
}) =>
  fetch(
    privateListPointApi({ tripUid })[mode === "add" ? "addItem" : "editItem"],
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

export const removePrivateListPoint = ({
  tripUid,
  memberUid,
  pointUid,
}: {
  tripUid: string;
  memberUid: string;
  pointUid: string;
}) =>
  fetch(privateListPointApi({ tripUid }).removeItem, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      point_uid: pointUid,
      member_uid: memberUid,
    }),
  });
