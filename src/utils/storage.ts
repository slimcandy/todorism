import { StoreType } from "../store/types";
import { loadState as loadLocal, saveState as saveLocal } from "./localStorage";
import { loadState as loadWeb } from "./fetchStorage";

export const getState = (
  key: string,
  initialValue: StoreType
): Promise<StoreType> => {
  if (process.env.REACT_APP_STORAGE_SOURCE === "fetchStorage") {
    return loadWeb(key, initialValue);
  }

  return loadLocal(key, initialValue);
};

export const setState = (key: string, value: StoreType): Promise<void> => {
  // if(process.env.REACT_APP_STORAGE_SOURCE === 'localStorage') {}

  return saveLocal(key, value);
};
