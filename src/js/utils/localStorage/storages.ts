import { getLocalStorage, setLocalStorage } from "./localStorage";
import {
  localStorageUsernameKey,
  localStorageEventsObject,
  localStorageCurrentEventObject,
} from "./constants";
import { TLocalStorageEvents, ILocaleStorageEvent } from "./types";

// USERNAME
export const saveUserNameInLocalStorage = (name: string) => {
  setLocalStorage<string>(localStorageUsernameKey, name);
};

export const getUserNameFromLocalStorage = (): string | null =>
  getLocalStorage<string>(localStorageUsernameKey);

// EVENTS
export const saveCurrentEventInLocalStorage = (event: ILocaleStorageEvent) => {
  setLocalStorage<ILocaleStorageEvent>(localStorageCurrentEventObject, event);
};

export const getCurrentEventFromLocalStorage = (): ILocaleStorageEvent | null =>
  getLocalStorage<ILocaleStorageEvent>(localStorageCurrentEventObject);

export const saveEventsInLocalStorage = (events: TLocalStorageEvents) => {
  setLocalStorage<TLocalStorageEvents>(localStorageEventsObject, events);
};

export const getEventsFromLocalStorage = (): TLocalStorageEvents => {
  const events = getLocalStorage<TLocalStorageEvents>(localStorageEventsObject);
  return events && Array.isArray(events) ? events : [];
};

export const getEventsIdsFromLocalStorage = (): string[] =>
  getEventsFromLocalStorage().map((e) => e.trip_uid);

export const pushEventToLocalStorageEvents = (event: ILocaleStorageEvent) => {
  const events = getEventsFromLocalStorage();

  events.push(event);
  saveEventsInLocalStorage(events);
};

// ACCESS
export const getAccessIdsForEvent = (
  tripUid: ILocaleStorageEvent["trip_uid"]
): ILocaleStorageEvent | undefined => {
  const events = getEventsFromLocalStorage();

  return events.find((e) => e.trip_uid === tripUid);
};

export const getMemberUidForEvent = (
  tripUid: ILocaleStorageEvent["trip_uid"]
): ILocaleStorageEvent["member_uid"] | undefined => {
  const event = getAccessIdsForEvent(tripUid);

  return event?.member_uid;
};
