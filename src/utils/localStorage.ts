import { List } from "../store/types";

export const getLocalList = async (key: string): Promise<List | null> => {
  try {
    const item = await window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setLocalList = async (key: string, list: List): Promise<void> => {
  try {
    await window.localStorage.setItem(key, JSON.stringify(list));
  } catch (error) {
    console.error(error);
  }
};
