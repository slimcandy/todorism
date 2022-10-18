import { SERVER_URL } from "../../common/constants";
// import { ErrorResponse } from "../interfaces";
// import {
//   saveCurrentEventInLocalStorage,
//   ILocaleStorageEvent,
//   pushEventToLocalStorageEvents,
// } from "../utils/localStorage";

export const createRecommendedPrivateList = async (tripUid: string) =>
  fetch(`${SERVER_URL}/Trip/${tripUid}/CreateRecommendedPrivateList`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      {
        item: {
          name: "string",
          estimated_price: 0,
          weight: 0,
          volume: 0,
          photo: "string",
          tags: ["string"],
          is_presaved: true,
        },
        unit: "string",
        count: 0,
        is_private: true,
      },
    ]),
  });

// if (response.ok) {
//   const event = (await response.json()) as ILocaleStorageEvent;
//
//   pushEventToLocalStorageEvents(event);
//   saveCurrentEventInLocalStorage(event);
//
//   if (navigate) {
//     navigate();
//   }
// } else {
//   const errorResponse = (await response.json()) as ErrorResponse;
//   let errorMessage = "";
//   errorResponse.detail.forEach((error) => {
//     errorMessage += `${error.msg}. \n`;
//   });
//   console.error(errorMessage);
//   // setNewTripErrors(errorMessage);
// }
