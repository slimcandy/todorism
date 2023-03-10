import {
  deleteCurrentEventFromLocalStorage,
  getCurrentEventFromLocalStorage,
  getEventAccessIds,
  saveCurrentEventInLocalStorage,
} from "../js/utils/localStorage";
import { getEvent, getMembers } from "../js/api_clients";
import { IProvidedEvent, IProvidedMembers } from "./types";

export const deleteLocalEvent = () => {
  deleteCurrentEventFromLocalStorage();
  return null;
};

export const provideEvent = async ({
  eventUid,
}: {
  eventUid: string;
}): Promise<IProvidedEvent> => {
  let event = getCurrentEventFromLocalStorage();

  if (!event || event.eventUid !== eventUid) {
    try {
      event = await getEvent({ eventUid });

      if (event) {
        saveCurrentEventInLocalStorage(event);
      } else {
        throw new Error("event is undefined");
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }

  return Promise.resolve({ event, accessIds: getEventAccessIds(eventUid) });
};

export const provideMembers = async ({
  eventUid,
}: {
  eventUid: string;
}): Promise<IProvidedMembers> => {
  let eventData;
  let members;

  try {
    eventData = await provideEvent({ eventUid });
    members = await getMembers(eventUid);
  } catch (e) {
    return Promise.reject(e);
  }

  return Promise.resolve({
    ...eventData,
    members,
  });
};
