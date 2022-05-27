import { getLocalList, setLocalList } from "./localStorage";
import { List } from "../store/types";

// Find list by ID
export const getList = (key: List["key"]): Promise<List | null> =>
  getLocalList(key);

// Save list by ID
export const setList = (key: List["key"], list: List): Promise<void> =>
  setLocalList(key, list);
