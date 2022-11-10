import { SERVER_URL } from "../common/constants";
import { ErrorResponse } from "../interfaces";
import {
  saveCurrentEventInLocalStorage,
  ILocaleStorageEvent,
  pushEventToLocalStorageEvents,
} from "../utils/localStorage";

export const createNewEvent = async (
  username: string,
  eventName: string,
  eventDescription: string | null,
  eventStartDate: string | null,
  eventEndDate: string | null
) => {
  const response = await fetch(
    `${SERVER_URL}/Trip/CreateTrip?author_name=${username}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: eventName,
        description: eventDescription,
        start: eventStartDate,
        end: eventEndDate,
      }),
    }
  );

  if (response.ok) {
    const event = (await response.json()) as ILocaleStorageEvent;

    pushEventToLocalStorageEvents(event);
    saveCurrentEventInLocalStorage(event);
  } else {
    const errorResponse = (await response.json()) as ErrorResponse;
    let errorMessage = "";
    errorResponse.detail.forEach((error) => {
      errorMessage += `${error.msg}. \n`;
    });

    console.error(errorMessage);
    // setNewTripErrors(errorMessage);
  }
};
