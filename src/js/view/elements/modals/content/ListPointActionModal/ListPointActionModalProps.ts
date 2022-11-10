import { IListPoint } from "../../../../../interfaces";

export interface IListPointActionModal {
  listPointName: IListPoint["item"]["name"];
  onEditClick: () => void;
  onRemoveClick: () => void;
}
