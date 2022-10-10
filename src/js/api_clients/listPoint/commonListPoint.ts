import { SERVER_URL } from "../../common/constants";

import { IListPoint } from "../../interfaces";
import { convertIListPointToIListPointFromBE } from "../../utils";

const endPoint = (tripUid: string) => `${SERVER_URL}/CommonList/${tripUid}`;

export const commonListPointApi = (tripUid: string) => ({
  addItem: `${endPoint(tripUid)}/AddItem`,
  editItem: `${endPoint(tripUid)}/EditItem`,
});

export const editCommonListPoint = ({
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
  fetch(commonListPointApi(tripUid)[mode === "add" ? "addItem" : "editItem"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...convertIListPointToIListPointFromBE(listPoint),
      member_uid: memberUid,
    }),
  });
