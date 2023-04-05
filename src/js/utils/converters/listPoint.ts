import {
  IListPoint,
  IListPointFromBE,
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
  IPrivateListPointFromBE,
  ICommonListPointFromBE,
  ICommonListPoint,
  ITakenListPoint,
  ITakenListPointFromBE,
  IListPointBindingFromBE,
  IListPointBinding,
} from "../../interfaces";

export const getEmptyListPoint = (): IListPoint => ({
  item: {
    name: "",
    tags: [LIST_POINT_CATEGORIES.food],
  },
  count: "1",
  unit: LIST_POINT_UNITS.piece,
});

export const convertIListPointToIListPointFromBE = (
  listPoint: IListPoint
): IListPointFromBE => ({
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

export const convertIPrivateListPointFromBEToIListPoint = (
  listPoint: IPrivateListPointFromBE
): IListPoint => ({
  pointUid: listPoint.point_uid,
  item: {
    ...listPoint.point.item,
    itemUid: listPoint.point.item.item_uid,
  },
  unit: listPoint.point.unit,
  count: String(listPoint.point.count),
});

export const convertIListPointBindingFromBEtoIListPointBinding = (
  binding: IListPointBindingFromBE
): IListPointBinding => ({
  ...binding,
  member: {
    ...binding.member,
    memberUid: binding.member.member_uid,
    isAuthor: binding.member.is_author,
  },
  count: String(binding.count),
});

export const convertICommonListPointFromBEToIListPoint = (
  listPoint: ICommonListPointFromBE
): ICommonListPoint => ({
  pointUid: listPoint.point_uid,
  item: {
    ...listPoint.item,
    itemUid: listPoint.item.item_uid,
  },
  unit: listPoint.unit,
  count: String(listPoint.count),
  bindings: listPoint.bindings.map((b) =>
    convertIListPointBindingFromBEtoIListPointBinding(b)
  ),
});

export const convertITakenListPointFromBEToITakenListPoint = (
  listPoint: ITakenListPointFromBE
): ITakenListPoint => ({
  point: {
    ...listPoint.point,
    count: String(listPoint.point.count),
  },
  count: String(listPoint.count),
  isTaken: listPoint.is_taken,
  pointUid: listPoint.point_uid,
});
