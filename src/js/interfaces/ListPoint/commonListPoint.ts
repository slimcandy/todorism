import {
  IListPointFromBE,
  IListPointBinding,
  IListPointBindingFromBE,
  IListPoint,
} from "./ListPoint";

// Backend models
export interface ICommonListPointFromBE extends IListPointFromBE {
  point_uid: string;
  bindings: IListPointBindingFromBE[];
}

// Frontend models
export interface ICommonListPoint extends IListPoint {
  pointUid: string;
  bindings: IListPointBinding[];
}
