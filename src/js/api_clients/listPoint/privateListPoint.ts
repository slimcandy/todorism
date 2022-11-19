import { SERVER_URL } from "../../common/constants";

import { IListPoint } from "../../interfaces";
import { convertIListPointToIListPointFromBE } from "../../utils";

const endPoint = (eventUid: string) => `${SERVER_URL}/PrivateList/${eventUid}`;

export const privateListPointApi = (eventUid: string, pointUid?: string) => ({
  addItem: `${endPoint(eventUid)}/AddItem`,
  editItem: `${endPoint(eventUid)}/EditItem/${pointUid || ""}`,
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
}) =>
  fetch(
    privateListPointApi(eventUid)[mode === "add" ? "addItem" : "editItem"],
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
