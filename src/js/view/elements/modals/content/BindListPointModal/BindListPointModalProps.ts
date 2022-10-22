import { ICommonListPoint } from "../../../../../interfaces";

export interface IBindListPointModal {
  listPoint: ICommonListPoint;
  countItemTaken: string;
  onClick: (count: string) => void;
}
