import { IListPoint } from "../../../../../interfaces";

export interface IPrivateListPointItemProps {
  listPoint: IListPoint;
  onEdit: () => void;
  onRemove: () => void;
}
