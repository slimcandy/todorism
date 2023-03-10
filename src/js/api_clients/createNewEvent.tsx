import { SERVER_URL } from "../common/constants";
import {
  saveCurrentEventInLocalStorage,
  pushAccessIdsInLocalStorage,
} from "../utils/localStorage";
import { IEvent, IAccessIdsFromBE, IAccessIds } from "../interfaces";
import {
  convertIAccessIdsFromBEToIAccessIds,
  convertIEventToIEventFromBE,
} from "../utils";

export const editEvent = async ({
  username,
  event,
}: {
  username: string;
  event: IEvent;
}) => {
  try {
    let accessIds: IAccessIds | null = null;
    const { eventUid = "" } = event;
    const createTripPath = `CreateTrip?author_name=${username}`;
    const editTripPath = `${eventUid}/EditTrip`;
    const response = await fetch(
      `${SERVER_URL}/Trip/${eventUid ? editTripPath : createTripPath}`,
      {
        method: eventUid ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(convertIEventToIEventFromBE(event)),
      }
    );

    if (response.ok) {
      const result = (await response.json()) as IAccessIdsFromBE;

      if (result) {
        accessIds = convertIAccessIdsFromBEToIAccessIds(result);
        pushAccessIdsInLocalStorage(accessIds);
      }

      saveCurrentEventInLocalStorage({
        ...event,
        ...(event.isNewEvent ? { eventUid: accessIds?.eventUid } : {}),
      });
    }

    return accessIds;
  } catch (e) {
    console.error(e);
    return null;
  }
};
