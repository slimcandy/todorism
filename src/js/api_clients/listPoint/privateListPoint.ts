import { SERVER_URL } from "../../common/constants";

import { IListPoint } from "../../interfaces";
import { convertIListPointToIListPointFromBE } from "../../utils";

const endPoint = (tripUid: string) => `${SERVER_URL}/PrivateList/${tripUid}`;

export const privateListPointApi = (tripUid: string, pointUid?: string) => ({
  addItem: `${endPoint(tripUid)}/AddItem`,
  editItem: `${endPoint(tripUid)}/EditItem/${pointUid || ""}`,
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
  fetch(privateListPointApi(tripUid)[mode === "add" ? "addItem" : "editItem"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      point: convertIListPointToIListPointFromBE(listPoint),
      member_uid: memberUid,
    }),
  });
