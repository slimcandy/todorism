import { IAccessIds, IListPoint } from "../../../../interfaces";

export interface IListPointEditApiHandler {
  accessIds: IAccessIds;
  listPointType: "common" | "private";
  listPoint: IListPoint;
  listPointIndex?: number;
}
