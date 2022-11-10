import {
  IListPoint,
  IListPointFromBE,
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../interfaces";

export const getEmptyListPoint = (): IListPoint => ({
  item: {
    name: "",
    tags: [LIST_POINT_CATEGORIES.food],
  },
  count: "1",
  unit: LIST_POINT_UNITS.gram,
});

export const convertIListPointToIListPointFromBE = (
  listPoint: IListPoint
): IListPointFromBE => ({
  point_uid: listPoint.pointUid,
  is_private: true,
  item: {
    ...listPoint.item,
    item_uid: listPoint.item.itemUid,
    is_presaved: true,
    estimated_price: 0,
    weight: 0,
    volume: 0,
    photo: "",
  },
  unit: listPoint.unit,
  count: Number(listPoint.count),
});
