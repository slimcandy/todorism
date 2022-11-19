import { SERVER_URL } from "../../common/constants";

import { IListPoint } from "../../interfaces";
import { convertIListPointToIListPointFromBE } from "../../utils";

const endPoint = (eventUid: string) => `${SERVER_URL}/CommonList/${eventUid}`;

export const commonListPointApi = (eventUid: string) => ({
  addItem: `${endPoint(eventUid)}/AddItem`,
  editItem: `${endPoint(eventUid)}/EditItem`,
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
  fetch(commonListPointApi(eventUid)[mode === "add" ? "addItem" : "editItem"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...convertIListPointToIListPointFromBE(listPoint),
      member_uid: memberUid,
    }),
  });
