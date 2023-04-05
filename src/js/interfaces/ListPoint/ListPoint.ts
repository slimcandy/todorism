import { LIST_POINT_UNITS, LIST_POINT_CATEGORIES } from "./contants";

// Backend models
export interface IItemFromBE {
  name: string;
  tags: LIST_POINT_CATEGORIES[];
  estimated_price: number;
  weight: number;
  volume: number;
  photo: string;
  is_presaved: boolean;
  item_uid?: string;
}

export interface IListPointFromBE {
  item: IItemFromBE;
  unit: keyof typeof LIST_POINT_UNITS;
  count: number;
  is_private: boolean;
}

export interface IListPointBindingFromBE {
  member: {
    member_uid: string;
    name: string;
    is_author: boolean;
  };
  count: number;
}

// Frontend models
export interface IItem
  extends Omit<
    IItemFromBE,
    "estimated_price" | "weight" | "volume" | "photo" | "is_presaved"
  > {
  itemUid?: string;
}

export interface IListPoint
  extends Omit<
    IListPointFromBE,
    "is_private" | "item" | "count" | "point_uid"
  > {
  item: IItem;
  pointUid?: string;
  count: string;
}

export interface IListPointBinding
  extends Omit<IListPointBindingFromBE, "member" | "count"> {
  member: {
    memberUid: string;
    name: string;
    isAuthor: boolean;
  };
  count: string;
}
