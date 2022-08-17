import { List } from "./List";

export interface Store {
  readonly list: List | null;
  readonly currentListKey: List["key"] | null;
  nickname: string | null | undefined;
}
