import { localStorageTripObjects, SERVER_URL } from "../common/constants";
import { ErrorResponse, NewTripResponse } from "../interfaces";
import { pullLocalStorage, pushLocalStorage } from "../utils/localStorage";

export const createNewEvent = async (
  username: string,
  eventName: string,
  eventDescription: string | undefined,
  eventStartDate: string | undefined,
  eventEndDate: string | undefined,
  navigate?: () => void
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
    const json: NewTripResponse = (await response.json()) as NewTripResponse;
    let savedEvents: Array<NewTripResponse> = [];

    await pullLocalStorage(localStorageTripObjects).then((str) => {
      savedEvents = JSON.parse(str ?? "[]") as Array<NewTripResponse>;
    });

    savedEvents.push(json);

    pushLocalStorage(localStorageTripObjects, JSON.stringify(savedEvents))
      .then(() => {
        if (!navigate) return;
        navigate();
      })
      .catch(() => {});
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
