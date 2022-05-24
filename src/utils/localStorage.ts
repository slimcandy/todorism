import { StoreType } from "../store/types";

export const loadState = (key: string, initialValue: StoreType): StoreType => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
};

export const saveState = (key: string, value: StoreType): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};
