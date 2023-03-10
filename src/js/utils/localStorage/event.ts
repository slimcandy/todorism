import { IEvent } from "../../interfaces";
import {
  deleteLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "./localStorage";
import { localStorageCurrentEventObject } from "./constants";

export const saveCurrentEventInLocalStorage = (event: IEvent) => {
  setLocalStorage<IEvent>(localStorageCurrentEventObject, event);
};

export const deleteCurrentEventFromLocalStorage = () => {
  deleteLocalStorage(localStorageCurrentEventObject);
};

export const getCurrentEventFromLocalStorage = () =>
  getLocalStorage<IEvent>(localStorageCurrentEventObject);
