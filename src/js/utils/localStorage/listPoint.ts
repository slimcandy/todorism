import { TLocalStorageListPoint, TLocalStorageListPointTypes } from "./types";
import {
  deleteLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "./localStorage";
import {
  localStorageCurrentListPointObject,
  localStorageListPointType,
} from "./constants";

export const saveCurrentListPointInLocalStorage = (
  listPoint: TLocalStorageListPoint
) => {
  setLocalStorage<TLocalStorageListPoint>(
    localStorageCurrentListPointObject,
    listPoint
  );
};

export const getCurrentListPointFromLocalStorage = <
  TLocalStorageListPoint
>(): TLocalStorageListPoint | null =>
  getLocalStorage<TLocalStorageListPoint>(localStorageCurrentListPointObject);

export const deleteCurrentListPointFromLocalStorage = () =>
  deleteLocalStorage(localStorageCurrentListPointObject);

export const saveListPointTypeInLocalStorage = (
  type: TLocalStorageListPointTypes
) => {
  setLocalStorage<TLocalStorageListPointTypes>(localStorageListPointType, type);
};

export const getListPointTypeFromLocalStorage = () =>
  getLocalStorage<TLocalStorageListPointTypes>(localStorageListPointType);
