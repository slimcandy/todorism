import { IListPoint } from "../../../../interfaces";

export interface IListPointEditFormProps {
  listPoint: IListPoint;
  onChange: (listPointInModel: IListPoint) => void;
  onFullFill: (filled: boolean) => void;
}
