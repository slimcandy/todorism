import { getLocalStorage, setLocalStorage } from "./localStorage";
import {
  localStorageUsernameKey,
  localStorageEventsObject,
  localStorageCurrentEventObject,
  localStorageLoadingState,
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

// LOADING STATE
export const saveLoadingStateInLocalStorage = (state: boolean) => {
  setLocalStorage<boolean>(localStorageLoadingState, state);
};

export const getLoadingStateFromLocalStorage = (): boolean | null =>
  getLocalStorage<boolean>(localStorageLoadingState);
