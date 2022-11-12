import {
  IListPointFromBE,
  IListPointBinding,
  IListPointBindingFromBE,
  IListPoint,
} from "./ListPoint";

// Backend models
export interface ICommonListPointFromBE extends IListPointFromBE {
  bindings: IListPointBindingFromBE[];
}

// Frontend models
export interface ICommonListPoint extends IListPoint {
  bindings: IListPointBinding[];
}
