import { StoreType } from "../store/types";

export const loadState = async (
  key: string,
  initialValue: StoreType
): Promise<StoreType> => {
  try {
    const item = await window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
};

export const saveState = async (
  key: string,
  value: StoreType
): Promise<void> => {
  try {
    await window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};
