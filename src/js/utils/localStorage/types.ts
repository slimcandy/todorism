import { ICommonListPoint, IListPoint, IAccessIds } from "../../interfaces";
import { LIST_POINT_TYPES } from "../../common/constants";

export type TLocalStorage = { [key: string]: string };
export type TLocalStorageListPoint = IListPoint | ICommonListPoint;
export type TLocalStorageListPointTypes = keyof typeof LIST_POINT_TYPES;

export type TLocalStorageAccessIdsList = {
  [key: string]: IAccessIds;
};
