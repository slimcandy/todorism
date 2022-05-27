export type List = {
  key: string;
  name: string;
  description: string;
  people: Person[];
  items: Item[];
};

export type Person = {
  id: number;
  name: string;
};

export type Item = {
  id: number;
  title: string;
  quantity: number;
  checked: boolean;
  peopleIDs: Person["id"][];
};

export type StoreType = {
  list: List | null;
};
