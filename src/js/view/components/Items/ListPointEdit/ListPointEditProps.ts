import { ICommonListPoint, IListPoint } from "../../../../interfaces";

export interface IListPointEditProps {
  listPoint: IListPoint | ICommonListPoint;
  isCreationMode: boolean;
  onClick: (listPoint: IListPoint) => void;
}
