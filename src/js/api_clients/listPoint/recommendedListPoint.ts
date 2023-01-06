import { SERVER_URL } from "../../common/constants";
// import { ErrorResponse } from "../interfaces";
// import {
//   saveCurrentEventInLocalStorage,
//   ILocaleStorageEvent,
//   pushEventToLocalStorageEvents,
// } from "../utils/localStorage";
import { IListPointFromBE } from "../../interfaces";

export const createRecommendedPrivateList = async (
  tripUid: string,
  body: IListPointFromBE[]
) =>
  fetch(`${SERVER_URL}/Trip/${tripUid}/CreateRecommendedPrivateList`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
