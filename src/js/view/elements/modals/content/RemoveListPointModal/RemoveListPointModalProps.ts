import { IListPoint } from "../../../../../interfaces";

export interface IRemoveListPointModal {
  listPointName: IListPoint["item"]["name"];
  onRemoveClick: () => void;
  onCancelClick: () => void;
}
