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
export const saveCurrentEventInLocalStorage = (events: ILocaleStorageEvent) => {
  setLocalStorage<ILocaleStorageEvent>(localStorageCurrentEventObject, events);
};

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
