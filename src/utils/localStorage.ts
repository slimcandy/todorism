import { List } from "../store/types";

export const getLocalList = async (key: string): Promise<List | null> => {
  try {
    const item = await pullLocalStorage(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setLocalList = async (key: string, list: List): Promise<void> => {
  try {
    await pushLocalStorage(key, JSON.stringify(list));
  } catch (error) {
    console.error(error);
  }
};

export const pullLocalStorage = async (
  localStorageKey: string
): Promise<string | null> => {
  try {
    const item = await window.localStorage.getItem(localStorageKey);
    return item && item.length > 0 ? item : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const pushLocalStorage = async (
  localStorageKey: string,
  localStorageValue: string
): Promise<void> => {
  try {
    await window.localStorage.setItem(
      localStorageKey,
      JSON.stringify(localStorageValue)
    );
  } catch (error) {
    console.error(error);
  }
};
