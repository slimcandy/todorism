import { StoreType } from "../store/types";
import { loadState, saveState } from "./localStorage";

export const getState = (key: string, initialValue: StoreType) => {
  // if(process.env.REACT_APP_STORAGE_SOURCE === 'localStorage') {}

  return loadState(key, initialValue);
};

export const setState = (key: string, value: StoreType): void => {
  // if(process.env.REACT_APP_STORAGE_SOURCE === 'localStorage') {}

  return saveState(key, value);
};
