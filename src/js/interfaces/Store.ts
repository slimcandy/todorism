import { List } from "./List";

export interface Store {
  userUid: string | null;
  readonly list: List | null;
  readonly currentListKey: List["key"] | null;
}
