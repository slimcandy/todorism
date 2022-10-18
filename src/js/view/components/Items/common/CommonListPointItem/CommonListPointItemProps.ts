import { IListPoint } from "../../../../../interfaces";

export interface ICommonListPointItemProps {
  listPoint: IListPoint;
  onEdit: () => void;
  onRemove: () => void;
}
