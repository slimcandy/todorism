import { Item } from "./Item";
import { Person } from "./Person";

export interface List {
  readonly key: string;
  readonly name: string;
  readonly description: string;
  readonly people: Person[];
  readonly items: Item[];
}
