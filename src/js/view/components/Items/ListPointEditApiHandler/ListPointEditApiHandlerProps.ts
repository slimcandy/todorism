import { IListPoint } from "../../../../interfaces";
import { ILocaleStorageEvent } from "../../../../utils/localStorage";

export interface IListPointEditApiHandler {
  accessIds: ILocaleStorageEvent;
  listPointType: "common" | "private";
  listPoint: IListPoint;
  listPointIndex?: number;
}
