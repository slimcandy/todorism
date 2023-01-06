import { SERVER_URL } from "../../common/constants";
import { IAccessIds } from "../../interfaces";

const getEndPoint = ({ eventUid, memberUid }: IAccessIds) =>
  `${SERVER_URL}/PrivateList/${eventUid}/TakeItemsList/${memberUid}`;

export const takenListPointApi = ({
  eventUid,
  memberUid,
  pointUid,
}: IAccessIds & { pointUid?: string }) => {
  const endPoint = getEndPoint({ eventUid, memberUid });

  return {
    getItems: `${endPoint}`,
    takeItem: `${endPoint}/Take/${pointUid || ""}`,
    untakeItem: `${endPoint}/Untake/${pointUid || ""}`,
  };
};

export const getTakenListPoints = (accessIds: IAccessIds) =>
  fetch(takenListPointApi(accessIds).getItems, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const changeIsTakenStatus = ({
  eventUid,
  memberUid,
  pointUid,
  isTaken,
}: IAccessIds & {
  pointUid: string;
  isTaken: boolean;
}) => {
  const takenMethod = isTaken ? "untakeItem" : "takeItem";
  return fetch(
    takenListPointApi({ eventUid, memberUid, pointUid })[takenMethod],
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
