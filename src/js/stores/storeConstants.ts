import { List, Store } from "../interfaces";

export const initialStore: Store = {
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
