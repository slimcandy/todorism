import { IListPoint } from "../../../../interfaces";

export interface IListPointEditApiHandler {
  listPointType: "common" | "private";
  listPoint: IListPoint;
  listPointIndex?: number;
  onFinish: () => void;
}
