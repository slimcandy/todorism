import { IListPoint } from "../../../../interfaces";

export interface IListPointEditProps {
  listPoint: IListPoint;
  isCreationMode: boolean;
  onClick: (listPoint: IListPoint) => void;
}
