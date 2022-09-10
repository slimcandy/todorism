import { getLocalList, setLocalList } from "./localStorage_old";
import { List } from "../interfaces";

// Find list by ID
export const getStorageList = (key: List["key"]): Promise<List | null> =>
  getLocalList(key);

// Save list by ID
export const setStorageList = (key: List["key"], list: List): Promise<void> =>
  setLocalList(key, list);
