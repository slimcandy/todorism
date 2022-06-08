import { List } from "../store/types";

export const pullLocalStorage = async (
  localStorageKey: string
): Promise<string | null> => {
  try {
    const item = await window.localStorage.getItem(localStorageKey);
    return item && item.length > 0 ? item : null;
  } catch (error) {
    return null;
  }
};

export const pushLocalStorage = async (
  localStorageKey: string,
  localStorageValue: string
): Promise<void> =>
  window.localStorage.setItem(localStorageKey, localStorageValue);

export const getLocalList = async (key: string): Promise<List | null> => {
  try {
    const item = await pullLocalStorage(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    return null;
  }
};

export const setLocalList = async (key: string, list: List): Promise<void> =>
  pushLocalStorage(key, JSON.stringify(list));
