import { Person } from "./Person";

export interface Item {
  readonly id: number;
  readonly title: string;
  readonly amount: number;
  readonly checked: boolean;
  readonly peopleIDs: Person["id"][];
}
