import { List, StoreType } from "./types";

export const initialStore: StoreType = {
  list: null,
  currentListKey: null,
};
export const initialList: List = {
  key: `List${Date.now()}`,
  name: "",
  description: "",
  items: [],
  people: [],
};

export const currentListLabel = "currentListKey";
