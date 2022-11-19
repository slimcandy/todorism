import { IEvent } from "../../interfaces";
import { getLocalStorage, setLocalStorage } from "./localStorage";
import { localStorageCurrentEventObject } from "./constants";

export const saveCurrentEventInLocalStorage = (event: IEvent) => {
  setLocalStorage<IEvent>(localStorageCurrentEventObject, event);
};

export const getCurrentEventFromLocalStorage = () =>
  getLocalStorage<IEvent>(localStorageCurrentEventObject);
